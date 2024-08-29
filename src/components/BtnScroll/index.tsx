import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BtnScroll = () => {
    const inputElement = useRef();
    const [show, setShow] = useState<boolean>(false);
    useEffect(setVisible, []);
    
    function setVisible(){
        $(window).scroll(function () {
            setShow($(this).scrollTop() > 220);
        });
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
            Ir para o topo
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default BtnScroll;