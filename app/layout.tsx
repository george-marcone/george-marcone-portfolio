import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./portfolio-enhancements.css";
import "./gm-watermark.css";

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
