import Head from "next/head";
import { Box, Button, Container, Modal, Typography, useMediaQuery } from "@mui/material";
import NavbarDesktop from "@/components/NavbarDesktop";
import styles from './styles.module.scss';
import { useRef, useState } from "react";
import { socialItems } from "@/providers/ItemsList";
import { metaDescription } from "@/providers/SiteInfo";
import ReCAPTCHA from 'react-google-recaptcha';
import * as yup from 'yup';
import { PhoneNumber } from './utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

export const config = {
    api: {
      bodyParser: false,
    },
};

const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(PhoneNumber),
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
            setCaptchaValidated(false);
            setSent(false);
            handleOpenModal();
        }
    }

    function onSubmit(){
        getRecaptchaValidation();  
    }

    function onError(error: any){
        console.error(error);
    }

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        resolver: yupResolver(validationSchema)
    })

    async function sendEmail(){
        const url = `${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/send`;
        console.log(JSON.stringify({
            name: getValues().name,
            email: getValues().email,
            phone: getValues().phone,
            message: getValues().message.replaceAll("\n", `<br />`)
        }))
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
            
            const isSent = await resp.status;
            setSent(isSent === 200);
            setCaptchaValidated(true);
            handleOpenModal();
        } catch(error){
            setSent(false);
            setCaptchaValidated(true);
            handleOpenModal();
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
                                            placeholder="Nome" 
                                            id="nome_autor"
                                            {...register('name')}
                                        />
                                        {errors?.name?.type && <Typography>Houve um erro aqui</Typography>}
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="email_autor">E-mail
                                            <span className="required">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="E-mail" 
                                            id="email_autor" 
                                            {...register('email')}
                                        />
                                    {errors?.email?.type && <Typography>Houve um erro aqui</Typography>}
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="telefone_autor">Telefone</label>
                                        <input 
                                            type="tel" 
                                            id="telefone_autor" 
                                            placeholder="Telefone" 
                                            {...register('phone')}  
                                        />
                                        {errors?.phone?.type && <Typography>Houve um erro aqui</Typography>}
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
                                            placeholder="Mensagem" 
                                            id="texto" 
                                            onKeyUp={limitTextarea}
                                            {...register('message')}
                                        ></textarea>
                                        {errors?.message?.type && <Typography>Houve um erro aqui</Typography>}
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

                            <Box className={styles.submitArea}>
                                <Button ref={btnSubmit} type="submit">
                                    Enviar Mensagem
                                </Button>
                            </Box>
                            
                            <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} />
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
                                        <a title={item.name} href={item.link} target="_blank">
                                            {item.icon}
                                        </a>
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