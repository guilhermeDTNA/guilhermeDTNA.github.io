import Head from "next/head";
import styles from "./Home/Home.module.scss";
import { Box, Container, Divider, Typography } from "@mui/material";
import NavbarDesktop from "@/components/NavbarDesktop";
import Link from "next/link";
import Experience from "./Home/components/Experience";
import Education from "./Home/components/Education";
import Certification from "./Home/components/Certifications";
import Skills from "./Home/components/Skills";
import Projects from "./Home/components/Projects";
import { metaDescription } from "@/providers/SiteInfo";

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
                                Recentemente me tornei bacharel em Sistemas de Informação pela Universidade Federal dos Vales do Jequitinhonha e Mucuri - UFVJM - e hoje me sinto privilegiado por poder trabalhar com algo que aperfeiçoei durante todo esse período: o desenvolvimento web.
                            </p>

                            <p>
                                Atualmente sou desenvolvedor web front-end na <Link href="https://www.funcionalhealthtech.com.br/" target="_blank">Funcional Health Tech</Link> e tenho trabalhado com ReactJS, Tailwind, Jenkins e Vitest.
                            </p>

                            <p>
                                Para a minha vida, tenho como principal fonte de inspiração o ex-piloto Ayrton Senna e o meu avô Francisco, que, mesmo não estando mais aqui, ainda me mostram que o caminho para o sucesso deve se basear na honestidade e na dedicação.
                            </p>
                            <br />
                            <p>
                                Para maiores detalhes, <Link target="_blank" href="/Currículo-GuilhermeRochaLeite-Portfólio.pdf" locale={false}>faça o download do meu currículo</Link>.
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
