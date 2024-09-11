import { certifications } from "@/providers/ItemsList";
import { Box } from "@mui/material";
import { WorkspacePremium } from "@mui/icons-material";
import styles from '../../Home.module.scss';
import Link from "next/link";

const Certification = () => {

    return(
        <section id="certificacoes">
            <h2 className="title">Certificações</h2>

            <Box className="content">
                {certifications.map((item, index) => (
                    <Box className={styles.certificationBlock} key={index}>
                        <figure>
                            <WorkspacePremium />
                        </figure>
                        <p>{item.name} - 
                            <Link target="_blank" href={item.link}>
                                {item.institution}
                            </Link>
                        </p>
                        
                    </Box>
                ))}
            </Box>
        </section>
    )
}

export default Certification;