import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-enhancements.css";

export const metadata: Metadata = {
  title: "George Marcone | Senior Software Engineer & Software Architect",
  description:
    "Portfólio de George Marcone: engenharia de software, arquitetura, liderança técnica, cloud, IA aplicada e produtos SaaS, incluindo o HemoDinks.",
  authors: [{ name: "George Marcone" }],
  creator: "George Marcone",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
