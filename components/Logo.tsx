import Link from 'next/link';
export default function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="BanSolution, accueil">
    <span className="brand-mark" aria-hidden="true"><span className="mark-b">B</span><span className="mark-spark">✳</span></span>
    <span className="brand-word">Ban<span>Solution</span><small>AGENCE DIGITALE</small></span>
  </Link>;
}
