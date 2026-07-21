const technologies = [".NET", "Node.js", "TypeScript", "React", "Azure"];

const strengths = [
  {
    number: "15+",
    label: "anos em tecnologia",
    detail: "Da engenharia de software à liderança e arquitetura.",
  },
  {
    number: "8",
    label: "profissionais liderados",
    detail: "Mentoria, decisões técnicas e evolução de equipes.",
  },
  {
    number: "4",
    label: "setores de atuação",
    detail: "Saúde, educação, governo e serviços digitais.",
  },
];

const experiences = [
  {
    period: "2026 — atual",
    company: "GM Tech Solutions",
    role: "Founder & Lead Software Engineer",
    text: "Criação de produtos digitais próprios, definição de arquitetura, desenvolvimento full stack, cloud, segurança e evolução de soluções SaaS.",
    tags: [".NET", "React", "Azure", "SaaS"],
  },
  {
    period: "2022 — 2026",
    company: "CAST • Sebrae-SP",
    role: "Senior Software Engineer & Technical Lead",
    text: "Liderança técnica de cinco profissionais e modernização de plataformas corporativas utilizadas por milhares de pessoas.",
    tags: ["Node.js", "TypeScript", "React", "GCP"],
  },
  {
    period: "2021 — 2022",
    company: "Pulsati • Digital Republic • Indra",
    role: "Tech Lead & Senior Software Engineer",
    text: "Sistemas hospitalares, educação e pagamentos: sustentação crítica, APIs, microsserviços, CI/CD e alta disponibilidade.",
    tags: ["C#", ".NET", "SQL Server", "AWS"],
  },
  {
    period: "2011 — 2021",
    company: "MV Sistemas",
    role: "Software Developer, Systems Analyst & Tech Lead",
    text: "Quase uma década evoluindo plataformas hospitalares no Brasil e no exterior, com foco em estabilidade, performance e modernização.",
    tags: ["Healthcare", "Oracle", "AWS", "AngularJS"],
  },
  {
    period: "2008 — 2011",
    company: "Procenge • ITEP",
    role: "Software Developer",
    text: "Início da carreira construindo sistemas governamentais e soluções web para automatização de processos operacionais.",
    tags: ["VB.NET", "PHP", "MySQL", "Oracle"],
  },
];

const skillGroups = [
  {
    index: "01",
    title: "Backend & APIs",
    items: [".NET / C#", "Node.js", "TypeScript", "NestJS", "PHP / Laravel", "Python"],
  },
  {
    index: "02",
    title: "Frontend",
    items: ["React", "Vue.js", "Nuxt", "AngularJS", "HTML5", "CSS"],
  },
  {
    index: "03",
    title: "Cloud & DevOps",
    items: ["Azure", "AWS", "GCP", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    index: "04",
    title: "Arquitetura & Dados",
    items: [
      "Clean Architecture",
      "CQRS",
      "DDD",
      "Microsserviços",
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "MongoDB",
      "Cassandra",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="George Marcone - início">
          GM
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#competencias">Competências</a>
        </nav>
        <a className="contact-pill" href="#contato">Contato <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Arquitetura • Desenvolvimento • Nuvem</p>
          <h1>George <span>Marcone</span></h1>
          <h2>Senior Software Engineer & Software Architect</h2>
          <p className="hero-description">
            Mais de 15 anos construindo sistemas críticos, produtos digitais e arquiteturas escaláveis.
          </p>
          <div className="tech-row" aria-label="Principais tecnologias">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conheça meus projetos <Arrow /></a>
            <a className="button button-secondary" href="mailto:gmarcone@gmail.com">Fale comigo <Arrow /></a>
          </div>
        </div>

        <div className="hero-grid" aria-label="Destaques profissionais">
          <article className="feature-card feature-main">
            <div className="feature-icon drop">H</div>
            <p className="card-kicker">Produto em destaque</p>
            <h3>HemoDinks</h3>
            <p>SaaS para gestão e controladoria de cirurgias.</p>
            <div className="mini-product" aria-hidden="true">
              <span className="mini-line long" /><span className="mini-line" />
              <div className="mini-chart"><i /><i /><i /><i /><i /></div>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-icon">GM</div>
            <p className="card-kicker">Empresa</p>
            <h3>GM Tech Solutions</h3>
            <p>Produtos digitais, engenharia e arquitetura.</p>
            <div className="node-map" aria-hidden="true"><i /><i /><i /><i /></div>
          </article>
          <article className="feature-card compact-card">
            <div className="cloud-icon" aria-hidden="true">☁</div>
            <h3>Arquitetura Cloud</h3>
            <p>Azure • Containers • Serverless</p>
          </article>
          <article className="feature-card compact-card years-card">
            <p className="big-number">+15</p>
            <h3>anos</h3>
            <p>Experiência em tecnologia</p>
          </article>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="section-heading">
          <p className="eyebrow"><span /> Sobre mim</p>
          <h2>Engenharia com visão de <em>produto e negócio.</em></h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            Sou engenheiro de software, líder técnico e arquiteto com experiência em sistemas corporativos, APIs, integrações e plataformas de alta disponibilidade.
          </p>
          <p>
            Atuo da descoberta à produção: transformo problemas complexos em soluções seguras, sustentáveis e preparadas para crescer. Minha trajetória combina profundidade técnica, proximidade com o código e capacidade de orientar pessoas e decisões.
          </p>
        </div>
        <div className="metrics">
          {strengths.map((strength) => (
            <article key={strength.label}>
              <strong>{strength.number}</strong>
              <h3>{strength.label}</h3>
              <p>{strength.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading wide-heading">
          <div>
            <p className="eyebrow"><span /> Projetos selecionados</p>
            <h2>Soluções que conectam <em>tecnologia e impacto.</em></h2>
          </div>
          <p>Projetos em saúde, educação, governo e serviços digitais — da arquitetura à operação em produção.</p>
        </div>

        <article className="project-spotlight">
          <div className="project-copy">
            <p className="project-index">01 / PRODUTO SAAS</p>
            <h3>HemoDinks</h3>
            <p className="project-summary">Gestão administrativa e controladoria de cirurgias médicas em uma plataforma segura, rastreável e preparada para múltiplas clínicas.</p>
            <ul>
              <li>Controle de pacientes, procedimentos e fluxo operacional</li>
              <li>Perfis de acesso, arquivos e recuperação de senha</li>
              <li>Autenticação em dois fatores para reforço da segurança</li>
              <li>Envio automático de e-mails e notificações transacionais</li>
              <li>Mensageria assíncrona com Azure Service Bus</li>
              <li>Indicadores individuais e por grupos médicos</li>
              <li>Ambientes de homologação e produção na Azure</li>
            </ul>
            <div className="tag-list">
              {[".NET 10", "React", "Azure SQL", "Service Bus", "CQRS", "Clean Architecture", "Docker"].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-actions">
              <a
                className="button button-primary"
                href="https://hemodinks-homologacao.gestao-saude.tec.br/"
                target="_blank"
                rel="noreferrer"
              >
                Acessar demonstração <Arrow />
              </a>
              <a
                className="button button-secondary"
                href="https://portfolio-hemodinks.gestao-saude.tec.br/"
                target="_blank"
                rel="noreferrer"
              >
                Ver portfólio do produto <Arrow />
              </a>
              <small>Demonstração em homologação • Apresentação comercial do produto</small>
            </div>
          </div>
          <div className="architecture-visual" aria-label="Arquitetura resumida do HemoDinks">
            <div className="architecture-top"><span>React</span><i /> <span>.NET API</span></div>
            <div className="architecture-core">
              <strong>H</strong>
              <p>HemoDinks Cloud</p>
              <small>Segurança • Escala • Observabilidade</small>
            </div>
            <div className="architecture-bottom">
              <span>Azure SQL</span><span>Blob Storage</span><span>Functions</span>
              <span>Service Bus</span><span>E-mail</span><span>2FA</span>
            </div>
          </div>
        </article>

        <div className="project-grid">
          <article>
            <p className="project-index">02 / SEBRAE-SP</p>
            <h3>Mapa de Oportunidades V2</h3>
            <p>Modernização de plataforma com dados do IBGE, geolocalização, autenticação, PDFs e automação de comunicação.</p>
            <div className="tag-list"><span>Node.js</span><span>Vue.js</span><span>Laravel</span><span>GCP</span></div>
          </article>
          <article>
            <p className="project-index">03 / EVENTO</p>
            <h3>Feira do Empreendedor</h3>
            <p>Backend para evento de grande porte com antifraude, integrações de SMS, e-mail, reCAPTCHA e migração de dados.</p>
            <div className="tag-list"><span>Node.js</span><span>APIs</span><span>Automação</span></div>
          </article>
          <article>
            <p className="project-index">04 / SAÚDE</p>
            <h3>Sistemas hospitalares críticos</h3>
            <p>Evolução, sustentação e modernização de prontuários e plataformas de gestão utilizadas no Brasil e exterior.</p>
            <div className="tag-list"><span>.NET</span><span>Oracle</span><span>AWS</span><span>High Availability</span></div>
          </article>
        </div>
      </section>

      <section className="section experience" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow"><span /> Trajetória</p>
          <h2>Experiência que une <em>execução e liderança.</em></h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.company}>
              <time>{experience.period}</time>
              <div>
                <p className="company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p>{experience.text}</p>
                <div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="competencias">
        <div className="section-heading wide-heading">
          <div>
            <p className="eyebrow"><span /> Competências</p>
            <h2>Stack ampla. <em>Fundamentos sólidos.</em></h2>
          </div>
          <p>Escolho tecnologias a partir do problema, dos requisitos não funcionais e do contexto do negócio.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <span className="skill-index">{group.index}</span>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="principles">
          <p>Princípios que orientam meu trabalho</p>
          <div>{["Clean Architecture", "SOLID", "DDD", "CQRS", "Observabilidade", "Testes automatizados", "Segurança", "CI/CD"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section education">
        <div className="section-heading">
          <p className="eyebrow"><span /> Formação</p>
          <h2>Aprendizado <em>contínuo.</em></h2>
        </div>
        <div className="education-grid">
          <article><span>2024</span><h3>Pós-graduação em Inteligência Artificial</h3><p>Uniminas EAD</p></article>
          <article><span>2024</span><h3>Pós-graduação em Cloud Computing</h3><p>Uniminas EAD</p></article>
          <article><span>2024</span><h3>Pós-graduação em Desenvolvimento Web</h3><p>Uniminas EAD</p></article>
          <article><span>2023</span><h3>Pós-graduação em Arquitetura de Software</h3><p>Uniminas EAD</p></article>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-orb" aria-hidden="true">GM</div>
        <p className="eyebrow"><span /> Vamos conversar</p>
        <h2>Quer construir algo <em>relevante e escalável?</em></h2>
        <p>Estou disponível para oportunidades como Senior Software Engineer, Backend Specialist, Tech Lead e Software Architect.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:gmarcone@gmail.com">Enviar um e-mail <Arrow /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/george-marcone-morais-dos-santos-71466527/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">GM</a>
        <p>George Marcone • Recife, Pernambuco, Brasil</p>
        <p>© 2026 GM Tech Solutions</p>
      </footer>
    </main>
  );
}
