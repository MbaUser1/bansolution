
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { siteConfig, whatsappUrl } from '@/lib/site';
export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-top"><div className="footer-brand"><Image
          src="/logo1.png"
          alt="Logo de mon entreprise"
          width={200}
          height={41}
          className="object-contain"
        /><p>Des idées ambitieuses.<br/>Des solutions digitales concrètes.</p><a className="footer-mail" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={15}/></a></div>
    <div className="footer-col"><span className="footer-label">Explorer</span><Link href="/agence">L’agence</Link><Link href="/services">Nos expertises</Link><Link href="/realisations">Réalisations</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-col"><span className="footer-label">Expertises</span><Link href="/services#branding">Identité visuelle</Link><Link href="/services#web">Sites web</Link><Link href="/services#motion">Motion design</Link><Link href="/services#marketing">Communication digitale</Link></div>
    <div className="footer-contact"><span className="footer-label">Un projet en tête ?</span><p>Parlons de vos objectifs et construisons la bonne solution ensemble.</p><a className="button button-orange" href={whatsappUrl()} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={17}/></a><small>{siteConfig.location}</small></div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} BanSolution. Tous droits réservés.</span><span>Conçu avec ambition au Cameroun <span className="footer-dot">●</span></span><div className="socials"><a href={siteConfig.instagram} aria-label="Instagram"><Instagram size={16}/></a><a href={siteConfig.facebook} aria-label="Facebook"><Facebook size={16}/></a><a href={siteConfig.linkedin} aria-label="LinkedIn"><Linkedin size={16}/></a></div></div></footer>;
}
