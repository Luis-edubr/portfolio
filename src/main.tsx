import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  cases,
  experience,
  profile,
  type CaseStudy,
  type Locale,
} from "./content";
import "./style.css";

const copy = {
  pt: {
    navWork: "Projetos",
    navAbout: "Trajetória",
    navLab: "Laboratório",
    navContact: "Contato",
    skip: "Pular para o conteúdo",
    home: "Início",
    cases: "Estudos de caso",
    available: "Aberto a oportunidades em backend PHP / Laravel",
    heroTop: "Desenvolvedor Backend · PHP & Laravel",
    heroOne: "Engenharia de",
    heroTwo: "software para",
    heroThree: "problemas reais.",
    heroText:
      "Sou Luis Eduardo. Desenvolvo backends, integrações e fluxos de produto com atenção a regras de negócio, manutenção e entrega. Meu foco é PHP e Laravel; também atuo em projetos full stack.",
    explore: "Explorar projetos",
    connect: "Vamos conversar",
    signalOne: "Backend em primeiro plano",
    signalTwo: "Experiência em produto",
    signalThree: "Português · English",
    index: "Índice de trabalho",
    selected: "Projetos selecionados",
    selectedLead:
      "Cases que mostram decisões, escopo e participação em entregas comerciais e técnicas.",
    readCase: "Ler case",
    aboutEyebrow: "Percurso profissional",
    aboutTitle: "Experiência que vai do código à entrega.",
    aboutLead:
      "Atuação profissional desde 2024. Trabalho com desenvolvimento de produto, integrações e aplicações comerciais, com preferência por backend.",
    approachEyebrow: "Como trabalho",
    approachTitle: "Contexto antes da solução.",
    approachText:
      "Gosto de entender o fluxo de negócio, explicitar restrições e escolher a implementação que a equipe consegue manter. Em projetos recentes, usei especificações, revisão de PRs e testes funcionais para sustentar entregas rápidas.",
    labEyebrow: "Laboratório técnico",
    labTitle: "Código público e estudos.",
    labLead:
      "Projetos pessoais e acadêmicos ficam separados das entregas comerciais. Aqui estão experimentos que podem ser examinados no GitHub.",
    labRag:
      "Reprodução acadêmica de um pipeline RAG com Laravel, OpenAI e Qdrant. Relacionado à experiência profissional, mas com código próprio.",
    labSql:
      "Ferramenta CLI experimental para transformar INSERTs SQL em seeders Laravel e Prisma.",
    labUmap: "UMAP · Navegação indoor",
    labUmapText:
      "Projeto acadêmico em desenvolvimento com React, Leaflet e cálculo de rotas. Repositório privado; apresentado apenas como contexto.",
    contactEyebrow: "Contato",
    contactTitle: "Vamos construir a próxima entrega?",
    contactLead:
      "Busco oportunidades em desenvolvimento Backend PHP/Laravel e posições Full Stack compatíveis. Falo português nativo e inglês fluente.",
    noEmail: "Contato profissional pelo LinkedIn.",
    github: "GitHub",
    linkedin: "LinkedIn",
    allWork: "Todos os projetos",
    back: "Voltar aos projetos",
    overview: "Visão geral",
    role: "Minha participação",
    context: "Contexto",
    problem: "Problema",
    solution: "Solução",
    decisions: "Decisões de engenharia",
    evidence: "Evidência e escopo",
    result: "Resultado",
    learning: "Aprendizado",
    technologies: "Tecnologias",
    links: "Links públicos",
    privateNote:
      "Este case descreve uma entrega privada sem expor código, telas ou documentação interna.",
    notFound: "Esta página não existe.",
    goHome: "Ir para o início",
    footer: "Desenvolvido com cuidado e conteúdo verificável.",
    artSystems: "SISTEMAS",
    artInput: "ENTRADA",
    artContext: "Contexto",
    artProcess: "PROCESSO",
    artEngineering: "Engenharia",
    artOutput: "SAÍDA",
    artSoftware: "Software útil",
    artSteps: "CRIAR → VALIDAR → ENTREGAR",
    methodSteps: ["Entender", "Especificar", "Construir", "Validar"],
    labTypes: ["PESQUISA", "FERRAMENTA", "ACADÊMICO"],
    focus: "FOCO",
    caseLabel: "ESTUDO",
  },
  en: {
    navWork: "Work",
    navAbout: "Experience",
    navLab: "Lab",
    navContact: "Contact",
    skip: "Skip to content",
    home: "Home",
    cases: "Case studies",
    available: "Open to PHP / Laravel backend opportunities",
    heroTop: "Backend Developer · PHP & Laravel",
    heroOne: "Software",
    heroTwo: "engineering for",
    heroThree: "real problems.",
    heroText:
      "I’m Luis Eduardo. I build backends, integrations and product flows with attention to business rules, maintainability and delivery. My focus is PHP and Laravel; I also work across the stack.",
    explore: "Explore work",
    connect: "Get in touch",
    signalOne: "Backend first",
    signalTwo: "Product experience",
    signalThree: "Português · English",
    index: "Work index",
    selected: "Selected work",
    selectedLead:
      "Cases showing decisions, scope and contributions across commercial and technical deliveries.",
    readCase: "Read case",
    aboutEyebrow: "Professional path",
    aboutTitle: "Experience from code to delivery.",
    aboutLead:
      "Professional experience since 2024. I work on product development, integrations and commercial applications, with a preference for backend work.",
    approachEyebrow: "Working method",
    approachTitle: "Context before solution.",
    approachText:
      "I start by understanding the business flow, making constraints explicit and choosing an implementation the team can maintain. In recent projects, I used specifications, PR review and functional tests to support fast delivery.",
    labEyebrow: "Technical lab",
    labTitle: "Public code and studies.",
    labLead:
      "Personal and academic projects are separate from commercial work. These experiments can be inspected on GitHub.",
    labRag:
      "Academic reproduction of a RAG pipeline with Laravel, OpenAI and Qdrant. Related to prior professional experience, but built as a separate codebase.",
    labSql:
      "Experimental CLI tool for converting SQL INSERTs into Laravel and Prisma seeders.",
    labUmap: "UMAP · Indoor navigation",
    labUmapText:
      "Academic work in progress using React, Leaflet and route calculation. The repository is private; shown here only as context.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build the next delivery.",
    contactLead:
      "I’m seeking Backend PHP/Laravel opportunities and compatible Full Stack positions. I speak native Portuguese and fluent English.",
    noEmail: "Professional contact through LinkedIn.",
    github: "GitHub",
    linkedin: "LinkedIn",
    allWork: "All projects",
    back: "Back to work",
    overview: "Overview",
    role: "My contribution",
    context: "Context",
    problem: "Problem",
    solution: "Solution",
    decisions: "Engineering decisions",
    evidence: "Evidence and scope",
    result: "Outcome",
    learning: "What I learned",
    technologies: "Technologies",
    links: "Public links",
    privateNote:
      "This case describes private work without exposing internal code, screens or documentation.",
    notFound: "This page does not exist.",
    goHome: "Go home",
    footer: "Built with care and verifiable content.",
    artSystems: "SYSTEMS",
    artInput: "INPUT",
    artContext: "Context",
    artProcess: "PROCESS",
    artEngineering: "Engineering",
    artOutput: "OUTPUT",
    artSoftware: "Useful software",
    artSteps: "BUILD → VERIFY → DELIVER",
    methodSteps: ["Understand", "Specify", "Build", "Verify"],
    labTypes: ["RESEARCH", "TOOLING", "ACADEMIC"],
    focus: "FOCUS",
    caseLabel: "CASE",
  },
};

function useLocale(): Locale {
  const { lang } = useParams();
  return lang === "en" ? "en" : "pt";
}

function ScrollAndMeta({
  locale,
  title,
  description,
}: {
  locale: Locale;
  title: string;
  description: string;
}) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      window.setTimeout(
        () => document.getElementById(location.hash.slice(1))?.scrollIntoView(),
        30,
      );
    } else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title = `${title} | Luis Eduardo`;
    const setMeta = (selector: string, value: string) => {
      document
        .querySelector<HTMLMetaElement>(selector)
        ?.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', `${title} | Luis Eduardo`);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', window.location.href);
    setMeta('meta[property="og:image"]', `${window.location.origin}/og.png`);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", `${window.location.origin}${location.pathname}`);
  }, [locale, title, description, location.pathname]);
  return null;
}

function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const location = useLocation();
  const other = locale === "pt" ? "en" : "pt";
  const switchPath =
    location.pathname.replace(/^\/(pt|en)/, `/${other}`) + location.hash;
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link
            to={`/${locale}`}
            className="brand"
            aria-label={`${profile.name} — ${t.home}`}
          >
            <span className="brand-mark">
              LE<span>.</span>
            </span>
            <span className="brand-name">
              Luis Eduardo
              <br />
              <small>Software Engineering</small>
            </span>
          </Link>
          <nav
            aria-label={
              locale === "pt" ? "Navegação principal" : "Main navigation"
            }
          >
            <Link to={`/${locale}#work`}>{t.navWork}</Link>
            <Link to={`/${locale}#experience`}>{t.navAbout}</Link>
            <Link to={`/${locale}#lab`}>{t.navLab}</Link>
            <Link to={`/${locale}#contact`}>{t.navContact}</Link>
          </nav>
          <Link
            className="lang-switch"
            to={switchPath}
            aria-label={
              locale === "pt" ? "Switch to English" : "Mudar para português"
            }
          >
            {other.toUpperCase()} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}

function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} Luis Eduardo</span>
        <span>{copy[locale].footer}</span>
        <Link to={`/${locale}#top`}>↑ {copy[locale].home}</Link>
      </div>
    </footer>
  );
}

function ProjectRow({ item, locale }: { item: CaseStudy; locale: Locale }) {
  return (
    <Link
      className={`project-row tone-${item.tone}`}
      to={`/${locale}/cases/${item.slug}`}
    >
      <span className="project-num">{item.number}</span>
      <span className="project-main">
        <span className="project-category">
          {item.category[locale]} <i>·</i> {item.year}
        </span>
        <strong>{item.title[locale]}</strong>
        <span className="project-summary">{item.summary[locale]}</span>
      </span>
      <span className="project-arrow" aria-label={copy[locale].readCase}>
        ↗
      </span>
    </Link>
  );
}

function Home() {
  const locale = useLocale();
  const t = copy[locale];
  return (
    <>
      <ScrollAndMeta
        locale={locale}
        title={
          locale === "pt"
            ? "Backend Developer · PHP & Laravel"
            : "Backend Developer · PHP & Laravel"
        }
        description={t.heroText}
      />
      <Header locale={locale} />
      <main id="main">
        <section id="top" className="hero shell">
          <div className="availability">
            <span className="availability-dot" />
            {t.available}
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                {t.heroTop} <span>— 2026</span>
              </p>
              <h1>
                <span>{t.heroOne}</span>
                <span>{t.heroTwo}</span>
                <em>{t.heroThree}</em>
              </h1>
              <p className="hero-description">{t.heroText}</p>
              <div className="hero-actions">
                <Link className="button button-dark" to={`/${locale}#work`}>
                  {t.explore}
                  <span>↘</span>
                </Link>
                <Link className="text-link" to={`/${locale}#contact`}>
                  {t.connect} <span>↗</span>
                </Link>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-header">
                <span>LE / {t.artSystems}</span>
                <span>FIG. 01</span>
              </div>
              <div className="art-grid">
                <span className="art-node node-a">
                  {t.artInput}
                  <br />
                  <b>{t.artContext}</b>
                </span>
                <span className="art-line line-a" />
                <span className="art-node node-b">
                  {t.artProcess}
                  <br />
                  <b>{t.artEngineering}</b>
                </span>
                <span className="art-line line-b" />
                <span className="art-node node-c">
                  {t.artOutput}
                  <br />
                  <b>{t.artSoftware}</b>
                </span>
                <span className="art-orbit" />
              </div>
              <div className="art-footer">
                <span>01 / 03</span>
                <span>{t.artSteps}</span>
              </div>
            </div>
          </div>
          <div className="hero-signals">
            <span>↳ {t.signalOne}</span>
            <span>↳ {t.signalTwo}</span>
            <span>↳ {t.signalThree}</span>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / {t.index}</p>
                <h2>{t.selected}</h2>
              </div>
              <p>{t.selectedLead}</p>
            </div>
            <div className="project-list">
              {cases.map((item) => (
                <ProjectRow key={item.slug} item={item} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="shell experience-grid">
            <div className="experience-intro">
              <p className="eyebrow">02 / {t.aboutEyebrow}</p>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutLead}</p>
              <div className="focus-panel">
                <span>{t.focus} / 2026</span>
                <strong>
                  PHP <i>·</i> Laravel <i>·</i> Backend
                </strong>
              </div>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.place}>
                  <span className="timeline-date">{item.date[locale]}</span>
                  <div>
                    <h3>{item.place}</h3>
                    <p className="timeline-role">{item.role[locale]}</p>
                    <p>{item.text[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section">
          <div className="shell method-grid">
            <div>
              <p className="eyebrow">03 / {t.approachEyebrow}</p>
              <h2>{t.approachTitle}</h2>
            </div>
            <p>{t.approachText}</p>
            <div className="method-marks" aria-hidden="true">
              {t.methodSteps.map((step, i) => (
                <span key={step}>
                  0{i + 1} <b>{step}</b>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-section" id="lab">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / {t.labEyebrow}</p>
                <h2>{t.labTitle}</h2>
              </div>
              <p>{t.labLead}</p>
            </div>
            <div className="lab-grid">
              <a
                href="https://github.com/Luis-edubr/rag-erad-proby"
                target="_blank"
                rel="noreferrer"
                className="lab-item"
              >
                <span className="lab-index">
                  A / {t.labTypes[0]} <b>↗</b>
                </span>
                <h3>RAG-ERAD</h3>
                <p>{t.labRag}</p>
                <span className="lab-tags">Laravel / Qdrant / OpenAI</span>
              </a>
              <a
                href="https://github.com/Luis-edubr/sql-to-seeder"
                target="_blank"
                rel="noreferrer"
                className="lab-item"
              >
                <span className="lab-index">
                  B / {t.labTypes[1]} <b>↗</b>
                </span>
                <h3>SQL to Seeder</h3>
                <p>{t.labSql}</p>
                <span className="lab-tags">TypeScript / CLI / SQL</span>
              </a>
              <div className="lab-item lab-muted">
                <span className="lab-index">C / {t.labTypes[2]}</span>
                <h3>{t.labUmap}</h3>
                <p>{t.labUmapText}</p>
                <span className="lab-tags">React / Leaflet / Routing</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow">05 / {t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactLead}</p>
              <p className="contact-note">{t.noEmail}</p>
            </div>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {t.linkedin}
                <span>↗</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                {t.github}
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function CasePage() {
  const locale = useLocale();
  const { slug } = useParams();
  const item = cases.find((c) => c.slug === slug);
  if (!item) return <NotFound />;
  const t = copy[locale];
  return (
    <>
      <ScrollAndMeta
        locale={locale}
        title={item.title[locale]}
        description={item.summary[locale]}
      />
      <Header locale={locale} />
      <main id="main" className={`case-page tone-${item.tone}`}>
        <section className="case-hero">
          <div className="shell">
            <Link className="back-link" to={`/${locale}#work`}>
              ← {t.back}
            </Link>
            <div className="case-hero-grid">
              <div>
                <p className="eyebrow">
                  {t.cases} / {item.number}{" "}
                  <span>— {item.category[locale]}</span>
                </p>
                <h1>{item.title[locale]}</h1>
                <p className="case-deck">{item.summary[locale]}</p>
              </div>
              <div className="case-stamp">
                <span>{t.caseLabel}</span>
                <strong>{item.number}</strong>
                <small>{item.year}</small>
              </div>
            </div>
          </div>
        </section>
        <div className="shell case-body">
          <aside className="case-aside">
            <span className="aside-label">{t.overview}</span>
            <div>
              <small>{t.role}</small>
              <p>{item.role[locale]}</p>
            </div>
            <div>
              <small>{t.technologies}</small>
              <ul className="stack-list">
                {item.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {item.links && (
              <div>
                <small>{t.links}</small>
                {item.links.map((link) => (
                  <a
                    className="aside-external"
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label[locale]} ↗
                  </a>
                ))}
              </div>
            )}
          </aside>
          <div className="case-content">
            <section>
              <span className="section-num">01 / {t.context}</span>
              <h2>{t.context}</h2>
              <p>{item.context[locale]}</p>
            </section>
            <section>
              <span className="section-num">02 / {t.problem}</span>
              <h2>{t.problem}</h2>
              <p>{item.problem[locale]}</p>
            </section>
            <section>
              <span className="section-num">03 / {t.solution}</span>
              <h2>{t.solution}</h2>
              <p>{item.solution[locale]}</p>
              <div
                className="concept-flow"
                aria-label={
                  locale === "pt"
                    ? "Diagrama conceitual: contexto, decisão, entrega"
                    : "Conceptual diagram: context, decision, delivery"
                }
              >
                <span>{locale === "pt" ? "Contexto" : "Context"}</span>
                <i>→</i>
                <span>{locale === "pt" ? "Decisão" : "Decision"}</span>
                <i>→</i>
                <span>{locale === "pt" ? "Entrega" : "Delivery"}</span>
              </div>
            </section>
            <section>
              <span className="section-num">04 / {t.decisions}</span>
              <h2>{t.decisions}</h2>
              <ol className="decision-list">
                {item.decisions[locale].map((d, i) => (
                  <li key={i}>
                    <span>0{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ol>
            </section>
            <section className="evidence-section">
              <span className="section-num">05 / {t.evidence}</span>
              <h2>{t.evidence}</h2>
              <p>{item.evidence[locale]}</p>
            </section>
            <section>
              <span className="section-num">06 / {t.result}</span>
              <h2>{t.result}</h2>
              <p>{item.result[locale]}</p>
            </section>
            <section>
              <span className="section-num">07 / {t.learning}</span>
              <h2>{t.learning}</h2>
              <p>{item.learning[locale]}</p>
            </section>
            <Link className="next-link" to={`/${locale}#work`}>
              {t.allWork}
              <span>↗</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function NotFound() {
  const locale = useLocale();
  return (
    <>
      <ScrollAndMeta
        locale={locale}
        title="404"
        description={copy[locale].notFound}
      />
      <Header locale={locale} />
      <main id="main" className="not-found shell">
        <span>404 / ERROR</span>
        <h1>{copy[locale].notFound}</h1>
        <Link className="button button-dark" to={`/${locale}`}>
          {copy[locale].goHome} ↗
        </Link>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pt" replace />} />
        <Route
          path="/:lang"
          element={
            <LocaleGuard>
              <Home />
            </LocaleGuard>
          }
        />
        <Route
          path="/:lang/cases/:slug"
          element={
            <LocaleGuard>
              <CasePage />
            </LocaleGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function LocaleGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();
  return lang === "pt" || lang === "en" ? children : <NotFound />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
