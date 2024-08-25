"use client"
import Header from '@/app/components/Header';
import { ContrastContext } from '@/app/providers/Context';
import { useContext } from 'react';

const Contato = () => {
    const {isDisabled, toggle} = useContext(ContrastContext);
    return(
        <>
            <Header />

            <button onClick={toggle}>
                TESTE
            </button>
        </>
        
    )
}

export default Contato;