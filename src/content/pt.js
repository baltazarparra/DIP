export default {
  meta: {
    title: 'DIP — Protocolo de implementação',
    description:
      'Um protocolo estruturado e documentado pra desenvolvimento com agentes de IA. Organiza projetos complexos em marcos, fases e PRDs pra implementação confiável.',
  },
  nav: {
    getStarted: 'Começar',
    github: 'GitHub',
  },
  hero: {
    badge: 'Protocolo Aberto',
    titleLine1: 'Protocolo',
    titleLine2: 'de implementação',
    subtitle:
      'Um protocolo estruturado e documentado pra desenvolvimento com agentes de código. Organiza projetos complexos em marcos, fases e PRDs — pra dar contexto pros agentes e implementar com precisão.',
    cta: 'Começar',
    ctaSecondary: 'Ver no GitHub',
  },
  whyDip: {
    title: 'Por que o DIP?',
    intro:
      'Agentes de código são poderosos, mas sem estrutura eles se enrolam. Jogar um épico inteiro pra um agente gera resultado inconsistente. O DIP resolve isso quebrando o trabalho em partes bem definidas e documentadas que os agentes conseguem executar de forma confiável.',
    problem: {
      title: 'O Problema',
      items: [
        'Agentes não têm contexto do quadro geral',
        'Features grandes são implementadas de forma inconsistente',
        'Não existe handoff estruturado entre planejamento e execução',
        'Transições de fase perdem contexto sem documentação',
        'Premissas escondidas e incógnitas não resolvidas viram surpresas tarde demais',
      ],
    },
    solution: {
      title: 'A Solução',
      body: 'O DIP oferece um ciclo repetível onde cada passo gera um documento que alimenta o próximo, criando uma corrente de contexto que mantém humanos e agentes alinhados, incluindo o acompanhamento contínuo de URA.',
      flowSteps: ['Refinamento', 'Marco', 'Fases', 'PRDs', 'Implementação', 'Relatório', 'Loop'],
    },
  },
  protocol: {
    title: 'O Protocolo',
    intro:
      'Sete passos que transformam uma visão de produto em unidades de trabalho estruturadas e executáveis por agentes, mantendo a incerteza explícita.',
    folderStructureLabel: 'Estrutura de Pastas',
    folderStructureCode: 'estrutura do projeto',
    steps: [
      {
        number: '01',
        title: 'Reunião de Refinamento',
        description:
          'O time inteiro — Design, Produto, Negócio, Tecnologia — define um marco junto. Alinhamento entre áreas garante que o marco capture todas as perspectivas antes de qualquer código.',
      },
      {
        number: '02',
        title: 'Documento do Marco',
        description:
          'O time produz um milestone.md — definição completa do épico, com metas, escopo, critérios de sucesso, restrições e uma baseline de URA (Unknowns, Risks, Assumptions).',
      },
      {
        number: '03',
        title: 'Fases de Implementação',
        description:
          'O time de desenvolvimento quebra o marco em fases coerentes no implementation-phases.md. Cada fase é um agrupamento lógico de trabalho que pode ser concluído e validado de forma independente, com snapshot de URA e gate de saída.',
      },
      {
        number: '04',
        title: 'PRDs',
        description:
          'Cada fase é quebrada em PRDs individuais — documentos autocontidos que funcionam como cards de Jira detalhados. Um PRD tem tudo que um agente de código precisa: descrição, critérios de aceite, requisitos não-funcionais, URA e contexto técnico.',
      },
      {
        number: '05',
        title: 'Implementação',
        description:
          'O agente pega os PRDs da fase ativa e implementa um por um, validando premissas, reduzindo incógnitas e reagindo a gatilhos de risco, atendendo os critérios de aceite.',
      },
      {
        number: '06',
        title: 'Relatório de Fase',
        description:
          'Quando todos os PRDs de uma fase são concluídos, um relatório é gerado resumindo o que foi construído, desvios do plano, resultados de URA e contexto necessário pra próxima fase.',
      },
      {
        number: '07',
        title: 'Loop',
        description:
          'O ciclo se repete pra cada fase até o marco estar completo. Cada relatório ancora a próxima fase, preservando contexto ao longo de toda a implementação.',
      },
    ],
    folderStructure: `project/
├── AGENTS.md
├── .cursor/
│   └── rules/
│       ├── dip-protocol.mdc
│       ├── prd-writing.mdc
│       ├── report-writing.mdc
│       └── milestone-writing.mdc
└── docs/
    └── milestones/
        └── milestone-1/
            ├── milestone.md
            ├── implementation-phases.md
            ├── phases/
            │   ├── phase-1/
            │   │   ├── prd-user-auth.md
            │   │   └── prd-database-schema.md
            │   └── phase-2/
            │       └── prd-api-endpoints.md
            └── reports/
                ├── report-phase-1.md
                └── report-phase-2.md`,
  },
  artifacts: {
    title: 'Artefatos do Agente',
    intro:
      'O DIP se integra com os artefatos do agente de código pra criar um fluxo completo. Três camadas que se complementam sem sobrepor.',
    items: [
      {
        name: 'AGENTS.md',
        role: 'O Mapa',
        description:
          'Ponto de entrada pros agentes de código. Aponta pro marco ativo e fase atual. Os agentes leem isso primeiro pra entender onde o projeto está e o que fazer em seguida.',
        icon: '&#9881;',
        color: 'cyan',
      },
      {
        name: 'Cursor Rules',
        role: 'Os Guardrails',
        description:
          'Orientação contextual automática ativada por padrões de arquivo. As regras impõem formato de PRD, estrutura de relatório, disciplina de URA e conformidade com o protocolo sem o agente precisar ser lembrado.',
        icon: '&#9670;',
        color: 'amber',
      },
      {
        name: 'Skills',
        role: 'As Ferramentas',
        description:
          'Ações repetíveis pra scaffolding de marcos, criação de estruturas de fase e geração de relatórios. Skills automatizam as partes mecânicas do protocolo, incluindo atualizações de URA.',
        icon: '&#9889;',
        color: 'emerald',
      },
    ],
  },
  prdExample: {
    title: 'Como é um PRD',
    intro:
      'Cada PRD é uma unidade de trabalho autocontida — tipo um card de Jira detalhado em markdown. Tem tudo que um agente de código precisa pra implementar aquela parte: critérios de aceite, requisitos não-funcionais, URA, contexto técnico e limites claros.',
    fileName: 'prd-user-auth.md',
    prdContent: `---
title: User Authentication Flow
status: pending
priority: high
complexity: medium
phase: phase-1
milestone: milestone-1
---

# User Authentication Flow

## Description
Implement email/password authentication with session
management. Users should be able to sign up, log in,
and maintain sessions across page refreshes.

## Acceptance Criteria
- [ ] User can sign up with email and password
- [ ] User can log in with existing credentials
- [ ] Session persists across page refreshes
- [ ] Error messages displayed for invalid inputs
- [ ] Password reset flow via email

## Non-Functional Requirements
- Response time < 200ms for auth endpoints
- Passwords hashed with bcrypt (min 12 rounds)
- Rate limiting: max 5 failed attempts per minute
- HTTPS required for all auth endpoints

## Unknowns, Risks, and Assumptions (URA)
### Unknowns
| Unknown | Why It Matters | Discovery Action | Decision Deadline | Owner | Status |
|---------|----------------|------------------|-------------------|-------|--------|
| Peak auth load profile | Affects session architecture | Run load test with synthetic traffic | 2026-03-12 | Backend Lead | open |

### Assumptions
| Assumption | Confidence (1-5) | Validation Method | Validation Date | Impact If False | Owner | Status |
|------------|------------------|-------------------|-----------------|-----------------|-------|--------|
| Redis cache can sustain p95 < 30ms | 3 | Benchmark in staging | 2026-03-14 | Platform Engineer | open |

### Risks
| Risk Statement (If..., then...) | Likelihood (1-5) | Impact (1-5) | Response | Trigger | Owner | Status |
|---------------------------------|------------------|--------------|----------|---------|-------|--------|
| If auth DB latency spikes, then login completion may drop | 3 | 4 | reduce | p95 DB latency > 150ms for 10m | Backend Lead | monitoring |

## Technical Considerations
- Use JWT tokens stored in httpOnly cookies
- Refresh token rotation for extended sessions
- Consider OAuth2 integration in a future PRD

## Related Files
- src/auth/handlers.ts
- src/middleware/auth.ts
- src/db/schema/users.ts

## Out of Scope
- Social login (Google, GitHub) — separate PRD
- Two-factor authentication — separate PRD
- Admin role management — phase-2`,
  },
  gettingStarted: {
    title: 'Começando',
    intro: 'Adote o DIP no seu projeto em cinco passos. O protocolo funciona com qualquer stack e qualquer agente de código.',
    ctaText: 'Todos os templates, regras e exemplos estão no repositório.',
    ctaButton: 'Ver templates no GitHub',
    steps: [
      {
        number: '1',
        title: 'Adicionar a estrutura do DIP',
        description:
          'Crie a estrutura de pastas no seu projeto pra abrigar marcos, fases e relatórios.',
        code: 'mkdir -p docs/milestones/milestone-1/{phases/phase-1,reports}',
      },
      {
        number: '2',
        title: 'Copiar os templates',
        description:
          'Baixe os templates do DIP e coloque no seu projeto. Cada template inclui diretrizes de formatação, estrutura de URA e instruções inline para agentes de IA.',
        code: null,
      },
      {
        number: '3',
        title: 'Configurar seu AGENTS.md',
        description:
          'Adicione um AGENTS.md na raiz do projeto declarando que o projeto segue o DIP, apontando pro marco ativo e identificando a fase atual.',
        code: null,
      },
      {
        number: '4',
        title: 'Adicionar Cursor Rules',
        description:
          'Copie as regras do DIP pra .cursor/rules/ pra orientação automática ao escrever documentos do protocolo. As regras impõem formato de PRD, estrutura de relatório e conformidade com o protocolo.',
        code: 'cp templates/rules/*.mdc .cursor/rules/',
      },
      {
        number: '5',
        title: 'Rodar uma reunião de refinamento',
        description:
          'Reúna seu time — Design, Produto, Negócio, Tecnologia. Defina um marco junto, estabeleça a baseline inicial de URA, quebre o trabalho em fases e comece o loop.',
        code: null,
      },
    ],
  },
  simplerFlow: {
    title: 'Precisa de um fluxo mais simples?',
    body: 'Um guia prático pra desenvolvimento com agentes de código.',
    cta: 'Acessar o guia',
  },
  footer: {
    tagline: 'Protocolo de implementação',
    github: 'GitHub',
    templates: 'Templates',
    license: 'MIT License',
    copyright: 'DIP — Protocolo de implementação. Open source sob a MIT License.',
  },
  sourcesUsed: {
    label: 'Fontes Utilizadas',
    sources: [
      { title: 'ISO 31000:2018 — Risk management guidelines', url: 'https://www.iso.org/iso-31000-risk-management.html' },
      {
        title: 'The Orange Book (UK Government, 2025 update)',
        url: 'https://www.gov.uk/government/publications/orange-book/the-orange-book-management-of-risk-principles-and-concepts',
      },
      {
        title: 'NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments',
        url: 'https://www.nist.gov/publications/guide-conducting-risk-assessments',
      },
      {
        title: 'NIST SP 800-39 — Managing Information Security Risk',
        url: 'https://www.nist.gov/publications/managing-information-security-risk-organization-mission-and-information-system-view',
      },
      { title: 'DoD RIO Guide (2023, Change 2.2)', url: 'https://www.cto.mil/wp-content/uploads/2023/11/RIO-2023-2-2.pdf' },
      {
        title: 'NASA Risk Management Handbook v1 (2011)',
        url: 'https://ntrs.nasa.gov/api/citations/20120000033/downloads/20120000033.pdf',
      },
      { title: 'NASA Risk Management Handbook v2.0 Part 1 (2024)', url: 'https://ntrs.nasa.gov/citations/20240014019' },
      { title: 'NASA Risk Management Handbook v2.0 Part 2 (2024)', url: 'https://ntrs.nasa.gov/citations/20240014326' },
      { title: 'Google SRE Book — Embracing Risk', url: 'https://sre.google/sre-book/embracing-risk/' },
      { title: 'The Scrum Guide (2020)', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf' },
      {
        title: 'RAND MR-114 — Assumption-Based Planning',
        url: 'https://www.rand.org/pubs/monograph_reports/MR114.html',
      },
      {
        title: 'SEI — Architecture Tradeoff Analysis Method (ATAM)',
        url: 'https://www.sei.cmu.edu/library/architecture-tradeoff-analysis-method-collection/',
      },
      {
        title: 'PMI — Assumptions-Based Planning paper',
        url: 'https://www.pmi.org/learning/library/assumptions-based-planning-analyze-techniques-6582',
      },
    ],
  },
}
