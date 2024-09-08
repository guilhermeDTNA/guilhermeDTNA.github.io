import { courses } from "@/providers/ItemsList";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from '../../Home.module.scss';

const Education = () => {
    const educationElement = useRef<HTMLDivElement>(null);
    const [educationTop, setEducationTop] = useState<number>(0);
    let isArriveElement = false;  
    let alreadyArrive = false;

    useEffect(() => {
        if(educationElement.current){
            setEducationTop(educationElement.current?.offsetTop);

            window.addEventListener("scroll", () => {
                checkEducation();
            })
        } 
    }, []);

    function typeWriter(element: Element, txt: string, i: number) {
        if (i < txt.length && txt.length > 1) {
            element.textContent += txt.charAt(i);
            i++;
            setTimeout(() => typeWriter(element, txt, i), 200);
        }
    }

    function setTypeWriter(element: Element){
        let i = 0;
        let txt = element.getAttribute("data-text");
        let currentText = element.getAttribute("textContent");
        if(txt === null)
            txt = "";

        if(currentText?.indexOf(txt) === -1 || currentText === null)
            typeWriter(element, txt, i);
    }

    function checkEducation(){
        const nextElement = educationElement.current?.nextElementSibling?.getBoundingClientRect().top;

        if(nextElement && window.scrollY >= educationTop && window.scrollY < nextElement){
            if(!alreadyArrive)
                isArriveElement = true;
            
            if(isArriveElement){
                educationElement.current?.querySelectorAll(`.${styles.blockRight} span`).forEach((item, index) => {
                    setTypeWriter(item);
                    isArriveElement = false;
                    alreadyArrive = true;
                })
            }
        }
    }

    return(
        <section id="escolaridade" ref={educationElement} style={{
        marginBottom: "600px"
        }}>
            <h2 className="title">Escolaridade</h2>

            <Box className="content">
                {courses.map((item, index) => (
                    <Box className={styles.educationBlock} key={index}>
                        <div className={styles.blockLeft}>
                            <h3>{item.name}</h3>
                            <span>{item.institution}</span>
                            {item.description.split("\n").map((p, indexP) => 
                                <p key={indexP}>{p}</p>
                            )}
                        </div>

                        <div className={styles.blockRight}>
                            <span data-text={item.period}></span>
                        </div>
                    </Box>
                ))}
            </Box>
        </section>
    )
}

export default Education;