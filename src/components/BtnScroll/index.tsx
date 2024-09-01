import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BtnScroll = () => {
    const [show, setShow] = useState<boolean>(false);
    useEffect(setVisible, []);
    
    function setVisible(){
        document.addEventListener("scroll", (event) => {
            const lastKnownScrollPosition = window.scrollY;
            setShow(lastKnownScrollPosition >= 220);
        })
    }

    return(
        <button
            className={`${styles.scrollTopBtn} ${show && styles.show}`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default BtnScroll;