import { useContext, useEffect } from "react";
import ContrastToggle from "../ContrastToggle";
import { ContrastContext } from "@/app/providers/Context";

const Header = () => {
    const {isDisabled} = useContext(ContrastContext);
    
    return(
        <header>
            
        </header>
    )
}

export default Header;