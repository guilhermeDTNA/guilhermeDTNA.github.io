import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from './styles.module.scss';

const CookiesAdvise = () => {
    console.log("TESTANDO BRANCH MAIN")
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if(document.readyState === "complete"){    
            const hasAccept = localStorage.getItem("acceptCookies");
            setTimeout(function() {
                setOpen(hasAccept !== "true");
            }, 1000);
        }
    }, [])

    function handleAccept(){
        localStorage.setItem("acceptCookies", "true");
        setTimeout(function() {
			setOpen(false);
		}, 300);
    }

    return(
        <Box className={`acceptCookies ${styles.acceptCookies} ${!open ? styles.close : ''}`}>
			<div>
                <p>Ao acessar este site você concorda com os cookies utilizados por ele. Eles são armazenados para melhorar sua experiência de navegação.</p>
                
                <button onClick={handleAccept}>Aceitar</button>
            </div>
		</Box>
    )
}

export default CookiesAdvise;