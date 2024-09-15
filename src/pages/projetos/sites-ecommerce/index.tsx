import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import NavbarDesktop from "@/components/NavbarDesktop";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import styles from './styles.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ecommerceProjects } from '@/providers/ItemsList';
import Link from 'next/link';
import Image from 'next/image';
import { MuiTheme } from '@/providers/MuiColors';
import { CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faChevronDown, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

enum platforms{
    all,
    shopify = "shopify",
    vtex_cms = "vtex-cms",
    vtex_io = "vtex-io"
}

const SitesEcommerce = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<platforms>(platforms.all);
    const galleryElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(galleryElement.current){
            galleryElement.current.querySelectorAll(`.${styles.siteImage}`).forEach(img => {
                img.addEventListener("load", () => {
                    img.classList.add("loaded");
                    img.closest(`.${styles.platform}`)?.querySelector('span[role="progressbar"]')?.remove();
                    console.log("Imagem carregada com sucesso:");
                    console.log(img);
                });
                img.addEventListener("error", () => {
                    console.log("Erro ao carregar a imagem:");
                    console.log(img);
                });
            })
        }
    }, [articles])

    function handlePlatform(option: platforms){
        const currentArticles:any[] = [];
        articlesElementsList.forEach((item) => {
            if(option === platforms.all || option === item.platform.toLowerCase().replaceAll(" ", "-")){
                currentArticles.push(item);
            }
        })

        setArticles(currentArticles);
    }

    const articlesElementsList = useMemo(() => {
        const articles = ecommerceProjects;

        setArticles(articles);

        return articles;
    }, [])

    return(
        <>
            <Head>
                <title>Guilherme Rocha Leite - Portfólio</title>
                <meta name="description" content="Guilherme Rocha Leite é um desenvolvedor web front-end com muito conhecimento em HTML, CSS e JavaScript, além de ser referência nas plataformas de e-commerce: VTEX, Shopify e Loja Integrada. React JS, Next JS, SASS e Tailwind são exemplos de frameworks e bibliotecas com as quais ele trabalha." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Criação e Manutenção de Sites de E-commerce</h2>

                        <p>
                            Trabalhando na Simples, participei diretamente da criação de alguns sites de e-commerce e da manutenção de vários outros, todos pertencentes a clientes da empresa.
                        </p>

                        <p>
                            Abaixo estão listados vários projetos, desenvolvidos em ambientes VTEX e Shopify. Em cada um há uma breve descrição e o respectivo link para a loja. Os projetos de implantação correspondem às lojas que foram criadas do zero e os de evolução correspondem à lojas que já existiam, mas que foram amplamente alteradas por mim.
                        </p>

                        <p>
                            É possível navegar entre as lojas utilizando os filtros de acordo com a plataforma pretendida.
                        </p>
                    </section>

                    <section>
                        <Dropdown onOpenChange={() => setDropdownOpen(!dropdownOpen)}>
                            <MenuButton className={styles.dropdownAction}>
                                {
                                    selected === "shopify" ? 'Shopify' :
                                    selected === "vtex-cms" ? 'VTEX CMS' : 
                                    selected === "vtex-io" ? 'VTEX IO' : 
                                    'Todas'
                                }
                                {dropdownOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </MenuButton>

                            <Menu style={{
                                backgroundColor: "#FFF",
                                borderRadius: "5px",
                                boxShadow: "0 0 0 1px rgba(68, 68, 68, .11)",
                                lineHeight: "40px",
                                cursor: "pointer",
                                outline: 0,
                                transition: "all .2s",
                                left: "160px",
                                top: "-43px"
                            }}>
                                <MenuItem 
                                    onClick={() => {
                                        setSelected(platforms.all);
                                        handlePlatform(platforms.all);
                                    }}
                                    style={selected === platforms.all ? {
                                        fontWeight: 700,
                                        backgroundColor: "#f6f6f6",

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    } : {
                                        fontWeight: 400,

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    }}
                                >Todas</MenuItem>

                                <MenuItem 
                                    onClick={() => {
                                        setSelected(platforms.shopify);
                                        handlePlatform(platforms.shopify);
                                    }}
                                    style={selected === platforms.shopify ? {
                                        fontWeight: 700,
                                        backgroundColor: "#f6f6f6",

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    } : {
                                        fontWeight: 400,

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    }}
                                >Shopify</MenuItem>

                                <MenuItem 
                                    onClick={() => {
                                        setSelected(platforms.vtex_cms);
                                        handlePlatform(platforms.vtex_cms);
                                    }}
                                    style={ 
                                        selected === platforms.vtex_cms ? {
                                            fontWeight: 700,
                                            backgroundColor: "#f6f6f6",
    
                                            padding: "0px 29px",
                                            lineHeight: "40px",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            fontSize: "16px"
                                        } : {
                                        fontWeight: 400,

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    }}
                                >VTEX CMS</MenuItem>

                                <MenuItem 
                                    onClick={() => {
                                        setSelected(platforms.vtex_io);
                                        handlePlatform(platforms.vtex_io);
                                    }}
                                    style={selected === platforms.vtex_io ? {
                                        fontWeight: 700,
                                        backgroundColor: "#f6f6f6",

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    } : {
                                        fontWeight: 400,

                                        padding: "0px 29px",
                                        lineHeight: "40px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontSize: "16px"
                                    }}
                                >VTEX IO</MenuItem>
                            </Menu>
                        </Dropdown>

                        <Box ref={galleryElement} className={styles.storesList}>
                            {articles && 
                                articles.map((item, index) => (
                                    <article className={styles.platform} key={index} data-platform={item.platform}>
                                        <Link href={item.link} target="_blank">
                                            <CircularProgress style={{
                                                color: MuiTheme.palette.primary.main,
                                                width: "45px",
                                                height: "auto",
                                                position: "absolute",
                                                zIndex: 1
                                            }} />
                                            <figure>
                                                <Image unoptimized className={styles.siteImage} src={item.imageUrl} alt={`Representação da página inicial do(a) ${item.name}`} width={100} height={100} />

                                                <figcaption>
                                                    <strong>{item.name}</strong>

                                                    <span>Plataforma: <b>{item.platform}</b></span>

                                                    <p>{item.description}</p>
                                                </figcaption>
                                            </figure>
                                        </Link>
                                    </article>
                                ))
                            }
                        </Box>
                    </section>
                </Container>
            </main>
        </>
        
    );
};

export default SitesEcommerce;