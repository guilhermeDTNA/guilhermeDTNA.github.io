import styles from './styles.module.scss';

const BtnScroll = () => {
    /*
    function setVisible(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 220) {
              $('#scrolltop').fadeIn();
            } else {
              $('#scrolltop').fadeOut();
            }
        });
    }
*/
    return(
        <button
            className={styles.scrollTopBtn}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}
        >
            Ir para o topo
        </button>
    )
}

export default BtnScroll;