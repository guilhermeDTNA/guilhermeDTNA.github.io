import NavbarDesktop from "@/components/NavbarDesktop";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const PortalUFVJM = () => {
    return(
        <>
            <Head>
                <title>Novo portal da UFVJM | Guilherme Rocha Leite</title>
                <meta name="description" content="Guilherme Rocha Leite é um desenvolvedor web front-end com muito conhecimento em HTML, CSS e JavaScript, além de ser referência nas plataformas de e-commerce: VTEX, Shopify e Loja Integrada. React JS, Next JS, SASS e Tailwind são exemplos de frameworks e bibliotecas com as quais ele trabalha." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Novo portal da UFVJM</h2>

                        <p>
                            Em consequência do lançamento da IDG (Identidade Digital do Governo) na versão 2.0 pela Secretaria de Comunicação Social da Presidência da República (Secom), houve a necessidade de criação de um novo portal institucional para a Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM) que se adequasse às novas normas estabelecidas de padrão digital.
                        </p>

                        <p>
                            Vários elementos das páginas, menus, estruturas de informação e outras características deveriam ser alterados para atender tais exigências, que segundo o governo trazem melhorias para aproximar cidadãos dos serviços públicos. A criação do novo portal da universidade foi de inteira responsabilidade da Dicom (Diretoria de Comunicação Social).
                        </p>

                        <p>
                            Assim, minha equipe formada por 5 pessoas, sendo 2 estagiários do curso de Sistemas de Informação, 1 técnico em TI, uma profissional terceirizada e uma revisora textual, decidiu utilizar algumas tecnologias de acordo com recomendações do governo federal e da Diretoria de Tecnologia da Informação (DTI) da própria universidade. Pode-se citar entre as ferramentas e linguagens manipuladas as seguintes:
                        </p>

                        <ul className="disc">
                            <li>CMS Plone</li>
                            <li>Docker</li>
                            <li>Rancher</li>
                            <li>LDAP</li>
                            <li>JavaScript</li>
                            <li>Varnish</li>
                        </ul>

                        <p>
                            Para concluir, o desenvolvimento do sistema de comunicação foi finalizado com sucesso e este disponível para avaliação para toda a comunidade acadêmica. Também é conveniente relatar que fomos a primeira universidade do Brasil a lançar o portal na versão 2.0 da IDG, o que nos deixou muito satisfeitos.
                        </p>

                        <p>
                            Após o início da criação dos outros sites institucionais pertencentes à UFVJM, tais como sites de pró-reitorias, diretorias e unidades acadêmicas, logicamente promovemos cursos e constantemente tiramos dúvidas dos servidores e estagiários sobre a manipulação do Plone, mas o passo mais importante já foi finalizado.
                        </p>
                    </section>

                    <section className="externalLink">
                        <Link href="http://portal.ufvjm.edu.br/" target="_blank">Visitar Portal</Link>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default PortalUFVJM;