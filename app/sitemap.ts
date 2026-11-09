import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://george-portifolio.gestao-saude.tec.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: "2026-11-09", changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/artigos/orquestracao-agentes-claude-code`, lastModified: "2026-11-09", changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/artigos/orquestracao-agentes-codex`, lastModified: "2026-10-11", changeFrequency: "yearly", priority: 0.8 },
  ];
}
