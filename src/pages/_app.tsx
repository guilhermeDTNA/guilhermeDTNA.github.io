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
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Clarity />

            <GoogleReCaptchaProvider reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}>
                <ContrastProvider>
                    <HeaderMobile />
                    <ContrastToggle />
                    <BtnFontSize />
                    <BtnScroll />
                    <ScrollBar />
                    <Component {...pageProps} />
                    <CookiesAdvise />
                </ContrastProvider>
            </GoogleReCaptchaProvider>

            <Analytics />
        </>
    );
}
