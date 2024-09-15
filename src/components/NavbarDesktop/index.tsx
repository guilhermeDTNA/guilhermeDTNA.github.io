import { Box } from "@mui/material";
import Image from "next/image";
import profile from '../../assets/img/profile.jpg';
import styles from './styles.module.scss';
import Link from "next/link";
import { menuItems } from "../../providers/ItemsList";
import { useRouter } from 'next/navigation'

const NavbarDesktop = () => {
    const router = useRouter();

    function scrollTo(element: string){
        if(document.querySelector(element)){
            document.querySelector(element)?.scrollIntoView({
                behavior: 'smooth'
            });
        } else{
            router.push("/"+element);
        }
    }

    return(
        <Box className={styles.navbarDesk}>
            <figure>
                <Link href="/">
                    <Image src={profile} alt="Foto" className={styles.profile} style={{
                        width: '100%',
                        height: 'auto'
                    }} />
                </Link>
            </figure>

            <nav className={styles.menuItems}>
                <ul>
                    {menuItems.map((item, key) => (
                        <li key={key}>
                            <Link href={item.link} onClick={(e) => {
                                e.preventDefault();
                                scrollTo(item.link);
                            }}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    )
}

export default NavbarDesktop;