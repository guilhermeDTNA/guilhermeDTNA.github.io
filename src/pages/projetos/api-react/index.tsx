import NavbarDesktop from "@/components/NavbarDesktop";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";

const ApiReact = () => {
    const videosrc = "/videos/api-react.mp4";

    return(
        <>
            <Head>
                <title>Criação e consumo de API com ReactJS e Django | Guilherme Rocha Leite</title>
                <meta name="description" content="Guilherme Rocha Leite é um desenvolvedor web front-end com muito conhecimento em HTML, CSS e JavaScript, além de ser referência nas plataformas de e-commerce: VTEX, Shopify e Loja Integrada. React JS, Next JS, SASS e Tailwind são exemplos de frameworks e bibliotecas com as quais ele trabalha." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Criação e consumo de API com ReactJS e Django</h2>

                        <p>
                            Este projeto foi desenvolvido em 2020 para um trabalho prático da disciplina de Sistemas Distribuídos, no curso de Sistemas de Informação da UFVJM. A API e uma interface para seu consumo foram construídos em ambiente local, tendo apoio dos alunos Alex Lopes, Luíz Araújo e Gabriel Duarte.
                        </p>

                        <p>
                            Para o desenvolvimento da API, foi utilizado o framework Django, que utiliza linguagem Python, e para a construção da interface, o framework ReactJS, que utiliza, por sua vez, JavaScript.
                        </p>

                        <p>
                            A API usa o modelo IEEE Lom para organizar os Objetos de Aprendizagem (OAs). Os metadados considerados foram: Catálogo, Entrada, Título, Idioma, Descrição, Palavras-chave, Cobertura, Estrutura, Nível de agregação, Formato, Data e Tamanho.
                        </p>

                        <p>
                            É possível consultar os objetos via URL ou pela interface. Após a consulta, a API retorna os objetos encontrados em formato JSON em nova aba do navegador. O projeto está disponível no <Link href="https://github.com/GuilhermeDTNA/TPSD" target="_blank">meu perfil do GitHub</Link>. Para executar, todas as instruções estão no Readme do repositório.
                        </p>

                        <p>
                            O vídeo a seguir é uma exibição do projeto em funcionamento. É possível perceber que as portas usadas pela API e interface são, respectivamente, 8000 e 8001.
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

export default ApiReact;