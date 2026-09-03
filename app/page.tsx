import { profile, experience, projects, skills, education } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";
import DynamicHero from "@/components/DynamicHero";
import RevealObserver from "@/components/RevealObserver";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <RevealObserver />
      <header className="nav">
        <a className="brand" href="#top"><span className="brand-mark">SM</span><span>SK / MAHIDUZZAMAN</span></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#resume">CV</a><a href="#contact">Contact</a>
        </nav>
        <div className="nav-tools"><ThemeToggle /><a className="nav-cta" href={profile.resume} download>Download CV <Arrow /></a></div>
      </header>

      <DynamicHero />

      <section id="about" className="section-shell section reveal">
        <div className="section-heading"><span className="section-index">01</span><div><p className="eyebrow">PROFILE</p><h2>Engineering with<br /><em>intelligence.</em></h2></div></div>
        <div className="about-grid"><p className="large-copy">{profile.summary}</p><div className="stat-stack"><div className="stat"><strong>12</strong><span>Indic languages in multimodal project</span></div><div className="stat"><strong>03</strong><span>Featured end-to-end projects</span></div><div className="stat"><strong>01</strong><span>International research internship</span></div></div></div>
      </section>

      <section id="experience" className="section-shell section dark-section reveal">
        <div className="section-heading"><span className="section-index">02</span><div><p className="eyebrow">EXPERIENCE</p><h2>Research meets<br /><em>real systems.</em></h2></div></div>
        {experience.map(item => <article className="experience-card" key={item.company}><div className="experience-date">{item.period}</div><div><p className="card-kicker">{item.company}</p><h3>{item.role}</h3><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div><div className="experience-badge">UCC<br />IE</div></article>)}
      </section>

      <section id="projects" className="section-shell section reveal">
        <div className="section-heading"><span className="section-index">03</span><div><p className="eyebrow">SELECTED WORK</p><h2>Projects that<br /><em>ship ideas.</em></h2></div></div>
        <div className="project-list">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-number">{project.number}</div><div className="project-main"><p className="card-kicker">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div></div><a className="project-link" href={project.github} target="_blank" rel="noreferrer">VIEW GITHUB <Arrow /></a></article>)}</div>
      </section>

      <section id="skills" className="section-shell section dark-section reveal">
        <div className="section-heading"><span className="section-index">04</span><div><p className="eyebrow">TECH STACK</p><h2>The tools behind<br /><em>the models.</em></h2></div></div>
        <div className="skill-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-card" key={group}><span className="skill-no">{group.slice(0, 2).toUpperCase()}</span><h3>{group}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="section-shell section education-section reveal">
        <div className="section-heading"><span className="section-index">05</span><div><p className="eyebrow">EDUCATION</p><h2>Learning the<br /><em>foundations.</em></h2></div></div>
        <div className="timeline">{education.map(item => <div className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.place}</p></div><strong>{item.result}</strong></div>)}</div>
      </section>

      <section id="resume" className="section-shell section resume-section dark-section reveal">
        <div className="section-heading"><span className="section-index">06</span><div><p className="eyebrow">CV</p><h2>See the full<br /><em>story.</em></h2></div></div>
        <div className="resume-layout">
          <div className="resume-copy"><p>My complete CV is available whenever you need it.</p><a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">View CV <Arrow /></a><p className="resume-note">PDF · Opens in a new tab</p></div>
        </div>
      </section>

      <section id="contact" className="contact section-shell section reveal">
        <p className="eyebrow">07 / CONTACT</p><h2>Let&apos;s build something<br /><em>intelligent.</em></h2>
        <p className="contact-copy">I&apos;m interested in AI/ML, GenAI, NLP and MLOps opportunities where I can build practical systems and keep learning.</p>
        <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Email me <Arrow /></a><a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
        <div className="contact-footer"><span>{profile.email}</span><span>{profile.phone}</span><span>© {new Date().getFullYear()} SK MAHIDUZZAMAN</span></div>
      </section>
    </main>
  );
}
