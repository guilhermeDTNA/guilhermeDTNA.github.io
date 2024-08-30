import { useEffect, useRef } from "react";
import styles from './styles.module.scss';

const ScrollBar = () => {
    const inputElement = useRef<HTMLInputElement>(null);
    useEffect(progressBarScroll, []);

    function progressBarScroll(){        
        document.addEventListener("scroll", (event) => {
            const winScroll: number = Number(document.body.scrollTop || document.documentElement.scrollTop);
            const height: number = Number(document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const scrolled: string = parseFloat(((winScroll / height) * 100).toString()).toFixed(2);
            
            console.log(winScroll);
            
            inputElement.current?.setAttribute('style', `width: ${scrolled}%`);
        })	
    }
    
    return(
        <div ref={inputElement} className={styles.scrollBar}></div>
    )
}

export default ScrollBar;