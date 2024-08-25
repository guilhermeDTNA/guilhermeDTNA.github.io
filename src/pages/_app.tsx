import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import {ContrastProvider} from '../providers/Context';
import ContrastToggle from "@/components/ContrastToggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContrastProvider>
      <ContrastToggle />
      <Component {...pageProps} />
    </ContrastProvider>
    
  );
}
