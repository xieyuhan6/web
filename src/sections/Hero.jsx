import { Component, lazy, Suspense, useState } from 'react';
import { profile } from '../constants';
const Scene = lazy(()=>import('../components/Models/HeroModels/HeroExperience'));
class SceneBoundary extends Component {
 state = { failed:false };
 static getDerivedStateFromError() { return {failed:true}; }
 render() { return this.state.failed ? <p className="scene-fallback">The 3D scene is unavailable on this device. You can explore all projects below.</p> : this.props.children; }
}
export default function Hero() {
 const [scene,setScene] = useState(false);
 return <section id="hero" className="hero section-shell">
  <div className="hero-copy"><p className="eyebrow">INFORMATION SECURITY · DATA · DEVELOPMENT</p>
   <h1>Turning complex<br/><span>problems</span> into<br/>practical solutions.</h1>
   <p className="hero-intro">Hi, I’m Yuhan Xie.</p>
   <p className="lead">An Information Security master’s student building useful web applications and making security data easier to act on.</p>
   <div className="hero-actions"><a className="button primary" href="#work">Explore my projects <span aria-hidden="true">↘</span></a><a className="button" href={profile.cv} target="_blank" rel="noreferrer">View CV ↗</a></div>
   <p className="location"><span aria-hidden="true">◉</span> {profile.location} · Willing to relocate</p>
  </div>
  <aside className="about-card" aria-labelledby="about-title">
   <div className="scene-frame">{scene ? <SceneBoundary><Suspense fallback={<p className="scene-fallback">Loading the workspace…</p>}><Scene/></Suspense></SceneBoundary> : <div className="scene-poster"><div className="workspace-art" aria-hidden="true"><span className="monitor"><span>&lt;hello /&gt;</span><i/><i/><i/></span><span className="desk"/><span className="plant">✳</span></div><button type="button" className="scene-button" onClick={()=>setScene(true)}>Explore my 3D workspace</button></div>}</div>
   <div className="about-copy"><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Security-minded.<br/>Curious by nature.</h2><p>During my internship at the UN Global Service Centre, I worked on vulnerability data pipelines and Power BI dashboards. Alongside my studies at Stockholm University, I build full-stack projects with React, TypeScript and Python.</p><a className="text-link" href="#experience">Explore my experience <span aria-hidden="true">↗</span></a></div>
  </aside>
 </section>;
}
