import { experiences, education } from '../constants';
export default function ExperienceSection() {
 return <section id="experience" className="section-shell section-space" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">EXPERIENCE & EDUCATION / 02</p><h2 id="experience-title">A path across disciplines.</h2></div><p>From multilingual operations to security analytics and software development.</p></div>
 <div className="timeline">{experiences.map(e=><article className="experience-card" key={e.organization}><div className="experience-meta"><p>{e.date}</p><span>{e.location}</span></div><div className="experience-content"><p className="organization">{e.organization}</p><h3>{e.role}</h3><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}</div>
 <div className="education-grid">{education.map(e=><article className="education-card" key={e.degree}><p className="eyebrow">EDUCATION · {e.date}</p><h3>{e.degree}</h3><p className="organization">{e.school}</p><p>{e.detail}</p></article>)}</div></section>;
}
