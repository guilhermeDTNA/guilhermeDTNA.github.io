import { experiences } from "@/providers/ItemsList";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from '../../../Home.module.scss';
import Link from "next/link";

const Experience = () => {
    const experienceElement = useRef<HTMLDivElement>(null);
    const [experienceTop, setExperienceTop] = useState<number>(0);
    let isArriveElement = false;
	let alreadyArrive = false;

    useEffect(() => {
        if(experienceElement.current){
            setExperienceTop(experienceElement.current?.offsetTop);

            window.addEventListener("scroll", () => {
                checkExperience();
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

  function checkExperience(){
    const nextElement = experienceElement.current?.nextElementSibling?.getBoundingClientRect().top;

    if(nextElement && window.scrollY >= experienceTop && window.scrollY <= nextElement){
      if(!alreadyArrive)
        isArriveElement = true;
      
      if(isArriveElement){
        experienceElement.current?.querySelectorAll(`.${styles.blockRight} span`).forEach((item, index) => {
          setTypeWriter(item);
          isArriveElement = false;
          alreadyArrive = true;
        })
      }
    }
  }

  return(
    <section id="experiencia" ref={experienceElement} style={{
        marginBottom: "600px"
      }}>
        {experiences.map((item, index) => (
          <Box className={styles.experienceBlock} key={index}>
            <div className={styles.blockLeft}>
              <h3>{item.name}</h3>
              <Link href={item.companyLink}>{item.company}</Link>
              <p>
                {item.description}
              </p>
            </div>

            <div className={styles.blockRight}>
              <span data-text={item.period}></span>
            </div>
          </Box>
        ))}
    </section>
  )
}

export default Experience;