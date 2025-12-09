import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV - Portfolio",
  description: "Portfolio et CV en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
