import React, { createContext, useEffect, useState } from "react";

export const ContrastContext = createContext({
    isDisabled: true,
    toggle: () => {}
})

export const ContrastProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const contrastInStorage: string | null = localStorage.getItem("enableContrast");
        if(contrastInStorage == null){
            localStorage.setItem("enableContrast", String(isDisabled));
        }
        menageClasslist();
    }, [])

    function menageClasslist(){
        const contrastInStorage: string | null = localStorage.getItem("enableContrast");
        if(contrastInStorage === "true"){
            setIsDisabled(true);
            document.body.classList.add("contrast");
        } else{
            setIsDisabled(false);
            document.body.classList.remove("contrast"); 
        }
    }

    const toggle = () => {
        setIsDisabled(!isDisabled);
        !isDisabled ? document.body.classList.add("contrast") : document.body.classList.remove("contrast");
        localStorage.setItem("enableContrast", String(!isDisabled));
    }

    return(
        <ContrastContext.Provider value={{
            isDisabled,
            toggle
        }}>
            {children}
        </ContrastContext.Provider>
    );
  }