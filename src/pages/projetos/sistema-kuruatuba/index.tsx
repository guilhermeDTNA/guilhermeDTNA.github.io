import NavbarDesktop from "@/components/NavbarDesktop";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";

const SistemaKuruatuba = () => {
    const videosrc = "/videos/kuruatuba.mp4";

    return(
        <>
            <Head>
                <title>Sistema web para a Kuruatuba | Guilherme Rocha Leite</title>
                <meta name="description" content="Guilherme Rocha Leite é um desenvolvedor web front-end com muito conhecimento em HTML, CSS e JavaScript, além de ser referência nas plataformas de e-commerce: VTEX, Shopify e Loja Integrada. React JS, Next JS, SASS e Tailwind são exemplos de frameworks e bibliotecas com as quais ele trabalha." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Construção de um sistema web para a Associação Kuruatuba</h2>

                        <p>
                            Este projeto foi desenvolvido entre 2019 e 2021 para o Trabalho de Conclusão de Curso para obtenção do grau de Bacharelado em Sistemas de Informação, pela Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM).
                        </p>

                        <p>
                            O objetivo do software desenvolvido, além dos relacionados ao TCC, foi propiciar melhorias na gestão das informações geridas pela Associação dos Protetores da Bacia Hidrográfica do Rio Gorutuba (Kuruatuba) e auxiliar na apresentação da referida associação aos visitantes, de maneira formal, agradável e intuitiva.
                        </p>

                        <p>
                            Todo o sistema foi dividido em duas partes: um portal, acessível a qualquer pessoa e que tem o propósito de apresentar a intituição, informes e arquivos importantes; e um sistema gerencial de associados e colaboradores, proposto a gerenciar informações pessoais sobre essas pessoas e gerar documento comprobatório de vínculo à associação. Para o desenvolvimento de ambos foi adotado o framework de metodologia ágil Scrum, que possibilitou a participação do cliente durante o ciclo de vida do sistema.
                        </p>

                        <p>
                            Para a construção do portal foram utilizadas as seguintes ferramentas/linguagens: <strong>Plone</strong>, <strong>Zope</strong>, <strong>Google Analytics</strong>, <strong>CSS</strong>, <strong>HTML</strong> e <strong>JavaScript</strong>. O sistema gerencial, por sua vez, utiliza: <strong>PHP</strong>, <strong>MySQL</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>HTML</strong>. Ambos são executados sob arquitetura de contâiners, com <strong>Docker</strong>, e hospedados em um <strong>Servidor Privado Virtual (VPS)</strong>, sendo que o último foi produzido sem auxílio de qualquer gerenciador de conteúdos ou framework.
                        </p>

                        <p>
                            O projeto está disponível através do domínio: <Link target="_blank" href="http://kuruatuba.org">http://kuruatuba.org</Link> e a documentação do seu projeto está contida em meu TCC. Para acessá-lo, <Link href="https://github.com/guilhermeDTNA/tcc/blob/master/TCC-Guilherme-Final.pdf" target="_blank">clique aqui</Link>.
                        </p>

                        <p>
                            O vídeo a seguir é uma exibição do projeto em funcionamento. Essa pode ser considerada como uma apresentação prévia do produto final, embora meu TCC possua imagens que tenham o mesmo propósito.
                        </p>
                    </section>

                    <section className="videoDemonstration">
                        <ReactPlayer
                            width="450" 
                            height="320"
                            url={videosrc}
                            controls={true}
                            light={false}
                            pip={true}
                        />
                        <source src={videosrc} type="video/mp4" />
                    </section>
                </Container>
            </main>
        </>
    )
}

export default SistemaKuruatuba;