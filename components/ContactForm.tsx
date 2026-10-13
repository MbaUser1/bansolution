'use client';
import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/site';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const company = String(data.get('company') || '');
    const email = String(data.get('email') || '');
    const service = String(data.get('service') || 'Autre');
    const message = String(data.get('message') || '');
    const body = `Bonjour BanSolution,\n\nNom : ${name}\nEntreprise : ${company}\nEmail : ${email}\nBesoin : ${service}\n\nProjet :\n${message}`;
    window.open(whatsappUrl(body), '_blank', 'noopener,noreferrer');
    setSent(true);
  }
  return <form className="contact-form" onSubmit={submit}>
    {sent && <div className="form-success"><CheckCircle2 size={18}/> Votre message est prêt dans WhatsApp. Envoyez-le pour finaliser votre demande.</div>}
    <div className="form-grid"><label>Votre nom *<input name="name" placeholder="Ex. : Nadège T." required/></label><label>Votre email *<input name="email" type="email" placeholder="vous@entreprise.com" required/></label></div>
    <div className="form-grid"><label>Entreprise / activité<input name="company" placeholder="Le nom de votre activité"/></label><label>Votre besoin *<select name="service" defaultValue=""><option value="" disabled>Choisir une expertise</option><option>Identité visuelle & branding</option><option>Site web & présence digitale</option><option>Motion design & vidéo</option><option>Communication & réseaux sociaux</option><option>Solutions IA & automatisation</option><option>Autre / besoin de conseil</option></select></label></div>
    <label>Parlez-nous de votre projet *<textarea name="message" rows={5} placeholder="Votre objectif, votre idée, votre délai…" required/></label>
    <div className="form-submit-row"><button type="submit" className="button button-orange">Envoyer via WhatsApp <ArrowUpRight size={17}/></button><span>Vos informations servent uniquement à répondre à votre demande.</span></div>
    <p className="form-note">Email de contact prévu : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
  </form>;
}
