# George Marcone - Portfólio profissional

Portfólio profissional de George Marcone, Senior Software Engineer e Software Architect, com mais de 15 anos de experiência em engenharia de software, arquitetura, liderança técnica, cloud e sistemas críticos.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Executar localmente

Requisitos: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Validar a versão de produção

```bash
npm ci
npm run lint
npm run build
```

## Publicar no Azure Static Web Apps

1. No Azure Portal, crie um recurso **Static Web App**.
2. Em **Deployment details**, selecione GitHub.
3. Escolha este repositório e a branch `main`.
4. Em **Build Presets**, selecione `Next.js`.
5. Use `/` como **App location**.
6. Deixe **Api location** vazio.
7. Para Next.js, deixe o Azure gerar a configuração recomendada de saída do build.
8. Conclua a criação e acompanhe o workflow em **Actions** no GitHub.

O Azure criará automaticamente o workflow de CI/CD dentro de `.github/workflows/`.

## Links

- [LinkedIn de George Marcone](https://www.linkedin.com/in/george-marcone-morais-dos-santos-71466527/)
- [Portfólio do HemoDinks](https://portfolio-hemodinks.gestao-saude.tec.br/)
- [Demonstração do HemoDinks](https://hemodinks-homologacao.gestao-saude.tec.br/)

## Autoria

Desenvolvido para **GM Tech Solutions**.
