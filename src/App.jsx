import React from 'react';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import AIBot from './components/AIBot.jsx';
import ContactForm from './components/ContactForm.jsx';
import Tweaks from './components/Tweaks.jsx';

export default function App() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="grain" id="grain"></div>
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#top" className="brand" data-cursor="hover">
          <div className="brand-mark">R</div>
          <span>Rupam Bhakta</span>
        </a>
        <div className="nav-links">
          <a href="#work" data-cursor="hover">Work</a>
          <a href="#projects" data-cursor="hover">Projects</a>
          <a href="#about" data-cursor="hover">About</a>
          <a href="#contact" data-cursor="hover">Contact</a>
        </div>
        <a href="#contact" className="nav-cta" data-cursor="hover">Let's talk →</a>
      </nav>

      <main id="top">

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-grid"></div>
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Available for select engagements · Q3 2026</span>
          </div>
          <h1>
            <span className="line"><span>I build software</span></span>
            <span className="line"><span>that <em>thinks</em>,</span></span>
            <span className="line"><span>ships, and <span className="accent">scales.</span></span></span>
          </h1>
          <div className="hero-sub">
            <p className="hero-bio">
              I'm <strong>Rupam Bhakta</strong> — a full-stack developer and AI &amp; automation engineer at Micronix System.
              I design <strong>agentic AI systems</strong>, ship <strong>production MERN apps</strong>, and wire up
              automations with n8n that quietly do the work of teams.
            </p>
            <div className="hero-meta">
              <div className="hero-meta-row"><span>ROLE</span><b>Full-Stack · AI · Automation</b></div>
              <div className="hero-meta-row"><span>BASED IN</span><b>Kolkata, India · GMT+5:30</b></div>
              <div className="hero-meta-row"><span>STACK</span><b>MERN · Next.js · n8n · LLMs</b></div>
              <div className="hero-meta-row"><span>SHIPPING</span><b>Since 2023</b></div>
            </div>
          </div>
          <div className="hero-cta-row">
            <a href="#projects" className="btn btn-primary" data-cursor="hover">
              See my work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn btn-ghost" data-cursor="hover">Start a project</a>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              <span>
                AGENTIC AI <i>◆</i> WORKFLOW AUTOMATION <i>◆</i> MERN STACK <i>◆</i> NEXT.JS <i>◆</i> n8n <i>◆</i>
                REAL-TIME SYSTEMS <i>◆</i> RAG &amp; LLM PIPELINES <i>◆</i> RESTful APIs <i>◆</i>
                AGENTIC AI <i>◆</i> WORKFLOW AUTOMATION <i>◆</i> MERN STACK <i>◆</i> NEXT.JS <i>◆</i> n8n <i>◆</i>
                REAL-TIME SYSTEMS <i>◆</i> RAG &amp; LLM PIPELINES <i>◆</i> RESTful APIs <i>◆</i>
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="eyebrow reveal">01 · About</div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>I'm an engineer who likes the messy seam where <strong>autonomous agents</strong>, <strong>real-time systems</strong>, and <strong>everyday product UX</strong> meet.</p>
              <p className="muted">Most of my work is building things that other things use — APIs, agents, automations. The rest is making sure humans actually enjoy the surface that sits on top.</p>
              <p className="muted">Currently shipping at Micronix System. Open to ambitious AI &amp; product collaborations on the side.</p>
            </div>
            <div className="stats reveal">
              <div className="stat"><div className="stat-num">3<span className="accent">+</span></div><div className="stat-label">Years building</div></div>
              <div className="stat"><div className="stat-num">12<span className="accent">+</span></div><div className="stat-label">Shipped projects</div></div>
              <div className="stat"><div className="stat-num">8.2<span className="accent">/10</span></div><div className="stat-label">B.Tech CGPA</div></div>
              <div className="stat"><div className="stat-num">∞</div><div className="stat-label">Coffee → code</div></div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="eyebrow reveal">02 · Capabilities</div>
          <h2 className="section-title reveal">The toolkit.</h2>
          <p className="section-sub reveal">Pick a domain. The chips below morph to show what I actually use in production.</p>
          <Skills />
        </section>

        {/* WORK */}
        <section id="work">
          <div className="eyebrow reveal">03 · Experience</div>
          <h2 className="section-title reveal">Where I've shipped.</h2>
          <p className="section-sub reveal">A short, honest timeline. Hover any row.</p>
          <div className="timeline reveal">
            <div className="exp-row" data-cursor="hover">
              <div className="exp-time">JUL 2025 — PRESENT</div>
              <div>
                <div className="exp-role">Full-Stack &amp; AI Engineer</div>
                <div className="exp-co">Micronix System · Kolkata</div>
                <ul className="exp-points">
                  <li>Designing agentic AI workflows that automate internal ops — n8n + LLM tool-use + custom Node services.</li>
                  <li>Shipping full-stack MERN features end-to-end: schema, API, UI, deployment.</li>
                  <li>Owning state and front-end performance on production dashboards.</li>
                  <li>Code reviews, Git-flow, mentoring juniors on agent design patterns.</li>
                </ul>
              </div>
            </div>
            <div className="exp-row" data-cursor="hover">
              <div className="exp-time">MAR 2025 — JUL 2025</div>
              <div>
                <div className="exp-role">Software Engineer</div>
                <div className="exp-co">ASP OL Media · Jabalpur</div>
                <ul className="exp-points">
                  <li>Built and optimized responsive HTML/CSS email templates for high-volume campaigns.</li>
                  <li>Configured DNS &amp; SMTP for deliverability; ran IP warm-ups and reputation monitoring.</li>
                  <li>Worked across tech &amp; marketing on IP-pool strategy and bounce-rate reduction.</li>
                </ul>
              </div>
            </div>
            <div className="exp-row" data-cursor="hover">
              <div className="exp-time">2021 — 2025</div>
              <div>
                <div className="exp-role">B.Tech, Computer Science &amp; Engineering</div>
                <div className="exp-co">Calcutta Institute of Technology · CGPA 8.2</div>
                <ul className="exp-points">
                  <li>Specialized in distributed systems and applied ML.</li>
                  <li>Built side projects continuously — most are in production today.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="eyebrow reveal">04 · Selected work</div>
          <h2 className="section-title reveal">Things I built. Click <span style={{color:'var(--accent)'}}>play</span> to use them.</h2>
          <p className="section-sub reveal">Every project below opens a working interactive demo — chat in real-time, scan a QR, watch an agent reason. Not screenshots.</p>
          <Projects />
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="eyebrow reveal">05 · Education</div>
          <div className="edu-card reveal">
            <div>
              <div className="edu-degree">B.Tech in Computer Science &amp; Engineering</div>
              <div className="edu-school">Calcutta Institute of Technology · Class of 2025</div>
            </div>
            <div>
              <div className="edu-cgpa">8.2</div>
              <div className="edu-cgpa-label">CGPA / 10</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="eyebrow reveal">06 · Get in touch</div>
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="contact-h">Let's build <em>something</em><br/>that ships.</h2>
              <p className="section-sub">Freelance. Full-time. A weird AI experiment. I read every message and reply within 24 hours.</p>
              <div className="contact-links">
                <a href="mailto:rupambhakta2020@gmail.com" className="contact-link" data-cursor="hover">
                  <span>rupambhakta2020@gmail.com</span><span>EMAIL ↗</span>
                </a>
                <a href="tel:+919144268665" className="contact-link" data-cursor="hover">
                  <span>+91 91442 68665</span><span>PHONE ↗</span>
                </a>
                <a href="https://github.com/rupambhakta" target="_blank" rel="noopener" className="contact-link" data-cursor="hover">
                  <span>github.com/rupambhakta</span><span>GITHUB ↗</span>
                </a>
                <a href="https://linkedin.com/in/rupambhakta" target="_blank" rel="noopener" className="contact-link" data-cursor="hover">
                  <span>linkedin.com/in/rupambhakta</span><span>LINKEDIN ↗</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer>
          <div>© 2026 Rupam Bhakta · Crafted in Kolkata</div>
          <div>v1.0 · Black + Calibri</div>
        </footer>
      </main>

      <AIBot />
      <Tweaks />
    </>
  );
}
