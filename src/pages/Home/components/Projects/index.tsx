import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/providers/ItemsList";

import stylesProjects from './styles.module.scss';

const Projects = () => {

    return(
        <section id="projetos">
            <h2 className="title">Projetos</h2>

            <Box className="content">
                <ul className={stylesProjects.list}>
                    {projects.map((item: any, index: number) => (
                        <li key={index}>
                            <Link href={item.link}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Typography>
                    Para mais projetos, não oficiais e de caráter estudantil, <Link href="https://github.com/guilhermeDTNA" target="_blank">visite o meu Github</Link>.
                </Typography>
            </Box>
        </section>
    )
}

export default Projects;