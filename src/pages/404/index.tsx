import NavbarDesktop from "@/components/NavbarDesktop"
import { metaDescription } from "@/providers/SiteInfo"
import { Box, Container } from "@mui/material"
import Head from "next/head";
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const page404 = () => {
    return(
        <>
            <Head>
                <title>Página não encontrada | Guilherme Rocha Leite</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="page flex">
                <NavbarDesktop />
                <Container maxWidth="xl" style={{position: "relative", height: "100%"}}>
                    <Box className={styles.pageContentMiddle}>
                        <Box className={styles.content}>
                            <figure>
                                <FontAwesomeIcon size="2x" icon={faTriangleExclamation} />
                            </figure>
                            <h3 className={styles.pageTitle}>Ops... página não encontrada</h3>
                        </Box>

                        <Box className={styles.iframeBox}>
                            <iframe 
                                src="https://giphy.com/embed/UoeaPqYrimha6rdTFV" 
                                width="100%" 
                                height="100%"
                            >
                            </iframe>
                        </Box>
                    </Box>
                </Container>
            </main>
        </>
    )
}

export default page404;