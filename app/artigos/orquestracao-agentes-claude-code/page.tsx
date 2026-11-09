import type { Metadata } from "next";
import Link from "next/link";
import "../orquestracao-agentes-codex/artigo.css";

export const metadata: Metadata = {
  title: "Orquestração de agentes com Claude Code | George Marcone",
  description: "Como estruturar CLAUDE.md, subagentes especializados, hooks, permissões e worktrees para usar o Claude Code com segurança e previsibilidade no HemoDinks.",
};

const pillars = [
  { title: "Memória de projeto", detail: "CLAUDE.md registra arquitetura, convenções, comandos e restrições que valem para toda sessão." },
  { title: "Subagentes com contexto próprio", detail: "Especialistas definidos em .claude/agents/ recebem ferramentas e modelo adequados ao escopo." },
  { title: "Controles determinísticos", detail: "Permissões e hooks garantem regras que não podem depender apenas da interpretação do modelo." },
  { title: "Paralelismo isolado", detail: "Worktrees separam tarefas independentes, evitando conflitos e mantendo cada entrega revisável." },
];

export default function ArtigoClaudeCode() {
  return (
    <main className="codex-article">
      <header className="codex-topbar">
        <Link href="/" aria-label="Voltar ao portfólio">← George Marcone</Link>
        <a href="#conclusao">Conclusão ↓</a>
      </header>
      <article>
        <header className="codex-cover">
          <p className="codex-kicker">ARTIGO TÉCNICO · ENGENHARIA DE SOFTWARE · 09 NOV 2026</p>
          <h1>Orquestração de agentes com <span>Claude Code</span></h1>
          <p className="codex-subtitle">Memória de projeto, subagentes especializados, hooks e permissões: como transformar um assistente de código em um fluxo de engenharia previsível.</p>
          <p className="codex-byline">George Marcone · Senior Software Engineer, Tech Lead & Software Architect</p>
          <div className="codex-tags"><span>Claude Code</span><span>CLAUDE.md</span><span>Subagentes</span><span>Hooks</span><span>HemoDinks</span></div>
        </header>
        <section className="codex-intro">
          <p>Em um <Link href="/artigos/orquestracao-agentes-codex">artigo anterior</Link>, descrevi como estruturei agentes Codex no HemoDinks, SaaS multiclínica construído com .NET, React e Azure. O Claude Code passou a fazer parte do mesmo fluxo, e a pergunta continua sendo a mesma: <strong>como fazer a IA trabalhar dentro da arquitetura do produto, e não ao redor dela?</strong></p>
          <p>A resposta não está em um prompt mais longo. Está em separar o que é contexto, o que é especialização, o que é regra obrigatória e o que exige validação humana. O Claude Code oferece mecanismos distintos para cada uma dessas camadas.</p>
        </section>
        <section className="codex-panel"><h2>Os quatro pilares da abordagem</h2><div className="codex-pillars">{pillars.map((p, i) => <div key={p.title}><span>0{i + 1}</span><h3>{p.title}</h3><p>{p.detail}</p></div>)}</div></section>
        <section>
          <h2>1. CLAUDE.md como memória de projeto</h2>
          <p>O <code>CLAUDE.md</code> é carregado no início de cada sessão e funciona como a memória persistente do repositório: visão da arquitetura, organização das camadas, comandos de build e teste, convenções de nomenclatura e, principalmente, o que não pode ser feito. Em um produto multitenant, isso inclui regras como nunca remover filtros de isolamento entre clínicas, nunca registrar dados sensíveis em logs e nunca criar migrations destrutivas sem análise.</p>
          <p>Como o Codex já utiliza o <code>AGENTS.md</code>, evito duplicar regras: o <code>CLAUDE.md</code> pode importar arquivos existentes com a sintaxe <code>@caminho</code>, reaproveitando o mesmo contrato de engenharia e acrescentando apenas o que é específico do Claude Code. Uma única fonte de verdade reduz divergências quando as regras evoluem.</p>
          <blockquote>Contexto bom é curto, específico e verificável. Um CLAUDE.md extenso demais dilui exatamente as regras que mais importam.</blockquote>
        </section>
        <section>
          <h2>2. Subagentes especializados</h2>
          <p>Subagentes são definidos como arquivos Markdown em <code>.claude/agents/</code>, com um cabeçalho que declara nome, descrição, ferramentas permitidas e, quando faz sentido, o modelo a ser usado. Cada subagente trabalha em uma janela de contexto própria e devolve ao agente principal apenas o resultado consolidado.</p>
          <p>Isso traz dois benefícios práticos. Primeiro, a <strong>especialização</strong>: um revisor de segurança verifica autenticação, autorização e isolamento de dados; um especialista de dados analisa migrations, índices e compatibilidade de rollback; um revisor de frontend avalia responsividade, acessibilidade e testes E2E. Segundo, o <strong>contexto preservado</strong>: investigações extensas acontecem fora da conversa principal, que permanece focada na tarefa.</p>
          <p>Restringir ferramentas é parte do desenho. Um subagente de revisão não precisa editar arquivos; um subagente de pesquisa não precisa executar comandos de deploy. Menos ferramentas significa menos superfície para erros.</p>
        </section>
        <section>
          <h2>3. Esforço proporcional à complexidade e ao risco</h2>
          <p>Assim como no Codex, a delegação considera complexidade técnica, risco de regressão, impacto arquitetural e dependências entre módulos. Ajustes triviais são feitos diretamente. Mudanças em fluxos críticos começam no modo de planejamento, em que o agente investiga o código e propõe um plano antes de alterar qualquer arquivo.</p>
          <p>A escolha do modelo por subagente também segue esse critério: tarefas de busca e leitura podem usar modelos mais rápidos e econômicos, enquanto revisões de arquitetura e segurança justificam modelos de maior capacidade. Os recursos disponíveis variam entre versões, por isso cada configuração deve ser validada no ambiente real, e não presumida.</p>
        </section>
        <section>
          <h2>4. Permissões e hooks: regras que não dependem do modelo</h2>
          <p>Instruções em linguagem natural orientam, mas não garantem. Para regras que precisam ser cumpridas sempre, o Claude Code oferece mecanismos determinísticos. As <strong>permissões</strong> em <code>.claude/settings.json</code> definem quais comandos e arquivos podem ser usados livremente, quais exigem confirmação e quais são bloqueados, como arquivos de segredos e comandos destrutivos.</p>
          <p>Os <strong>hooks</strong> executam scripts em pontos do ciclo de vida do agente, por exemplo antes ou depois do uso de uma ferramenta. Com eles é possível rodar formatação e lint após cada edição, bloquear alterações em caminhos sensíveis ou impedir comandos fora da política. A regra deixa de ser uma recomendação e passa a ser um controle.</p>
        </section>
        <section>
          <h2>5. Paralelismo com isolamento</h2>
          <p>Executar várias tarefas ao mesmo tempo só é vantajoso quando elas são realmente independentes. Utilizo <code>git worktree</code> para que cada sessão trabalhe em um diretório e uma branch próprios, sem disputar os mesmos arquivos. Cada linha de trabalho termina em um Pull Request separado, com escopo claro e revisão independente.</p>
          <p>Fluxos recorrentes, como revisão de PR, preparação de release ou checklist de segurança, podem ser empacotados como skills e comandos reutilizáveis, garantindo que o mesmo procedimento seja seguido a cada execução.</p>
        </section>
        <section>
          <h2>6. Validação e responsabilidade humana</h2>
          <p>Nenhum desses mecanismos substitui a verificação. Toda mudança passa por critérios de aceite, testes unitários, de integração e E2E proporcionais ao impacto, pipeline de CI e revisão humana antes de chegar à produção. Issues, Pull Requests e GitHub Projects mantêm a rastreabilidade entre o que foi pedido, o que foi alterado e o que foi validado.</p>
          <p>Usar Codex e Claude Code no mesmo projeto reforçou essa conclusão: as ferramentas mudam, mas o que sustenta a qualidade é o mesmo conjunto de práticas, ou seja, contexto disciplinado, limites explícitos e validação objetiva.</p>
        </section>
        <section id="conclusao" className="codex-conclusion">
          <p className="codex-kicker">CONCLUSÃO</p>
          <h2>O agente executa. A engenharia define os limites.</h2>
          <p>O Claude Code se torna mais útil quando cada mecanismo cumpre seu papel: o CLAUDE.md fornece contexto, os subagentes trazem especialização, as permissões e os hooks garantem regras, os worktrees isolam o trabalho paralelo e os testes comprovam o resultado. Essa divisão torna o uso de IA previsível, auditável e sustentável em um produto que já está em produção.</p>
          <p><strong>Orquestrar agentes é, antes de tudo, uma decisão de arquitetura.</strong></p>
        </section>
        <footer className="codex-footer"><p>George Marcone · GM Tech Solutions</p><Link href="/">← Voltar ao portfólio</Link></footer>
      </article>
    </main>
  );
}
