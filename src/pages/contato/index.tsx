import NavbarDesktop from "@/components/NavbarDesktop";
import { socialItems } from "@/providers/ItemsList";
import { ItemsListProps } from "@/providers/ItemsList/itemsList.interface";
import { metaDescription } from "@/providers/SiteInfo";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Container, Modal, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import { phoneNumber } from "../../utils/validations";
import styles from './styles.module.scss';

export const config = {
    api: {
      bodyParser: false,
    },
};

const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneNumber).required(),
    message: yup.string().max(500).required()
})

const Contato = () => {
    const maxCharacters = 500;
    const inputFile = useRef<HTMLInputElement>(null);
    const btnSubmit = useRef<HTMLButtonElement>(null);
    const charactersSpan = useRef<HTMLSpanElement>(null);
    const [charactersLeft, setCharactersLeft] = useState<number>(maxCharacters);
    const [file, setFile] = useState<File | null>(null);
    const [sent, setSent] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width:1024px)');
    const recaptcha = useRef<ReCAPTCHA>(null);
    const [captchaValidated, setCaptchaValidated] = useState<boolean>(false);
    const [sendingEmail, setSendingEmail] = useState<boolean>(false);

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    function handleChange(event: any){
        setFile(event?.target?.files[0]);        
        ValidaArquivo(event?.target?.files[0]);
    }

    function ValidaArquivo(file: File) {
        var tamanhoArquivo = file?.size / 1024 / 1024; // in MB
        var tiposArquivo = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];

        if(tamanhoArquivo == 0){
            setFile(null);
        }
        if (tamanhoArquivo > 4) {
            alert('O arquivo excede a 4 MB');
            btnSubmit.current?.setAttribute("disabled", "disabled");
            inputFile.current?.setAttribute("value", "");
            setFile(null);
        } else {
            for (let i = 0; i < tiposArquivo.length; i++) {
                if (file?.type === tiposArquivo[i]) {
                    i=tiposArquivo.length;
                    btnSubmit.current?.removeAttribute("disabled");
                }

                else if(i===tiposArquivo.length-1){
                    alert('Tipo de arquivo não permitido (JPG, PNG, JPEG ou PDF)');
                    btnSubmit.current?.setAttribute("disabled", "disabled");
                    inputFile.current?.setAttribute("value", "");
                    setFile(null);
                }
            }
        }
    }

    function limitTextarea(event: any) {
        if(charactersSpan.current){
            const valor = event.target.value;
            const total = valor.length;
            if(total <= maxCharacters) {
                let resto = maxCharacters - total;
                setCharactersLeft(resto);
                if(resto <= 15){
                    charactersSpan.current.classList.add(styles.limit);
                } else{
                    charactersSpan.current.classList.remove(styles.limit);
                }
            } else {
                setCharactersLeft(valor.substr(0, maxCharacters));
            }
        }
        
    }

    function handleOpenModal(){
        setModalOpen(true);
        setTimeout(handleCloseModal, 7000);
    }
    
    function handleCloseModal(){
        setModalOpen(false);
    }

    async function getRecaptchaValidation(){const captchaValue = recaptcha?.current?.getValue();
        if (!captchaValue) {
            setSendingEmail(false);
            alert('Por favor, valide o reCAPTCHA');
            return;
        }

        try{
            const url = `${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/captcha`;
            const bodyData = {
                "captchaValue": captchaValue
            }
            const resp = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
    
            const status = await resp.status;

            if(status === 200){
                sendEmail();
                setCaptchaValidated(true);
            } else{
                setCaptchaValidated(false);
                setSent(false);
                handleOpenModal();
            }
        } catch(error) {
            console.error(error);
            setSendingEmail(false);
            setCaptchaValidated(false);
            setSent(false);
            handleOpenModal();
        }
    }

    function onSubmit(){
        setSendingEmail(true);
        process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === "true" ? getRecaptchaValidation() : sendEmail();
    }

    function onError(error: any){
        console.error(error);
    }

    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    })

    function handleSocialClick(item: ItemsListProps){
        (window as any).dataLayer.push({
            'event': 'click_social_network',
            'social_network_name': item.name
        });

        window.open(item.link, "_blank");
    }

    async function sendEmail(){
        const url = `${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/send`;

        try{
            const resp = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: getValues().name,
                    email: getValues().email,
                    phone: getValues().phone,
                    message: getValues().message.replaceAll("\n", `<br />`)
                })
            })
            
            const isSent = resp.status;
            setSent(isSent === 200);
            setCaptchaValidated(true);
            handleOpenModal();
            if(isSent){
                setValue("name", initialValues.name);
                setValue("email", initialValues.email);
                setValue("phone", initialValues.phone);
                setValue("message", initialValues.message);
            }
        } catch(error){
            setSent(false);
            setCaptchaValidated(true);
            handleOpenModal();
            onError("Erro ao enviar e-mail: " + error);
        } finally{
            setSendingEmail(false);
        }
    }

    return(
        <>
            <Head>
                <title>Contato | Guilherme Rocha Leite</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex">
                <NavbarDesktop />
                <Container maxWidth="xl">
                    <h3 className={styles.contactTitle}>Envie uma mensagem</h3>

                    <section className={styles.sectionContact}>
                        <form method="POST" className={styles.contactForm} onSubmit={handleSubmit(onSubmit, onError)}>
                            <Box className={styles.contactFormBody}>
                                <Box className={`${styles.formLine}`}>
                                    <fieldset>
                                        <label htmlFor="nome_autor">Nome
                                            <span className="required">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex.: Givanildo Sousa" 
                                            id="nome_autor"
                                            {...register('name')}
                                        />
                                        {errors?.name?.type && <Typography className={styles.errorField}>Preencha corretamente este campo</Typography>}
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="email_autor">E-mail
                                            <span className="required">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex.: teste@teste.com" 
                                            id="email_autor" 
                                            {...register('email')}
                                        />
                                    {errors?.email?.type && <Typography className={styles.errorField}>Preencha corretamente este campo</Typography>}
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="telefone_autor">
                                            Telefone
                                            <span className="required">*</span>    
                                        </label>
                                        <InputMask 
                                            type="tel" 
                                            id="telefone_autor" 
                                            placeholder="Ex.: (99) 99999-9999" 
                                            {...register('phone')}
                                            mask="(99) 99999-9999"  
                                        />
                                        {errors?.phone?.type && <Typography className={styles.errorField}>Preencha corretamente este campo</Typography>}
                                    </fieldset>
                                </Box>

                                <Box className={styles.formBlock}>
                                    <Box>
                                        <span ref={charactersSpan} className={styles.charactersLeft}>{charactersLeft}</span>
                                        <span>Restantes</span>  
                                        <span className="required">*</span>
                                    </Box>
                                    <fieldset>
                                        <textarea 
                                            maxLength={maxCharacters} 
                                            rows={3} 
                                            cols={6} 
                                            placeholder="Deixe aqui sua mensagem" 
                                            id="texto" 
                                            onKeyUp={limitTextarea}
                                            {...register('message')}
                                        ></textarea>
                                        {errors?.message?.type && <Typography className={styles.errorField}>Preencha corretamente este campo</Typography>}
                                    </fieldset>

                                    {!file?.name ? 
                                            <fieldset
                                                style={{
                                                    display: "none"
                                                }}
                                            >
                                                <input
                                                    value=""
                                                    ref={inputFile} 
                                                    onChange={handleChange} 
                                                    name="arquivo" 
                                                    type="file" 
                                                    id="arquivo" 
                                                />
                                            </fieldset>
                                        :
                                        <fieldset
                                            style={{
                                                display: "none"
                                            }}
                                        >
                                            <input
                                                style={{
                                                    display: "none"
                                                }}
                                                ref={inputFile} 
                                                onChange={handleChange} 
                                                name="arquivo" 
                                                type="file" 
                                                id="arquivo" 
                                            />
                                        </fieldset>
                                        }
                                </Box>
                            </Box>

                            <Box className={styles.formBottom}>
                                <Box className={styles.captchaArea}>
                                    <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} />
                                </Box>

                                <Box className={styles.submitArea}>
                                    <Button ref={btnSubmit} type="submit" id="send-message">
                                        {sendingEmail ? <CircularProgress className={styles.circularProgress} /> : "Enviar Mensagem"}
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </section>

                    <section className={styles.sectionContact}>
                        <Typography className={styles.visitarPerfis}>
                            Visite meu perfil nas redes sociais:
                        </Typography>

                        {socialItems.length && 
                            <ul className={styles.socialItems}>
                                {socialItems.map((item, key) => (
                                    <li key={key}>
                                        <Button title={item.name} onClick={() => handleSocialClick(item)}>
                                            {item.icon}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        }
                    </section>

                    <Modal
                        open={modalOpen}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        
                        sx={
                            isMobile ? 
                            {
                                display: "flex",
                                justifyContent: "center"
                            }
                            :
                            {
                                display: "flex",
                                justifyContent: "center",
                                left: "17rem"
                            }
                        } 
                    >
                        <Box className={`${sent ? styles.success : styles.fail} ${styles.modalContainer}`}>
                            <Typography className={styles.modalText}>
                                {sent ? 
                                    "Mensagem enviada com sucesso!" 
                                :
                                    captchaValidated ? <>
                                        <Typography className={styles.modalText} style={{
                                            marginBottom: "10px"
                                        }}>Ocorreu um erro ao enviar a mensagem... 😕️</Typography>
                                        <Typography className={styles.modalText}>Favor entrar em contato por alguma rede social</Typography>
                                    </> 
                                : 
                                    <>
                                        <Typography className={styles.modalText} style={{
                                            marginBottom: "10px"
                                        }}>Ocorreu um problema ao validar o reCAPTCHA</Typography>
                                        <Typography className={styles.modalText}>Favor marcar a caixa novamente</Typography>
                                    </>
                                
                                }
                            </Typography>
                        </Box>
                    </Modal>
                </Container>
            </main>
        </>
    )
}

export default Contato;