import NavbarDesktop from "@/components/NavbarDesktop";
import { metaDescription } from "@/providers/SiteInfo";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const CrudPhpReact = () => {

    return(
        <>
            <Head>
                <title>Webservice RESTful React + PHP | Guilherme Rocha Leite</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Criação de um Webservice RESTful de clientes</h2>

                        <p>
                            O projeto foi desenvolvido como teste prático para um processo seletivo em desenvolvimento de software. Seu objetivo principal é criar um sistema CRUD (cadastro, leitura, atualização e exclusão) de clientes utilizando JavaScript para manipular exclusivamente o frontend e PHP para manipular exclusivamente o backend da aplicação. Dentre as regras de desenvolvimento, pode-se se citar:
                        </p>

                        <ul className="disc">
                            <li>Todos os registros devem ser armazenados em um banco de dados SQL;</li>
                            <li>Todas as informações sobre os clientes são obrigatória, exceto o campo observação;</li>
                            <li>Na tela de cadastro só serão permitidas requisições AJAX para o backend;</li>
                            <li>O PHP deverá manipular o banco de dados via PDO;</li>
                            <li>O nome deverá conter somente letras, o CPF deverá ser validado e o campo de observação deverá restringir a 300 caracteres no máximo;</li>
                            <li>A função de pesquisa por cliente deverá ser efetuada por consulta por e-mail ou nome case insensitive; e</li>
                            <li>Em hipótese alguma o JavaScript poderá ser utilizado para renderizar o backend ou o PHP ser utilizado para renderizar o frontend.</li>
                        </ul>

                        <p>
                            Para o desenvolvimento do frontend foi utilizado o framework ReactJS enquanto para o backend não foi utilizado um framework dada sua simplicidade. Para o armazenamento dos dados dos cliente foi utilizado um banco de dados gratuito na nuvem, obtido através do site <Link href="freesqldatabase.com" target="_blank">freesqldatabase.com</Link>.
                        </p>

                        <p>
                            Para melhor compreensão do projeto, foi feito seu deploy na plataforma Heroku e pode ser consultado através <Link href="https://clientes-js-php.herokuapp.com/" target="_blank">deste link</Link>. Assim não é necessário fazer qualquer configuração em seu sistema operacional, além de ser possível desfrutar do software via aparelho mobile dada a responsividade da aplicação.
                        </p>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default CrudPhpReact;