import NavbarDesktop from "@/components/NavbarDesktop";
import { metaDescription } from "@/providers/SiteInfo";
import { Box, Container, Divider, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import Certification from "./Home/components/Certifications";
import Education from "./Home/components/Education";
import Experience from "./Home/components/Experience";
import Projects from "./Home/components/Projects";
import Skills from "./Home/components/Skills";
import styles from "./Home/Home.module.scss";

export default function Home() {
    return (
        <>
            <Head>
                <title>Guilherme Rocha Leite - Portfólio</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.home} page flex`}>
                <NavbarDesktop />
                <Container className={styles.containerSections} maxWidth="xl">
                    <section id="sobre">
                        <h1 className={styles.myNameTitle}>Guilherme
                            <span className="primary-color"> Rocha Leite</span>
                        </h1>

                        <Box className={styles.details}>
                            <Typography className="location">Diamantina - MG - Brasil</Typography>
                            <Link href="mailto:gleite98@gmail.com" target="_blank" className="email">gleite98@gmail.com</Link>
                            <Typography className="job">Desenvolvedor web</Typography>
                        </Box>

                        <Box className={styles.aboutMe}>
                            <p>
                                Estou desde 2013 estudando tecnologias de desenvolvimento de software e a cada dia me sinto mais empolgado a permanecer me especializando nessa área.
                            </p>

                            <p>
                                Em 2022, me tornei bacharel em Sistemas de Informação pela <Link href="https://portal.ufvjm.edu.br/" target="_blank">Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)</Link> e hoje me sinto agraciado por ter a honra de ser servidor federal nela e poder trabalhar com TI, mais precisamente com desenvolvimento web.
                            </p>

                            <p>
                                Para a minha vida, tenho como principal fonte de inspiração o ex-piloto Ayrton Senna e o meu avô Francisco, que, mesmo não estando mais aqui, ainda me mostram que o caminho para o sucesso deve se basear na honestidade e na dedicação.
                            </p>
                            <br />
                            <p>
                                Para maiores detalhes, <Link target="_blank" href="/Currículo-GuilhermeRochaLeite-Portfólio.pdf" locale={false} id="curriculum-download">faça o download do meu currículo</Link>.
                            </p>
                        </Box>
                    </section>

                    <Divider />

                    <Experience />

                    <Divider />

                    <Education />

                    <Divider />

                    <Certification />

                    <Divider />

                    <Skills />

                    <Divider />

                    <Projects />
                </Container>
            </main>
        </>
    );
}
