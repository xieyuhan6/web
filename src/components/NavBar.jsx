import { useEffect, useRef, useState } from 'react';
import { navLinks, profile } from '../constants';
export default function NavBar() {
 const [open,setOpen] = useState(false);
 const toggle = useRef(null);
 useEffect(() => {
  if (!open) return;
  function close(e) { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }
  document.addEventListener('keydown',close);
  return () => document.removeEventListener('keydown',close);
 },[open]);
 return <header className="navbar"><div className="nav-inner">
  <a className="logo" href="#hero" onClick={()=>setOpen(false)}>Yuhan Xie<span aria-hidden="true">.</span></a>
  <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?'Close menu':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button>
  <nav id="main-navigation" aria-label="Main navigation" className={open?'nav-links is-open':'nav-links'}>{navLinks.map(link=><a key={link.link} href={link.link} onClick={()=>setOpen(false)}>{link.name}</a>)}<a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">View CV ↗</a></nav>
 </div></header>;
}
