import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound(){return <section className="not-found wrap"><span>404 / PAGE INTROUVABLE</span><h1>On a perdu<br/><em>le fil.</em></h1><p>La page que vous cherchez n’est pas disponible. Revenons à l’essentiel.</p><Link href="/" className="button button-orange">Retour à l’accueil <ArrowUpRight size={17}/></Link></section>}
