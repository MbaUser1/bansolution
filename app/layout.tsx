import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, whatsappUrl } from '@/lib/site';
export const metadata: Metadata = { title: { default: 'BanSolution — Le digital qui fait avancer vos idées', template: '%s | BanSolution' }, description: siteConfig.description, metadataBase: new URL('https://bansolution.cm'), openGraph: { title: 'BanSolution — Agence digitale', description: siteConfig.description, type: 'website', locale: 'fr_CM' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><Header/><main>{children}</main><Footer/><a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Contacter BanSolution sur WhatsApp"><span className="wa-icon">✆</span><span>Parlons de votre projet</span></a></body></html>; }
