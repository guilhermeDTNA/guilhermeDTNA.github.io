import { useContext } from "react";
import { ContrastContext } from "../../providers/Context";

const Contato = () => {
    const {isDisabled} = useContext(ContrastContext );

    return(
        <h1>{isDisabled.toString()}</h1>
    )
}

export default Contato;