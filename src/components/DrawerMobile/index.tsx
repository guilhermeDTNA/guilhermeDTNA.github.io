import { Box, Button, Container, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { menuItems, socialItems } from "../../providers/ItemsList";

import styles from './styles.module.scss';
import { useRouter } from "next/router";

const DrawerMobile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    function toggleDrawer(param: boolean){
        setOpen(param);
    }

    function scrollTo(element: string){
        if(document.querySelector(element)){
            document.querySelector(element)?.scrollIntoView({
                behavior: 'smooth'
            });
        } else{
            router.push("/"+element);
        }

        setOpen(false);
    }

    return(
        <Box>
            <Button className={styles.hamburger} onClick={() => toggleDrawer(true)}>
                <MenuIcon />
            </Button>
            <Drawer
                anchor="top"
                open={open}
                onClose={() => toggleDrawer(false)}
                classes={{ paper: "#000" }}
                ModalProps={{
                    slotProps: { backdrop: { className: "backdrop" } },
                }}
            >
                <Box className={`${styles.drawerMobile} page`}>
                    <Box className={styles.drawerMobileHeader}>
                        <span className={styles.myName}>Guilherme Rocha Leite</span>

                        <Button className={styles.hamburger} onClick={() => toggleDrawer(false)}>
                            <MenuIcon />
                        </Button>
                    </Box>

                    <nav className={styles.menuItems}>
                        <ul>
                            {menuItems.map((item, key) => (
                                <li key={key}>
                                    <a href={item.link} onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo(item.link);
                                    }}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ul className={styles.socialItems}>
                        {socialItems.map((item, key) => (
                            <li key={key}>
                                <a title={item.name} href={item.link} target="_blank" id={`link-${item.name}`}>
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Drawer>
        </Box>
    )
}

export default DrawerMobile;