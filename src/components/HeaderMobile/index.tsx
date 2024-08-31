import DrawerMobile from "../DrawerMobile";
import styles from './styles.module.scss';

const HeaderMobile = () => {
    return(
        <header className={styles.headerMobile}>
            <h2>
                Guilherme Rocha Leite

                <DrawerMobile />
            </h2>
        </header>
    )
}

export default HeaderMobile;