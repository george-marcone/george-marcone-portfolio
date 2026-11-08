import type { Metadata } from "next";
import Link from "next/link";
import "./artigo.css";

export const metadata: Metadata = {
  title: "Orquestração inteligente de agentes Codex | George Marcone",
  description: "Um estudo de caso de engenharia de software com AGENTS.md, agentes especializados, delegação por risco, segurança e testes no HemoDinks.",
};

const pillars = [
  { title: "Políticas persistentes", detail: "AGENTS.md mantém arquitetura, segurança, isolamento multiclínica e testes como regras de trabalho." },
  { title: "Especialização", detail: "Agentes por domínio reduzem a dispersão de contexto e tornam as responsabilidades explícitas." },
  { title: "Delegação proporcional", detail: "Complexidade, risco, impacto arquitetural e dependências orientam a profundidade da análise." },
  { title: "Validação e rastreabilidade", detail: "Testes, revisão humana, issues e pull requests conectam trabalho assistido por IA às entregas." },
];

export default function ArtigoCodex() {
  return (
    <main className="codex-article">
      <header className="codex-topbar">
        <Link href="/" aria-label="Voltar ao portfólio">← George Marcone</Link>
        <a href="#conclusao">Conclusão ↓</a>
      </header>
      <article>
        <header className="codex-cover">
          <p className="codex-kicker">ARTIGO TÉCNICO · ENGENHARIA DE SOFTWARE · 11 OUT 2026</p>
          <h1>Orquestração inteligente de <span>agentes Codex</span></h1>
          <p className="codex-subtitle">Da geração de código à engenharia assistida por IA, com regras persistentes, agentes especializados e responsabilidade técnica.</p>
          <p className="codex-byline">George Marcone · Senior Software Engineer & Software Architect</p>
          <div className="codex-tags"><span>AGENTS.md</span><span>Codex</span><span>Clean Architecture</span><span>DevOps</span><span>HemoDinks</span></div>
        </header>
        <section className="codex-intro">
          <p>Existe uma diferença decisiva entre pedir código a uma IA e estruturar um sistema de trabalho em que agentes atuam de modo coordenado. No HemoDinks, produto SaaS multiclínica desenvolvido com .NET, React e Azure, venho aplicando uma abordagem baseada em especialização, limites de atuação, políticas de segurança e validação automatizada.</p>
          <p>O objetivo não é maximizar a quantidade de agentes. É <strong>alocar capacidade de análise onde ela oferece maior benefício</strong>, sem abrir mão da arquitetura e da responsabilidade pelas entregas.</p>
        </section>
        <section className="codex-panel"><h2>Os quatro pilares da abordagem</h2><div className="codex-pillars">{pillars.map((p, i) => <div key={p.title}><span>0{i+1}</span><h3>{p.title}</h3><p>{p.detail}</p></div>)}</div></section>
        <section><h2>1. O AGENTS.md como contrato de engenharia</h2><p>O arquivo <code>AGENTS.md</code> consolida instruções operacionais que não deveriam depender de cada novo prompt: preservação da Clean Architecture, separação de responsabilidades, componentização, reutilização, proteção de credenciais, princípios de LGPD e isolamento rigoroso entre clínicas.</p><p>Isso é especialmente relevante em um SaaS multitenant. Uma alteração aparentemente localizada pode atravessar autenticação, autorização e acesso a dados. O agente precisa investigar o fluxo afetado, identificar dependências e evitar atalhos que eliminem filtros ou regras existentes.</p><blockquote>O agente deve trabalhar dentro da arquitetura do produto, não remodelar o produto indiscriminadamente ao gerar uma solução.</blockquote></section>
        <section><h2>2. Agentes especializados e responsabilidades claras</h2><p>As configurações foram distribuídas entre <code>.codex/config.toml</code> e definições em <code>.codex/agents/</code>, respeitando as capacidades verificadas na versão utilizada. No backend, a estrutura incluiu seis especialistas; no frontend, quatro. As responsabilidades abrangem áreas como engenharia de API, frontend, segurança, dados, DevOps, arquitetura e qualidade, conforme o escopo de cada repositório.</p><p>Uma tarefa de autenticação exige atenção a sessões e permissões; uma migração exige análise de dados, rollback e compatibilidade; uma alteração visual exige revisão de responsividade, acessibilidade e testes E2E. A especialização ajuda a manter essas disciplinas explícitas.</p></section>
        <section><h2>3. Esforço proporcional ao risco</h2><p>A delegação passa por uma avaliação de complexidade técnica, risco de regressão e segurança, impacto arquitetural e dependências entre módulos. Mudanças triviais podem ser executadas diretamente. Fluxos críticos justificam investigação aprofundada e revisão especializada.</p><p>Níveis como Low, Medium, High e Extra High servem como referência de planejamento quando efetivamente suportados pelo ambiente. Não é adequado presumir que todo parâmetro ou capacidade de subagente esteja disponível em qualquer versão.</p></section>
        <section><h2>4. Concorrência com limites</h2><p>As configurações iniciais estabeleceram concorrência máxima de dois agentes, acompanhada de uma regra essencial: não editar o mesmo arquivo simultaneamente. Mais paralelismo sem coordenação pode significar conflitos, retrabalho e desperdício de contexto.</p><p>A estratégia é dividir tarefas somente quando há independência real entre elas, consolidando depois alterações, testes e revisão.</p></section>
        <section><h2>5. Segurança desde o planejamento</h2><p>O HemoDinks processa dados em um contexto de saúde. Por isso, proteção de informações sensíveis, autorização no backend e isolamento multiclínica são prioridades. Instruções explícitas vedam remover controles para simplificar implementações, registrar segredos, alterar regras fora do escopo ou criar migrations destrutivas sem análise.</p><p>O mesmo princípio orienta infraestrutura: auditorias de imagens no GHCR, automações Azure e deploy Blue/Green precisam manter garantias de rollback e mecanismos fail-closed. A IA apoia a engenharia, mas não substitui a verificação operacional.</p></section>
        <section><h2>6. Testes, GitHub Projects e revisão humana</h2><p>Uma mudança produzida por agentes não é automaticamente uma entrega concluída. O processo exige critérios de aceite, testes unitários, integração e E2E na medida do impacto, além de rastreabilidade em GitHub Issues, Pull Requests e Projects.</p><p>Commits e PRs demonstram implementação; execução de testes, revisão e verificação em ambiente apropriado demonstram qualidade de entrega. Essa distinção evita confundir produtividade aparente com software confiável.</p></section>
        <section id="conclusao" className="codex-conclusion"><p className="codex-kicker">CONCLUSÃO</p><h2>Orquestrar melhor é mais importante do que multiplicar agentes.</h2><p>A experiência reforça que a eficiência da IA aplicada à engenharia não se resume à velocidade de escrita. Depende de contexto disciplinado, delegação criteriosa, regras de segurança, testes e responsabilidade humana. É nesse encontro entre automação e engenharia que vejo os ganhos mais sustentáveis.</p><p><strong>IA acelera a execução. Engenharia define o que pode ser feito, como deve ser validado e quando está pronto.</strong></p></section>
        <footer className="codex-footer"><p>George Marcone · GM Tech Solutions</p><Link href="/">← Voltar ao portfólio</Link></footer>
      </article>
    </main>
  );
}
