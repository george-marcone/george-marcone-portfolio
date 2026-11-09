import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./portfolio-enhancements.css";
import "./gm-watermark.css";

const siteUrl = "https://george-portifolio.gestao-saude.tec.br";
const siteTitle = "George Marcone | Senior Software Engineer, Tech Lead & Software Architect";
const siteDescription =
  "Portfólio de George Marcone: mais de 15 anos em engenharia de software, arquitetura, liderança técnica, .NET, React, Azure, DevOps e IA aplicada, incluindo o SaaS HemoDinks.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "George Marcone",
    "Senior Software Engineer",
    "Tech Lead",
    "Software Architect",
    ".NET",
    "C#",
    "React",
    "Azure",
    "DevOps",
    "Full Stack",
    "HemoDinks",
    "Claude Code",
    "Codex",
  ],
  authors: [{ name: "George Marcone", url: siteUrl }],
  creator: "George Marcone",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    siteName: "George Marcone",
    title: siteTitle,
    description: siteDescription,
    firstName: "George",
    lastName: "Marcone",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "George Marcone — Senior Software Engineer & Software Architect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
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
      <body>
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "4076dd20f9c94a0d895e1c14b2ddeea5"}'
        />
      </body>
    </html>
  );
}
