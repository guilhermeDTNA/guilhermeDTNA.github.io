import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import {ContrastProvider} from '../providers/Context';
import ContrastToggle from "@/components/ContrastToggle";
import BtnFontSize from "@/components/BtnFontSize";
import BtnScroll from "@/components/BtnScroll";
import ScrollBar from "@/components/ScrollBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContrastProvider>
      <ContrastToggle />
      <BtnFontSize />
      <BtnScroll />
      <ScrollBar />
      <Component {...pageProps} />
    </ContrastProvider>
    
  );
}
