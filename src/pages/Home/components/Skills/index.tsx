import { Box } from "@mui/material";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { skills } from "@/providers/ItemsList";
import styles from '../../Home.module.scss';
import stylesSkill from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

const Skills = () => {
    const { technologies, general, languages} = skills;

    return(
        <section id="habilidades">
            <h2 className="title">Habilidades</h2>

            <Box className="content">
                <Box className={stylesSkill.blockContent}>
                    <span className={stylesSkill.blockTitle}>Linguagens de Programação e Ferramentas</span>
                    { technologies && technologies.length &&
                        <Swiper
                            slidesPerView={4.5}
                            spaceBetween={10}
                            freeMode={true}
                            slideToClickedSlide={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                1025: {
                                    slidesPerView: 11
                                },
                                767: {
                                    slidesPerView: 7.5,
                                }
                            }}
                            className={stylesSkill.slider}
                        >
                            {technologies.map((item: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <Link href={item?.link} title={item.name} target="_blank" className={stylesSkill.techIcon}>
                                        {item.icon}
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    }
                </Box>

                { general &&
                    <Box className={stylesSkill.blockContent}>
                        {general.map((item: any, index: number) => (
                            <Box key={index}>
                                <span className={stylesSkill.blockTitle}>
                                    {item.title}
                                </span>

                                {item.items && 
                                    item.items.map((itemGeneral: string, indexGeneral: number) => 
                                        <Box key={indexGeneral} className={stylesSkill.block}>
                                            <figure>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </figure>
                                            <p key={indexGeneral}>
                                                {itemGeneral}
                                            </p>
                                        </Box>
                                    )
                                }
                            </Box>
                        ))}
                    </Box>
                }

                { languages &&
                    <Box className={stylesSkill.blockContent}>
                        <span className={stylesSkill.blockTitle}>Idiomas</span>
                        {languages.map((item: any, index: number) => (
                            <Box key={index} className={stylesSkill.block}>
                                <figure>
                                    <FontAwesomeIcon icon={faCheck} />
                                </figure>
                                
                                <span key={index}>{item.name} - {item.level}</span>
                            </Box>
                        ))}
                    </Box>
                }
            </Box>
        </section>
    )
}

export default Skills;