import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/providers/ItemsList";

const Projects = () => {

    return(
        <section id="projetos">
            <h2 className="title">Projetos</h2>

            <Box className="content">
                {projects.map((item: any, index: number) => (
                    <Link key={index} href={item.link}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span>{item.name}</span>
                    </Link>
                ))}

                <Typography>
                    Para mais projetos, não oficiais e de caráter estudantil, <Link href="https://github.com/guilhermeDTNA" target="_blank">visite o meu Github</Link>.
                </Typography>
            </Box>
        </section>
    )
}

export default Projects;