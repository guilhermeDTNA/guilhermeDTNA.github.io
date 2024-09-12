import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

import NavbarDesktop from "@/components/NavbarDesktop";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import styles from './styles.module.scss';
import { useMemo, useState } from 'react';

import { ecommerceProjects } from '@/providers/ItemsList';

enum platforms{
    all,
    shopify = "shopify",
    vtex_cms = "vtex-cms",
    vtex_io = "vtex-io"
}

const SitesEcommerce = () => {
    const [articles, setArticles] = useState<any[]>([]);

    function handlePlatform(option: platforms){
        console.log(articles)
        console.log(option)
        const currentArticles:any[] = [];
        articlesElementsList.forEach((item) => {
            if(option === platforms.all || option === item.platform.toLowerCase().replaceAll(" ", "-")){
                currentArticles.push(item);
            }
        })

        setArticles(currentArticles);
    }

    const articlesElementsList = useMemo(() => {
        console.log("CHAMOUUUUU")
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

            <main className="page flex">
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
                        <Dropdown>
                            <MenuButton>Plataformas</MenuButton>

                            <Menu>
                                <MenuItem onClick={() => handlePlatform(platforms.all)}>Todas</MenuItem>
                                <MenuItem onClick={() => handlePlatform(platforms.shopify)}>Shopify</MenuItem>
                                <MenuItem onClick={() => handlePlatform(platforms.vtex_cms)}>VTEX CMS</MenuItem>
                                <MenuItem onClick={() => handlePlatform(platforms.vtex_io)}>VTEX IO</MenuItem>
                            </Menu>
                        </Dropdown>

                        <Box className={``}>
                            {articles && 
                                articles.map((item, index) => (
                                    <article key={index}>
                                        <strong>{item.name}</strong>
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