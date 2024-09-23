import NavbarDesktop from "@/components/NavbarDesktop";
import { metaDescription } from "@/providers/SiteInfo";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";

const WebserviceJavaReact = () => {
    const videosrc = "/videos/quiz.mp4";

    return(
        <>
            <Head>
                <title>Webservice quiz | Guilherme Rocha Leite</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Criação de um Webservice RESTful e seu Cliente</h2>

                        <p>
                            Este projeto foi desenvolvido entre os dias 27 de fereveiro e 6 de março de 2021 como teste prático para um processo seletivo de uma empresa de desenvolvimento de software. Tal projeto consistia em criar um quiz, com um webservice feito em Java e um cliente produzido em JavaScript. As regras do projeto eram as seguintes:
                        </p>

                        <ul className="disc">
                            <li>
                                O código deveria estar completamente em inglês, opcionalmente para os comentários;
                            </li>

                            <li>
                                A utilização de 'alert()' seria proibida;
                            </li>

                            <li>
                                O cliente deveria enviar uma requisição AJAX para o webservice;
                            </li>

                            <li>
                                O código do webservice REST deveria estar em Java e para o frontend seriam utilizadas as linguagens: HTML, CSS e JavaScript;
                            </li>

                            <li>
                                As mensagens de vitória ou derrota no quiz seriam exibidas através de overlays;
                            </li>

                            <li>
                                As perguntas e respostas deveriam ser embaralhadas pelo backend de forma a não haver repetição de perguntas por tentativa; e
                            </li>

                            <li>
                                Seria permitida a utilização de quaisquer frameworks para desenvolvimento, assim como qualquer método de armazenamento das perguntas e respostas.
                            </li>
                        </ul>

                        <p>
                            Para o desenvolvimento do webservice foi adotado o framework Jersey, do Java, e para o cliente foi utilizado o React JS, do JavaScript. O sistema também possui responsividade graças a técnicas do CSS e o código HTML foi gerado através da indexação do React. Para o armazenamento das questões foi utilizado um banco de dados gratuito na nuvem, obtido através do site <Link href="freesqldatabase.com" target="_blank">http://freesqldatabase.com</Link>.
                        </p>

                        <p>
                            O quiz armazena 5 perguntas e suas respectivias respostas, estas elaboradas pelo desenvolvedor, e conta com a seguinte regra: o usuário só possui uma tentativa. Ao errar, o sistema só retorna uma mensagem de derrota e a opção de reiniciar o quiz, e, ao acertar, é retornada uma mensagem de sucesso e também um botão para recomeço do jogo.
                        </p>

                        <p>
                            Por ser REST, é possível consultar as questões via URL ou pela interface do próprio quiz. Após a consulta, o webservice retorna as questões encontradas em formato JSON. O projeto está disponível no meu perfil do GitHub. Para executar, todas as instruções estão no Readme do repositório.
                        </p>

                        <p>
                            O vídeo a seguir é uma exibição do projeto em funcionamento. As portas usadas pelo servidor do Java e pela interface são, respectivamente, 8080 e 3000.
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

export default WebserviceJavaReact;