import { ContrastProvider } from "@/app/providers/Context";
import type { Metadata } from "next";
import ContrastToggle from "./components/ContrastToggle";

export const metadata: Metadata = {
  title: "Guilherme Rocha Leite",
  description: "Portfólio de Guilherme Rocha Leite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br">
      
      <body>
        <ContrastProvider>
          <ContrastToggle />
          {children}
        </ContrastProvider>
      </body>
      
    </html>
  );
}