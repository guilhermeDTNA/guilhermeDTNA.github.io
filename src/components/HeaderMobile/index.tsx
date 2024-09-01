import { Box } from "@mui/material";
import DrawerMobile from "../DrawerMobile";
import styles from './styles.module.scss';
import { useEffect, useState } from "react";

const HeaderMobile = () => {
    let touchstartY: number = 0;
    let touchendY: number = 0;
    const [fixed, setFixed] = useState<boolean>(false);
    const [scrollEnable, setScrollEnable] = useState<boolean>(false);

    useEffect(
        () => {
            listenScroll();

            //checkDirection();
        }, []   
    );
 
    function checkDirection() {
        document.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenY
        })
            
        document.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenY
            checkDirection()
        })

        if (touchendY < touchstartY){
            console.log('swiped BOTTOM!');
            setFixed(false);
        }
        if (touchendY > touchstartY && scrollEnable){
            console.log('swiped TOP!')
            setFixed(true);
        }
    }

    function listenScroll(){
        document.addEventListener("scroll", (event) => {
            const lastKnownScrollPosition = window.scrollY;
            setFixed(lastKnownScrollPosition >= 220);
        })
    }
        
    return(
        <header className={styles.headerMobile}>
            <Box className={`${styles.headerMobileContainer} ${fixed ? styles.fixed : ''}`}>
                <h4 className={styles.myName}>Guilherme Rocha Leite</h4>

                <DrawerMobile />
            </Box>
        </header>
    )
}

export default HeaderMobile;