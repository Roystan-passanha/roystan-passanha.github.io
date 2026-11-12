import Aurora from './components/reactbits/Aurora';
import BlurText from './components/reactbits/BlurText';
import CountUp from './components/reactbits/CountUp';
import FadeContent from './components/reactbits/FadeContent';
import GradientText from './components/reactbits/GradientText';
import SpotlightCard from './components/reactbits/SpotlightCard';
import { education, experience, profile, projects, skills, stats } from './data';

const ACCENT = ['#3b82f6', '#22d3ee', '#6366f1'];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <FadeContent blur duration={0.8} threshold={0.15}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </FadeContent>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="nav__logo">RP</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav__cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <Aurora colorStops={ACCENT} amplitude={1.1} blend={0.55} speed={0.6} height={0.5} opacity={0.85} />
          </div>
          <div className="hero__content">
            <p className="hero__meta">
              <span className="dot" /> {profile.role} · {profile.location}
            </p>
            <h1>
              <BlurText text={profile.name} animateBy="letters" delay={40} direction="bottom" trigger="load" />
            </h1>
            <p className="hero__headline">
              <GradientText colors={['#93c5fd', '#67e8f9', '#a5b4fc']} animationSpeed={6}>
                {profile.headline}
              </GradientText>
            </p>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">See my work</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Highlights">
          {stats.map(s => (
            <div key={s.label} className="stat">
              <span className="stat__value">
                <CountUp to={s.value} duration={1.6} separator="," />
                {s.suffix}
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </section>

        <Section id="work" eyebrow="Selected work" title="Projects with real code behind them">
          <div className="grid">
            {projects.map((p, i) => (
              <FadeContent key={p.repo} delay={i * 0.08} duration={0.7} threshold={0.1}>
                <SpotlightCard className="card" spotlightColor="#3b82f6" intensity={0.18}>
                  <p className="card__tag">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <p className="card__result">{p.result}</p>
                  <a className="card__link" href={`${profile.github}/${p.repo}`} target="_blank" rel="noreferrer">
                    View repository →
                  </a>
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <ol className="timeline">
            {experience.map(e => (
              <li key={e.org + e.when}>
                <FadeContent duration={0.6} threshold={0.2}>
                  <p className="timeline__when">{e.when}</p>
                  <h3>
                    {e.title} <span>· {e.org}</span>
                  </h3>
                  <p>{e.what}</p>
                </FadeContent>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" eyebrow="Toolkit" title="Skills">
          <div className="skills">
            {skills.map(g => (
              <div key={g.group} className="skills__group">
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              {education.map(e => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </Section>

        <section id="contact" className="contact">
          <FadeContent blur duration={0.8}>
            <h2>Let's talk data.</h2>
            <p>I'm based in Dubai. Email is the fastest way to reach me.</p>
            <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>{profile.email}</a>
          </FadeContent>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          Built with React and <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits</a>
        </span>
      </footer>
    </>
  );
}
