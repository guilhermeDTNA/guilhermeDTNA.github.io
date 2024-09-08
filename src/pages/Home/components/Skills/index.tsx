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
                { technologies && technologies.length &&
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        freeMode={true}
                        slideToClickedSlide={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1025: {
                                slidesPerView: 9
                            },
                            767: {
                                slidesPerView: 7.5,
                            },
                            423: {
                                slidesPerView: 5,
                            },
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

                { general &&
                    <>
                        {general.map((item: any, index: number) => (
                            <Box key={index}>
                                <span>
                                    {item.title}
                                </span>

                                {item.items && 
                                    item.items.map((itemGeneral: string, indexGeneral: number) => 
                                        <Box key={indexGeneral}>
                                            <FontAwesomeIcon icon={faCheck} />
                                            <p key={indexGeneral}>
                                                {itemGeneral}
                                            </p>
                                        </Box>
                                    )
                                }
                            </Box>
                        ))}
                    </>
                }

                { languages &&
                    <>
                        {languages.map((item: any, index: number) => (
                            <Box key={index}>
                                <FontAwesomeIcon icon={faCheck} />
                                
                                <span key={index}>{item.name} - {item.level}</span>
                            </Box>
                        ))}
                    </>
                }
            </Box>
        </section>
    )
}

export default Skills;