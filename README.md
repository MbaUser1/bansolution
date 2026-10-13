# BanSolution — site Next.js

Site vitrine multi-pages pour BanSolution, agence digitale. Design responsive en bleu `#112B51` et orange `#FC5400`, inspiré par les codes des agences créatives africaines sans reprendre le contenu, les visuels ou la marque de Matanga Agency.

## Pages
- `/` — accueil
- `/agence` — histoire, vision, valeurs et méthode
- `/services` — expertises et détails des offres
- `/realisations` — galerie de concepts (clairement identifiés comme concepts, pas comme des missions clients)
- `/contact` — formulaire qui prépare un message WhatsApp

## Prérequis
- Node.js 20.9 ou plus récent
- npm

## Lancer en local
```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:3000.

## Vérifier la compilation de production
```bash
npm run build
npm start
```

## Personnalisation obligatoire avant publication
Ouvrir `lib/site.ts` et remplacer :
- `whatsapp: '237600000000'` par le numéro WhatsApp de BanSolution au format international, chiffres seulement ;
- `email: 'bonjour@bansolution.cm'` par l'adresse réellement active ;
- `phoneDisplay`, `location`, et les liens sociaux.

Le nom de domaine `bansolution.cm` dans `app/layout.tsx` est une valeur prévue par défaut : remplacez-la si vous utilisez un autre domaine. Les images de la galerie proviennent d'Unsplash et servent de visuels de démonstration. Remplacez-les par vos créations autorisées dès que votre portfolio sera prêt. Les liens de réseaux sociaux sont des placeholders.

## Formulaire de contact
Le formulaire ne stocke pas de données et n'envoie pas d'e-mail par lui-même : il ouvre WhatsApp avec un message prérempli. Configurez le vrai numéro dans `lib/site.ts`. Pour un formulaire serveur, branchez ensuite un service d'e-mail ou une API sécurisée.

## Déploiement conseillé
Vercel est le chemin le plus simple pour déployer un projet Next.js. Importez le dépôt Git, vérifiez les paramètres de build et associez votre domaine.
