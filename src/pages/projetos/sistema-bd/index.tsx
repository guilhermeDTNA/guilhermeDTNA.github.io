import NavbarDesktop from "@/components/NavbarDesktop";
import { metaDescription } from "@/providers/SiteInfo";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const SistemaBD = () => {

    return(
        <>
            <Head>
                <title>Sistema de gerenciamento de cursos | Guilherme Rocha Leite</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex ecommerce">
                <NavbarDesktop />

                <Container maxWidth="xl">
                    <section>
                        <h2 className="pageTitle">Sistema de Gerenciamento de Cursos</h2>

                        <p>
                            Este projeto foi desenvolvido em janeiro de 2019 para um trabalho prático da disciplina Banco de Dados II, no curso de Sistemas de Informação da UFVJM. O sistema foi desenvolvido em rede local (localhost) por mim e pelos, na época, alunos da disciplina: Darlan Souza e Luiz Araújo.
                        </p>

                        <p>
                            Os recursos utilizados para o seu desenvolvimento foram as linguagens PHP, JavaScript, CSS, HTML, JQuery e SQL, sendo que mais tarde eu integrei ao sistema recursos do Bootstrap. E para o versionamento de código entre os integrantes, escolhemos utilizar os softwares Git, GitHub e GitKraken.
                        </p>

                        <p>
                            O sistema foi criado para gerenciar cursos dentro de uma instiuição. Ele permite manipular indivíduos dos tipos Aluno, Professor e Diretor, além de elementos importantes como Despesa, Curso e Matrícula.
                        </p>

                        <p>
                            Para realizar o login no sistema, o usuário deve ter o nome de usuário e senha de um diretor cadastrado. Portanto, para entrar, você pode utilizar o usuário: admin e a senha: admin. Nota: este usuário não possui permissão para alterar diretores.
                        </p>
                    </section>

                    <section className="externalLink">
                        <Link href="http://sistema-bd.000webhostapp.com/" target="_blank">Visitar Sistema</Link>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default SistemaBD;