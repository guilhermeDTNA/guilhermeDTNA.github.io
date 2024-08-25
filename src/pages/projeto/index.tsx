"use client";

import Header from '@/app/components/Header';
import { useContext } from 'react';
import { ContrastContext } from '@/app/providers/Context';

const Projeto = () => {
    const {isDisabled} = useContext(ContrastContext);

    return(
        <>
            <Header />
            <main>
                Habilitado: <h1>{isDisabled.toString()}</h1>
            </main>
        </>
    )
}

export default Projeto;