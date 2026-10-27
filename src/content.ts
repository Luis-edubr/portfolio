export type Locale = "pt" | "en";
export type Localized = Record<Locale, string>;

export interface CaseStudy {
  slug: string;
  number: string;
  year: string;
  category: Localized;
  title: Localized;
  summary: Localized;
  role: Localized;
  context: Localized;
  problem: Localized;
  solution: Localized;
  decisions: Record<Locale, string[]>;
  evidence: Localized;
  result: Localized;
  learning: Localized;
  stack: string[];
  links?: { label: Localized; url: string }[];
  tone: "rust" | "sage" | "blue" | "sand" | "olive" | "ink";
}

export const cases: CaseStudy[] = [
  {
    slug: "proby-testes",
    number: "01",
    year: "2025–26",
    tone: "rust",
    category: { pt: "Automação · Produto", en: "Automation · Product" },
    title: {
      pt: "Testes de ponta a ponta ao alcance do backoffice",
      en: "End-to-end testing from the backoffice",
    },
    summary: {
      pt: "Uma interface para que gestão e QA executassem fluxos automatizados sem depender do terminal.",
      en: "An interface that let management and QA run automated flows without using a terminal.",
    },
    role: {
      pt: "Desenvolvimento da ferramenta e apoio ao deploy com o Tech Lead, na ProbY Global.",
      en: "Built the tool and supported deployment with the Tech Lead at ProbY Global.",
    },
    context: {
      pt: "Na plataforma ProbY, validações manuais abrangentes exigiam tempo e conhecimento operacional. Havia uma suíte geral de mais de 200 testes, de tipos distintos; os testes de navegador eram apenas parte dela.",
      en: "At ProbY, broad manual validation required time and operational knowledge. The overall suite contained more than 200 tests of different types; browser tests were only one part of it.",
    },
    problem: {
      pt: "Tornar os cenários críticos acessíveis a pessoas não técnicas e permitir acompanhamento da execução, inclusive quando os ambientes local e produtivo se comportavam de modo diferente.",
      en: "Make critical scenarios accessible to non-technical colleagues and observable, including when local and production environments behaved differently.",
    },
    solution: {
      pt: "Integrei uma interface administrativa em Laravel a testes com Dusk executados em ambiente isolado. O navegador podia ser acompanhado visualmente por noVNC; logs registravam marcos da execução e erros para facilitar o diagnóstico.",
      en: "I integrated a Laravel admin interface with Dusk tests running in an isolated environment. A noVNC view exposed browser progress, while logs recorded execution milestones and errors for diagnosis.",
    },
    decisions: {
      pt: [
        "Isolar a execução do navegador para reduzir interferência no produto.",
        "Expor progresso e falhas em linguagem operacional útil para gestão e QA.",
        "Instrumentar etapas da execução para investigar diferenças entre ambientes sem acesso direto à produção.",
      ],
      en: [
        "Isolate browser execution to limit interference with the product.",
        "Expose progress and failures in a form useful to management and QA.",
        "Instrument execution stages to investigate environment differences without direct production access.",
      ],
    },
    evidence: {
      pt: "Entrega profissional relatada pelo autor. Código e infraestrutura da ProbY são privados; a arquitetura aqui é propositalmente conceitual.",
      en: "Professional delivery described by the author. ProbY code and infrastructure are private; the architecture here is intentionally conceptual.",
    },
    result: {
      pt: "A execução passou a ser iniciada em poucos cliques. Segundo minha estimativa, uma validação manual que podia levar mais de uma hora passou a rodar em poucos minutos; não se trata de benchmark formal.",
      en: "Runs became accessible in a few clicks. In my estimate, validation that could take over an hour manually ran in minutes; this is not a formal benchmark.",
    },
    learning: {
      pt: "Observabilidade prática e colaboração no deploy foram tão importantes quanto escrever os testes.",
      en: "Practical observability and collaboration during deployment mattered as much as writing the tests.",
    },
    stack: ["PHP", "Laravel", "Dusk", "Selenium", "Docker", "noVNC"],
  },
  {
    slug: "proby-rag",
    number: "02",
    year: "2025–26",
    tone: "sage",
    category: { pt: "IA aplicada · Backend", en: "Applied AI · Backend" },
    title: {
      pt: "Recuperação de contexto integrada ao produto",
      en: "Context retrieval inside a real product",
    },
    summary: {
      pt: "Da pesquisa à implementação de uma arquitetura RAG na ProbY, com um experimento acadêmico público posterior.",
      en: "From research to a RAG implementation at ProbY, followed by a separate public academic experiment.",
    },
    role: {
      pt: "Estudo, desenho da arquitetura e implementação da integração RAG. A avaliação de desempenho foi conduzida principalmente pelo Tech Lead.",
      en: "Researched, designed and implemented the RAG integration. Performance evaluation was mainly led by the Tech Lead.",
    },
    context: {
      pt: "O produto precisava recuperar informações relevantes antes de gerar respostas. A solução exigia decisões sobre segmentação de documentos, embeddings, busca vetorial e integração ao fluxo existente.",
      en: "The product needed relevant information retrieved before generating answers. This required choices around document splitting, embeddings, vector search and product integration.",
    },
    problem: {
      pt: "Conectar ingestão, recuperação e geração de forma confiável, com parâmetros ajustáveis e tratamento de falhas.",
      en: "Connect ingestion, retrieval and generation reliably, with tunable parameters and failure handling.",
    },
    solution: {
      pt: "Projetei o fluxo de chunking, geração de embeddings, armazenamento vetorial e recuperação de contexto. Integrei as respostas à aplicação e tratei erros nas fronteiras da operação.",
      en: "I designed the chunking, embedding, vector storage and context retrieval flow. I integrated responses into the application and handled errors at its boundaries.",
    },
    decisions: {
      pt: [
        "Separar ingestão e recuperação para permitir evolução independente.",
        "Definir chunking e parâmetros de busca conforme o contexto do produto.",
        "Tratar falhas de serviços externos como parte do comportamento da aplicação.",
      ],
      en: [
        "Separate ingestion and retrieval so each could evolve independently.",
        "Choose chunking and search parameters for the product context.",
        "Treat external service failures as application behavior.",
      ],
    },
    evidence: {
      pt: "A implementação profissional é privada. O repositório RAG-ERAD reproduz aspectos técnicos em um estudo acadêmico separado, com Laravel, OpenAI e Qdrant; não contém o código proprietário da ProbY.",
      en: "The professional implementation is private. The RAG-ERAD repository reproduces technical aspects in a separate academic study using Laravel, OpenAI and Qdrant; it does not contain ProbY proprietary code.",
    },
    result: {
      pt: "Arquitetura RAG implementada no produto. O repositório público permite examinar uma reprodução experimental do pipeline e de cenários com e sem cache, sem atribuir esses números ao sistema comercial.",
      en: "RAG architecture implemented in the product. The public repository exposes an experimental reproduction of the pipeline and cache scenarios, without attributing those measurements to the commercial system.",
    },
    learning: {
      pt: "A qualidade de uma integração com IA depende da recuperação, dos limites dos serviços e da avaliação contínua, além da chamada ao modelo.",
      en: "An AI integration depends on retrieval, service boundaries and ongoing evaluation as much as on calling the model.",
    },
    stack: ["PHP", "Laravel", "RAG", "Embeddings", "Qdrant", "OpenAI"],
    links: [
      {
        label: { pt: "Ver estudo acadêmico", en: "View academic study" },
        url: "https://github.com/Luis-edubr/rag-erad-proby",
      },
    ],
  },
  {
    slug: "pedvet",
    number: "03",
    year: "2026",
    tone: "blue",
    category: { pt: "Produto · Full Stack", en: "Product · Full Stack" },
    title: {
      pt: "Fundação técnica de um MVP com múltiplos perfis",
      en: "Technical foundation for a multi-role MVP",
    },
    summary: {
      pt: "Autenticação, fluxos de produto, backoffice e operações em uma aplicação Next.js.",
      en: "Authentication, product flows, backoffice and operations in a Next.js application.",
    },
    role: {
      pt: "Desenvolvedor Full Stack na Ípssilon. Conduzi a fundação técnica com requisitos do Product Manager, revisão e integração pela equipe.",
      en: "Full Stack Developer at Ípssilon. I led the technical foundation with Product Manager requirements and team review and integration.",
    },
    context: {
      pt: "O PedVet conecta solicitantes a profissionais veterinários. O MVP precisava distinguir jornadas e permissões sem perder a velocidade de entrega.",
      en: "PedVet connects requesters with veterinary professionals. Its MVP needed distinct journeys and permissions while keeping delivery moving.",
    },
    problem: {
      pt: "Construir uma base coerente para autenticação, autorização, fluxos de negócio e administração, com evolução segura do banco e processo de desenvolvimento rastreável.",
      en: "Build a coherent base for authentication, authorization, business flows and administration, with safe schema evolution and a traceable development process.",
    },
    solution: {
      pt: "Implementei partes centrais da aplicação Next.js/TypeScript, separando perfis e área administrativa. A autenticação usa Supabase Auth; o acesso a dados em requisições passa por clientes Supabase e políticas RLS. Prisma Migrate versiona o schema.",
      en: "I implemented core parts of the Next.js/TypeScript application with separate user roles and administration. Authentication uses Supabase Auth; request-time data access uses Supabase clients and RLS policies. Prisma Migrate versions the schema.",
    },
    decisions: {
      pt: [
        "Definir autorização próxima aos fluxos protegidos e usar RLS como camada de isolamento de dados.",
        "Usar Prisma para migrations, sem Prisma Client no acesso de runtime.",
        "Escrever especificações e revisar implementação assistida por IA antes de abrir PRs.",
        "Criar snapshots criptografados e procedimento de recuperação para ambiente isolado.",
      ],
      en: [
        "Enforce authorization near protected flows and use RLS for data isolation.",
        "Use Prisma for migrations without Prisma Client for runtime data access.",
        "Write specifications and review AI-assisted implementation before opening PRs.",
        "Create encrypted snapshots and an isolated-environment recovery procedure.",
      ],
    },
    evidence: {
      pt: "README, arquitetura e PRs privados foram consultados para verificar stack, participação e estado do projeto. O código e a documentação interna não são reproduzidos aqui.",
      en: "Private README, architecture and PRs were reviewed to verify stack, contribution and project status. Internal code and documentation are not reproduced here.",
    },
    result: {
      pt: "MVP com fundação técnica e fluxos principais implementados. O runbook registra geração de snapshots criptografados e restauração validada em destino isolado; não houve recuperação produtiva durante incidente.",
      en: "MVP with technical foundation and main flows implemented. The runbook records encrypted snapshots and a restoration validated in an isolated destination; this was not production incident recovery.",
    },
    learning: {
      pt: "Especificações, revisão e limites de autorização ajudaram a manter decisões técnicas explícitas durante uma entrega rápida.",
      en: "Specifications, review and authorization boundaries kept technical decisions explicit during fast delivery.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "RLS",
      "Prisma Migrate",
      "GitHub Actions",
    ],
  },
  {
    slug: "cobame",
    number: "04",
    year: "2025–26",
    tone: "sand",
    category: { pt: "Backend · Integrações", en: "Backend · Integrations" },
    title: {
      pt: "Eventos, conteúdo e cobrança em uma plataforma Laravel",
      en: "Events, content and payments in Laravel",
    },
    summary: {
      pt: "Uma plataforma institucional com CMS, inscrições, regras de preço e integração de checkout.",
      en: "An institutional platform with a CMS, registrations, pricing rules and checkout integration.",
    },
    role: {
      pt: "Desenvolvimento na VX Agency, da aplicação Laravel às regras comerciais e ferramentas administrativas.",
      en: "Development at VX Agency, from the Laravel application to business rules and administration tools.",
    },
    context: {
      pt: "A operação reunia publicação de conteúdo, eventos, inscrições e cobrança. Parte dessas tarefas dependia de processos manuais.",
      en: "The operation combined content publishing, events, registrations and payments. Some of those tasks relied on manual processes.",
    },
    problem: {
      pt: "Unificar gestão de conteúdo e eventos e traduzir regras comerciais de inscrição para um fluxo administrável.",
      en: "Bring content and event management together and turn registration pricing rules into an administrable flow.",
    },
    solution: {
      pt: "Desenvolvi áreas públicas e administrativas em Laravel, com CMS, notícias, newsletter, eventos, inscrições, exportações e integração ao Asaas para o checkout.",
      en: "I developed public and administrative areas in Laravel, covering CMS, news, newsletter, events, registrations, exports and an Asaas checkout integration.",
    },
    decisions: {
      pt: [
        "Centralizar regras de preço e desconto no fluxo de inscrição.",
        "Direcionar o pagamento ao provedor e tratar o retorno no sistema.",
        "Adaptar processamento agendado da newsletter às limitações da infraestrutura disponível.",
      ],
      en: [
        "Centralize pricing and discounts in the registration flow.",
        "Direct payment to the provider and handle its return in the system.",
        "Adapt scheduled newsletter processing to the available infrastructure.",
      ],
    },
    evidence: {
      pt: "Estrutura de rotas, dependências e PRs do repositório privado confirmam módulos de eventos, administração e exportação. Não há código privado publicado neste case.",
      en: "Routes, dependencies and PRs in the private repository confirm event, administration and export modules. No private code is published in this case.",
    },
    result: {
      pt: "Inscrições, cobrança e administração de eventos passaram a ter fluxos digitais, reduzindo etapas manuais relatadas pela operação. Sem métrica formal de tempo publicada.",
      en: "Registrations, payments and event administration moved into digital flows, reducing manual steps reported by the operation. No formal time metric is published.",
    },
    learning: {
      pt: "Integrações de pagamento exigem atenção ao estado do pedido, à comunicação com o usuário e ao trabalho administrativo depois do checkout.",
      en: "Payment integrations require attention to order state, user communication and administrative work after checkout.",
    },
    stack: ["PHP", "Laravel", "MySQL", "Asaas", "Blade"],
  },
  {
    slug: "sam",
    number: "05",
    year: "2025",
    tone: "olive",
    category: {
      pt: "Produto · Regras de negócio",
      en: "Product · Business rules",
    },
    title: {
      pt: "Uma decisão comercial transformada em software",
      en: "Turning a commercial decision into software",
    },
    summary: {
      pt: "Uma calculadora de viabilidade para máquinas de café apoiada por um backend Laravel para captação.",
      en: "A viability calculator for coffee machines, supported by a Laravel lead backend.",
    },
    role: {
      pt: "Desenvolvimento da calculadora e do backend associado no contexto da VX Agency.",
      en: "Developed the calculator and associated backend in the VX Agency context.",
    },
    context: {
      pt: "Clientes precisavam avaliar preço de venda, volume de consumo e modalidade de aquisição antes de uma conversa comercial.",
      en: "Customers needed to assess selling price, consumption volume and acquisition model before a sales conversation.",
    },
    problem: {
      pt: "Traduzir hipóteses comerciais em uma simulação compreensível e registrar o interesse do usuário.",
      en: "Turn business assumptions into a clear simulation and capture user interest.",
    },
    solution: {
      pt: "Implementei uma calculadora de etapas em JavaScript, com fórmulas para estimar o volume necessário conforme compra ou aluguel. O backend Laravel expõe endpoints de leads e autenticação para administração.",
      en: "I built a multi-step JavaScript calculator with formulas estimating required volume for purchase or rental. The Laravel backend exposes lead and administrative authentication endpoints.",
    },
    decisions: {
      pt: [
        "Explicitar os parâmetros da simulação e apresentar o resultado em termos de doses por dia.",
        "Separar a experiência de cálculo do registro de leads no backend.",
        "Tratar o resultado como estimativa comercial, não como projeção financeira garantida.",
      ],
      en: [
        "Expose simulation inputs and express results as cups per day.",
        "Separate the calculation experience from backend lead capture.",
        "Frame the result as a commercial estimate, not a guaranteed financial projection.",
      ],
    },
    evidence: {
      pt: "Os repositórios privados da calculadora e do backend foram verificados. A calculadora contém as fórmulas e o backend contém endpoints de leads e autenticação.",
      en: "The private calculator and backend repositories were reviewed. The calculator contains the formulas and the backend contains lead and authentication endpoints.",
    },
    result: {
      pt: "Um fluxo de simulação e captação foi implementado. Não há métrica pública de conversão ou receita atribuível ao projeto.",
      en: "A simulation and lead capture flow was implemented. No public conversion or revenue metric is attributable to the project.",
    },
    learning: {
      pt: "Pequenas aplicações comerciais dependem de regras claras e de uma explicação honesta dos seus pressupostos.",
      en: "Small commercial applications depend on clear rules and an honest explanation of their assumptions.",
    },
    stack: ["JavaScript", "PHP", "Laravel", "API REST"],
  },
  {
    slug: "sql-to-seeder",
    number: "06",
    year: "2025",
    tone: "ink",
    category: { pt: "Open source · Ferramenta", en: "Open source · Tooling" },
    title: {
      pt: "SQL para seeders, via linha de comando",
      en: "SQL to seeders from the command line",
    },
    summary: {
      pt: "Uma CLI em TypeScript para converter INSERTs SQL em seeders Laravel ou Prisma.",
      en: "A TypeScript CLI that converts SQL INSERT statements into Laravel or Prisma seeders.",
    },
    role: {
      pt: "Projeto pessoal de ferramenta e experimentação open source.",
      en: "Personal tooling and open source experiment.",
    },
    context: {
      pt: "Dados existentes em SQL podem precisar ser reaproveitados como seeders durante o desenvolvimento.",
      en: "Existing SQL data sometimes needs to be reused as seeders during development.",
    },
    problem: {
      pt: "Reduzir a transcrição manual de INSERTs para formatos de frameworks.",
      en: "Reduce manual transcription of INSERT statements into framework formats.",
    },
    solution: {
      pt: "Criei uma CLI com parser e adaptadores separados para gerar saídas Laravel e Prisma. O adaptador Django aparece no repositório, mas ainda não está implementado.",
      en: "I built a CLI with separate parser and adapters for Laravel and Prisma output. A Django adapter exists in the repository but is not implemented.",
    },
    decisions: {
      pt: [
        "Separar interpretação SQL dos geradores específicos de framework.",
        "Oferecer opções de classe, destino e framework na CLI.",
        "Manter o escopo e as limitações visíveis: a ferramenta ainda é experimental.",
      ],
      en: [
        "Separate SQL parsing from framework-specific generators.",
        "Expose class name, output path and framework options in the CLI.",
        "Keep scope and limitations visible: the tool is still experimental.",
      ],
    },
    evidence: {
      pt: "Código público consultado: parser, CLI e adaptadores. A opção Django não está ativa; o README também informa que a publicação no npm ainda não está disponível.",
      en: "Public source reviewed: parser, CLI and adapters. Django output is not active; the README also says the npm release is not available yet.",
    },
    result: {
      pt: "CLI funcional como projeto de código, com limitações de validação e formatos ainda por amadurecer. Não a apresento como pacote npm publicado.",
      en: "A working source-level CLI with validation and format limitations still to improve. It is not presented as a published npm package.",
    },
    learning: {
      pt: "Ferramentas de conversão precisam delimitar bem o SQL aceito e comunicar falhas com precisão.",
      en: "Conversion tools need to define accepted SQL clearly and report failures precisely.",
    },
    stack: ["TypeScript", "Node.js", "CLI", "SQL"],
    links: [
      {
        label: { pt: "Ver repositório", en: "View repository" },
        url: "https://github.com/Luis-edubr/sql-to-seeder",
      },
    ],
  },
];

export const profile = {
  name: "Luis Eduardo Messias de Oliveira",
  github: "https://github.com/Luis-edubr",
  linkedin: "https://www.linkedin.com/in/luis-eduardo-messias/",
};

export const experience = [
  {
    date: { pt: "jul–set 2026", en: "Jul–Sep 2026" },
    place: "Ípssilon",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    text: {
      pt: "Fundação técnica do PedVet, com autenticação, autorização, fluxos de produto, backoffice e processo orientado a especificações.",
      en: "Technical foundation for PedVet, including authentication, authorization, product flows, backoffice and specification-driven development.",
    },
  },
  {
    date: { pt: "fev 2025–jun 2026", en: "Feb 2025–Jun 2026" },
    place: "ProbY Global",
    role: {
      pt: "Assistente de Tecnologia Aplicada Jr.",
      en: "Junior Applied Technology Assistant",
    },
    text: {
      pt: "Desenvolvimento e manutenção em PHP, Laravel e MySQL; automação de testes integrada ao backoffice e implementação de arquitetura RAG.",
      en: "PHP, Laravel and MySQL product development; backoffice test automation and a RAG architecture implementation.",
    },
  },
  {
    date: { pt: "desde 2025", en: "Since 2025" },
    place: "VX Agency",
    role: {
      pt: "Cofundador · Desenvolvimento",
      en: "Co-founder · Development",
    },
    text: {
      pt: "Projetos web comerciais, integrações e automações, com foco em soluções de backend e regras de negócio.",
      en: "Commercial web projects, integrations and automation, focused on backend solutions and business rules.",
    },
  },
];
