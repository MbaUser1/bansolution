'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { whatsappUrl } from '@/lib/site';
const links = [{ href: '/agence', label: 'L’agence' }, { href: '/services', label: 'Expertises' }, { href: '/realisations', label: 'Réalisations' }];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner wrap">
    <Link href="/">
    <Image
        src="/logo.png"
        alt="Logo de mon entreprise"
        width={200}
        height={41}
        className="object-contain"
      /></Link>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Navigation principale">
      {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
      <Link className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>Parlons de votre projet <ArrowUpRight size={16}/></Link>
    </nav>
    <div className="header-actions"><a className="button button-dark button-small" href="/contact" rel="noreferrer">Parlons de votre projet <ArrowUpRight size={16}/></a><button className="menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
