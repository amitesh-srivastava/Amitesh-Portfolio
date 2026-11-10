import { useEffect, useRef, useState } from "react";
import portrait from "./assets/amitesh.jpg";
import {
  certifications,
  education,
  heroMetrics,
  profile,
  recognition,
  roles,
  skillGroups,
  stories,
} from "./data.js";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-section]")];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.15, 0.4, 0.75] }
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => io.observe(node));
    const backup = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-in"));
    }, 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(backup);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    menuRef.current?.querySelector("a")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  async function copyEmail() {
    const text = profile.email;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = false;
    }
    if (!ok) {
      try {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        ok = document.execCommand("copy");
        area.remove();
      } catch {
        ok = false;
      }
    }
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="rail" aria-hidden="true" />
      <a className="skip" href="#about">
        Skip to content
      </a>

      <header className="nav">
        <a className="brand" href="#top">
          <span className="mark" aria-hidden="true">
            AS
          </span>
          <span className="brand-text">
            <strong>
              Amitesh <span className="last">Srivastava</span>
            </strong>
            <em>Product Owner</em>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-hot nav-cta" href="#contact">
          Contact <Arrow />
        </a>
        <button
          ref={burgerRef}
          type="button"
          className={open ? "burger is-open" : "burger"}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        className={open ? "menu is-open" : "menu"}
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <p className="menu-kicker">Index</p>
        {NAV.map((item, index) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </div>

      <main id="top">
        <section className="hero">
          <p className="hero-watermark" aria-hidden="true">
            AS
          </p>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker rise d1">Product Owner · 5+ years</p>
              <h1 className="rise d2">
                Amitesh
                <br />
                Srivastava
                <span className="slash" aria-hidden="true">
                  /
                </span>
              </h1>
              <p className="deck rise d3">
                AI-powered enterprise products across computer vision, generative AI, SaaS, and
                fintech. Roadmaps, backlog strategy, and Agile delivery, with a record of cutting
                manual work.
              </p>
              <div className="hero-actions rise d4">
                <a className="btn btn-hot" href="#work">
                  Selected work <Arrow />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
              <p className="hero-prior rise d4">
                Previously Product Analyst at CData Software and Product Engineer, Collateral Risk,
                at Societe Generale.
              </p>
            </div>

            <aside className="dossier rise d3" aria-label="Amitesh Srivastava, current role">
              <div className="scan" aria-hidden="true" />
              <figure className="agent">
                <img src={portrait} alt="Portrait of Amitesh Srivastava" />
                <span className="agent-corners" aria-hidden="true" />
                <figcaption>
                  <span>Operator</span>
                  <strong>Amitesh Srivastava</strong>
                </figcaption>
              </figure>
              <div className="dossier-top">
                <span>File / 01</span>
                <span className="status">
                  <i className="status-dot" aria-hidden="true" /> Active
                </span>
              </div>
              <h2>Current role</h2>
              <dl className="file">
                <div>
                  <dt>Role</dt>
                  <dd>Product Owner</dd>
                </div>
                <div>
                  <dt>Company</dt>
                  <dd>Velocitor Solutions</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>North Carolina, US</dd>
                </div>
                <div>
                  <dt>Dates</dt>
                  <dd>Jul 2026 — Present</dd>
                </div>
                <div>
                  <dt>Products</dt>
                  <dd>VelSol Vision, Vision AI, V-Hub</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="wrap">
            <p className="strip-label">VelSol Vision · current product</p>
            <div className="metrics" aria-label="VelSol Vision figures">
              {heroMetrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                  <p className={metric.detail === "Target" ? "metric-detail alert" : "metric-detail"}>
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section" data-section>
          <div className="wrap">
            <header className="section-head">
              <p className="kicker">01 / About</p>
              <h2>The brief</h2>
            </header>
            <div className="about-grid">
              <div>
                <p className="lede">
                  Product owner with 5+ years delivering AI-powered enterprise software across
                  computer vision, generative AI, SaaS, and fintech. I own product roadmaps, backlog
                  strategy, Agile delivery, and cross-functional execution for AI products that use
                  RAG, LLMs, and computer vision.
                </p>
                <p className="body">
                  The through-line is operational efficiency and automation, with a record of
                  multi-million-dollar business impact through customer-centric product development.
                </p>
                <div className="recog">
                  {recognition.map((item) => (
                    <article key={item.title} data-reveal>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="edu-list">
                {education.map((school) => (
                  <article className="edu" key={school.school} data-reveal>
                    <div className="edu-top">
                      <span>{school.place}</span>
                      <span>{school.date}</span>
                    </div>
                    <h3>{school.school}</h3>
                    <p className="edu-degree">{school.degree}</p>
                    <p>{school.detail}</p>
                    {school.result ? <p className="edu-result">{school.result}</p> : null}
                    <p className="edu-note">{school.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" data-section>
          <div className="wrap">
            <header className="section-head">
              <p className="kicker">02 / Experience</p>
              <h2>Field log</h2>
              <p className="section-dek">
                Three roles — Velocitor Solutions, CData Software, and Societe Generale.
              </p>
            </header>
            <div className="roles">
              {roles.map((role) => (
                <article className="role" key={`${role.org}-${role.dates}`} data-reveal>
                  <span className="tick" aria-hidden="true" />
                  <div className="role-when">
                    <p className="role-dates">{role.dates}</p>
                    <p className="role-place">{role.place}</p>
                  </div>
                  <div className="role-body">
                    <h3>{role.title}</h3>
                    <p className="role-org">
                      {role.org}
                      {role.unit ? <span> · {role.unit}</span> : null}
                    </p>
                    {role.callout ? (
                      <div className="callout" aria-label="First month of the new squad">
                        {role.callout.map((item) => (
                          <div key={item.label}>
                            <p>{item.value}</p>
                            <span>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section" data-section>
          <div className="wrap">
            <header className="section-head">
              <p className="kicker">03 / Selected work</p>
              <h2>Impact file</h2>
              <p className="section-dek">
                Products and the numbers on them. Targets, projections, and test-cycle results stay
                labeled.
              </p>
            </header>
            <div className="stories">
              {stories.map((story) => (
                <article
                  className={story.wide ? "story wide" : "story"}
                  key={story.name}
                  data-reveal
                >
                  <div className="story-top">
                    <span>{story.index}</span>
                    <span>{story.domain}</span>
                  </div>
                  <h3>{story.name}</h3>
                  <p className="story-meta">
                    {story.role} · {story.org}
                    {story.flag ? <em className="flag">{story.flag}</em> : null}
                  </p>
                  <p className="story-summary">{story.summary}</p>
                  {story.stats ? (
                    <div className="stat-grid">
                      {story.stats.map((stat) => (
                        <div className="stat" key={`${story.name}-${stat.label}`}>
                          <p className="stat-value">{stat.value}</p>
                          <p className="stat-label">{stat.label}</p>
                          {stat.note ? <p className="note">{stat.note}</p> : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {story.foot ? <p className="story-foot">{story.foot}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section" data-section>
          <div className="wrap">
            <header className="section-head">
              <p className="kicker">04 / Skills</p>
              <h2>Capabilities</h2>
            </header>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill" key={group.name} data-reveal>
                  <h3>{group.name}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="certs" data-reveal>
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <span>{cert.name}</span>
                    <span>{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section" data-section>
          <div className="wrap contact-grid">
            <header className="section-head">
              <p className="kicker">05 / Contact</p>
              <h2>Open a channel</h2>
              <p className="section-dek">
                Product Owner at Velocitor Solutions, North Carolina, US. The lines below are the
                ones on the resume.
              </p>
            </header>
            <div className="channels">
              <article className="channel" data-reveal>
                <p className="kicker">Email</p>
                <a className="channel-main" href={profile.emailHref}>
                  {profile.email}
                </a>
                <button type="button" className="btn btn-ghost" onClick={copyEmail} aria-live="polite">
                  {copied ? "Copied" : "Copy email"}
                </button>
              </article>
              <article className="channel" data-reveal>
                <p className="kicker">Phone</p>
                <a className="channel-main" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </article>
              <article className="channel" data-reveal>
                <p className="kicker">LinkedIn</p>
                <a
                  className="channel-main"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Amitesh Srivastava
                </a>
                <p className="fine">{profile.linkedinLabel}</p>
              </article>
            </div>
          </div>
          <footer className="foot">
            <div className="wrap foot-row">
              <span>Amitesh Srivastava</span>
              <span>Product Owner</span>
              <span>Velocitor Solutions</span>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
