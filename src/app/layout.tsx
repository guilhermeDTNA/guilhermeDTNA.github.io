import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}