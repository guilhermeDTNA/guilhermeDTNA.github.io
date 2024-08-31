import { Box, Button, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { menuItems, socialItems } from "../ItemsList";

import styles from './styles.module.scss';

const DrawerMobile = () => {
    const [open, setOpen] = useState<boolean>(false);

    function toggleDrawer(param: boolean){
        setOpen(param);
    }

    return(
        <Box>
            <Button onClick={() => toggleDrawer(true)}>
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
                <nav className={styles.menuItems}>
                    <ul>
                        {menuItems.map((item, key) => (
                            <li key={key}>
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Box className={styles.socialItems}>
                    <ul>
                        {socialItems.map((item, key) => (
                            <li key={key}>
                                <a title={item.name} href={item.link}>
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