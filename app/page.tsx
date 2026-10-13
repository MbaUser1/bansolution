import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Play,
  Sparkles,
  WandSparkles,
  Globe2,
  Palette,
  Clapperboard,
  MessageCircle,
  Code2,
  Bot,
  MoveUpRight,
} from "lucide-react";
import { whatsappUrl } from "@/lib/site";
const services = [
  {
    n: "01",
    title: "Identité visuelle & branding",
    desc: "Donner à votre marque une personnalité claire, cohérente et impossible à confondre.",
    icon: Palette,
    tags: ["Logo & charte", "Supports de communication"],
    id: "branding",
  },
  {
    n: "02",
    title: "Sites web & présence digitale",
    desc: "Des expériences web rapides, rassurantes et pensées pour transformer les visites en demandes.",
    icon: Code2,
    tags: ["Sites vitrines", "Landing pages"],
    id: "web",
  },
  {
    n: "03",
    title: "Motion design & vidéo",
    desc: "Faire passer votre message en quelques secondes grâce à des contenus qui captent l’attention.",
    icon: Clapperboard,
    tags: ["Animation de logo", "Vidéos publicitaires"],
    id: "motion",
  },
  {
    n: "04",
    title: "Communication digitale",
    desc: "Créer du lien avec votre public et donner plus de portée à vos prises de parole.",
    icon: MessageCircle,
    tags: ["Contenus sociaux", "Campagnes digitales"],
    id: "marketing",
  },
];
const projects = [
  {
    type: "IDENTITÉ VISUELLE",
    title: "Une marque qui se remarque.",
    name: "Projet branding",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=85",
    className: "project-wide",
  },
  {
    type: "DIGITAL & WEB",
    title: "Une présence qui inspire confiance.",
    name: "Expérience web",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    type: "CRÉATION DE CONTENU",
    title: "Des idées en mouvement.",
    name: "Campagne créative",
    img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> AGENCE DIGITALE · CAMEROUN
            </div>
            <h1>
              Vos idées méritent
              <br />
              plus que <em>des idées.</em>
            </h1>
            <p className="hero-lead">
              Nous transformons vos ambitions en identités fortes, expériences
              digitales et contenus qui font avancer votre activité.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="button button-orange">
                Donnons vie à votre projet <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/realisations"
                className="button button-outline-light"
              >
                Découvrir nos réalisations <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <span>BS</span>
                <span>✳</span>
                <span>+</span>
              </div>
              <p>
                <strong>À vos côtés, de l’idée au résultat.</strong>
                <br />
                Une approche humaine, des solutions concrètes.
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-label label-top">
              <span className="pulse-dot" /> CRÉATIVITÉ EN ACTION
            </div>
            <div className="visual-main">
              <div className="visual-grid" />
              <div className="visual-sun">
                B<span>✳</span>
              </div>
              <div className="visual-typography">
                MAKE
                <br />
                <span>IT</span> MATTER<span className="orange-period">.</span>
              </div>
              <div className="visual-bottom">
                <span>STRATÉGIE</span>
                <span>DESIGN</span>
                <span>DIGITAL</span>
              </div>
            </div>
            <div className="floating-card card-growth">
              <span className="mini-icon">
                <MoveUpRight size={16} />
              </span>
              <div>
                <small>VOTRE PROCHAINE ÉTAPE</small>
                <strong>Commence ici.</strong>
              </div>
            </div>
            <div className="floating-card card-creative">
              <Sparkles size={17} />
              <span>
                Des idées qui
                <br />
                <b>font la différence.</b>
              </span>
            </div>
            
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span>DU CAMEROUN À L’AFRIQUE</span>
          <span className="hero-bottom-line" />
          <span>STRATÉGIE · CRÉATION · TECHNOLOGIE</span>
          <a href="#intro" aria-label="Défiler vers le contenu">
            <ArrowDown size={17} />
          </a>
        </div>
      </section>
      <section className="intro section-pad" id="intro">
        <div className="wrap intro-grid">
          <div className="section-kicker">
            <span>01 / QUI NOUS SOMMES</span>
            <Asterisk size={24} />
          </div>
          <div className="intro-content">
            <h2>
              Le digital ne devrait pas être compliqué.{" "}
              <span>Il devrait vous faire avancer.</span>
            </h2>
            <div className="intro-bottom">
              <p>
                Chez BanSolution, nous aidons les entrepreneurs et les
                entreprises à prendre leur place dans un monde qui évolue vite.
                Avec de la créativité, les bons outils et une vraie
                compréhension de vos réalités, nous rendons le digital plus
                utile, plus accessible et plus humain.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section className="services-section section-pad">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02 / NOS EXPERTISES</span>
                <Asterisk size={24} />
              </div>
              <h2>
                Les bonnes idées.
                <br />
                <span>Les bons outils.</span>
              </h2>
            </div>
            <p>
              Pas de solutions toutes faites. Nous assemblons les compétences
              adaptées à votre besoin, votre budget et vos objectifs.
            </p>
          </div>
          <div className="services-list">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  href={`/services#${s.id}`}
                  className="service-row"
                  key={s.n}
                >
                  <span className="service-number">{s.n}</span>
                  <span className="service-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="service-main">
                    <strong>{s.title}</strong>
                    <small>{s.desc}</small>
                    <span className="service-tags">
                      {s.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </span>
                  </span>
                  <span className="service-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="services-bottom">
            <span>UNE VISION D’ENSEMBLE, UN SEUL PARTENAIRE.</span>
            <Link href="/services" className="text-link">
              Toutes nos expertises <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="manifesto">
        <div className="wrap manifesto-inner">
          <div className="manifesto-mark">✳</div>
          <p>
            Nous croyons aux marques africaines qui voient grand, aux
            entrepreneurs qui osent et aux idées qui méritent d’être vues.
          </p>
          <span>LA VISION BANSOLUTION</span>
          <div className="manifesto-stamp">
            LOCAL
            <br />
            <b>MINDS.</b>
            <br />
            GLOBAL
            <br />
            AMBITION.
          </div>
        </div>
      </section>
      <section className="work-section section-pad">
        <div className="wrap">
          <div className="section-heading work-heading">
            <div>
              <div className="section-kicker">
                <span>03 / SÉLECTION CRÉATIVE</span>
                <Asterisk size={24} />
              </div>
              <h2>
                Des idées qui prennent
                <br />
                <span>forme.</span>
              </h2>
            </div>
            <div className="work-intro">
              <p>
                Chaque projet commence par une question : comment faire mieux,
                plus clair, plus fort ?
              </p>
              <Link href="/realisations" className="text-link">
                Explorer les réalisations <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project-card ${p.className}`} key={p.name}>
                <div
                  className="project-image"
                  style={{ backgroundImage: `url('${p.img}')` }}
                >
                  <div className="project-image-overlay" />
                  <span className="project-index">0{i + 1} / CONCEPT</span>
                  <span className="project-image-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                  {i === 0 && (
                    <div className="project-art-word">
                      BRAND
                      <br />
                      <span>WITH</span>
                      <br />
                      PURPOSE<span className="orange-period">.</span>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="web-card-float">
                      <span>VOTRE MARQUE</span>
                      <b>
                        Le prochain
                        <br />
                        chapitre commence.
                      </b>
                      <span className="web-card-button">Découvrir ↗</span>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="motion-card-float">
                      <span className="motion-circle">▶</span>
                      <b>
                        MOVE
                        <br />
                        YOUR
                        <br />
                        STORY<span className="orange-period">.</span>
                      </b>
                    </div>
                  )}
                </div>
                <div className="project-meta">
                  <span>{p.type}</span>
                  <h3>{p.title}</h3>
                  <small>{p.name} — visuel d’inspiration / concept</small>
                </div>
              </article>
            ))}
          </div>
          <p className="portfolio-disclaimer">
            Les visuels ci-dessus sont des concepts d’inspiration et non des
            projets clients revendiqués.
          </p>
        </div>
      </section>
      <section className="approach-section section-pad">
        <div className="wrap approach-grid">
          <div className="approach-left">
            <div className="section-kicker">
              <span>04 / NOTRE APPROCHE</span>
              <Asterisk size={24} />
            </div>
            <h2>
              Le bon partenaire.
              <br />
              <span>Pas juste un prestataire.</span>
            </h2>
            <p>
              Votre activité a ses réalités, ses contraintes et ses ambitions.
              Notre travail commence par les comprendre.
            </p>
            <Link href="/agence" className="button button-dark">
              Notre façon de travailler <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="approach-steps">
            <div className="approach-step">
              <span>01</span>
              <div>
                <h3>On vous écoute.</h3>
                <p>
                  On prend le temps de comprendre votre activité, votre public
                  et ce que vous voulez réellement obtenir.
                </p>
              </div>
              <Check size={18} />
            </div>
            <div className="approach-step">
              <span>02</span>
              <div>
                <h3>On construit la bonne réponse.</h3>
                <p>
                  Une proposition claire, pensée pour vos priorités, votre
                  budget et vos délais.
                </p>
              </div>
              <Check size={18} />
            </div>
            <div className="approach-step">
              <span>03</span>
              <div>
                <h3>On crée, on ajuste, on livre.</h3>
                <p>
                  Vous restez impliqué à chaque étape. Pas de jargon inutile,
                  pas de mauvaise surprise.
                </p>
              </div>
              <Check size={18} />
            </div>
            <div className="approach-step">
              <span>04</span>
              <div>
                <h3>On vous aide à avancer.</h3>
                <p>
                  Des conseils simples pour utiliser votre solution et la faire
                  évoluer avec votre activité.
                </p>
              </div>
              <Check size={18} />
            </div>
          </div>
        </div>
      </section>
      <section className="audience-strip">
        <div className="wrap audience-inner">
          <span>POUR CEUX QUI VEULENT ALLER PLUS LOIN</span>
          <div>
            <span>Entrepreneurs</span>
            <i>✳</i>
            <span>PME</span>
            <i>✳</i>
            <span>Commerces</span>
            <i>✳</i>
            <span>Marques</span>
            <i>✳</i>
            <span>Institutions</span>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap cta-inner">
          <div className="cta-star">✳</div>
          <div className="cta-copy">
            <span>VOTRE PROCHAINE ÉTAPE COMMENCE ICI</span>
            <h2>
              Vous avez une idée.
              <br />
              <em>Faisons-en quelque chose.</em>
            </h2>
            <p>
              Un projet en tête, une marque à lancer ou une présence digitale à
              améliorer ? Parlons-en simplement.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="button button-orange">
                Parlons de votre projet <ArrowUpRight size={18} />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="cta-whatsapp"
              >
                Ou contactez-nous sur WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="cta-decoration">
            <span>BS</span>
            <i>✳</i>
            <b>
              LET’S
              <br />
              BUILD.
            </b>
          </div>
        </div>
      </section>
    </>
  );
}
