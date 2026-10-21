import { projects } from '../constants';
export default function ShowcaseSection() {
 return <section id="work" className="section-shell section-space" aria-labelledby="projects-title"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2 id="projects-title">Ideas put into practice.</h2></div><p>Three projects exploring AI, everyday tools and interactive experiences.</p></div>
 <div className="project-grid">{projects.map((p,index)=><article className="project-card" key={p.id}>
  <div className="project-image"><img src={p.image} alt={p.alt} loading="lazy" width="1200" height="750"/><span className="project-number">0{index+1}</span></div>
  <div className="project-body"><p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><ul className="tags" aria-label={`${p.name} technologies`}>{p.tags.map(t=><li key={t}>{t}</li>)}</ul>
  <ul className="project-features">{p.features.map(f=><li key={f}>{f}</li>)}</ul><p className="project-note">{p.note}</p>
  <div className="project-links">{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} live site`}>Live site ↗</a>}<a href={p.source} target="_blank" rel="noreferrer" aria-label={`View ${p.name} repository`}>GitHub ↗</a>{p.related&&<a href={p.related} target="_blank" rel="noreferrer">Resume project ↗</a>}</div></div>
 </article>)}</div></section>;
}
