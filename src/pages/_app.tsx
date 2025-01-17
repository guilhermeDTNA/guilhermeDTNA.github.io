import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ContrastProvider } from '../providers/Context';
import ContrastToggle from "@/components/ContrastToggle";
import BtnFontSize from "@/components/BtnFontSize";
import BtnScroll from "@/components/BtnScroll";
import ScrollBar from "@/components/ScrollBar";
import HeaderMobile from "@/components/HeaderMobile";
import CookiesAdvise from "@/components/CookiesAdvise";
import Analytics from "@/components/Analytics";
import Clarity from "@/components/Clarity";
import { TagManagerBody, TagManagerHeader } from "@/components/TagManager";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <TagManagerHeader />
            <Clarity />

            <ContrastProvider>
                <HeaderMobile />
                <ContrastToggle />
                <BtnFontSize />
                <BtnScroll />
                <ScrollBar />
                <Component {...pageProps} />
                <CookiesAdvise />
            </ContrastProvider>

            <Analytics />
            <TagManagerBody />
        </>
    );
}
