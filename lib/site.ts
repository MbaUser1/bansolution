export const siteConfig = {
  name: 'BanSolution',
  tagline: 'Le digital qui fait avancer vos idées.',
  description: 'BanSolution accompagne les entrepreneurs, commerces et entreprises africaines dans leur développement digital : identité visuelle, création web, motion design et communication numérique.',
  // À personnaliser avant la mise en ligne : remplacez ces coordonnées par les vôtres.
  whatsapp: '237695341649',
  email: 'bonjour@bansolution.cm',
  phoneDisplay: '+237695341649',
  location: 'Bafoussam, Cameroun',
  instagram: '#',
  facebook: 'https://ww.facebook.com/profile.php?id=61594155272903',
  linkedin: '#',
};
export const whatsappUrl = (message = 'Bonjour BanSolution, je souhaite discuter de mon projet.') => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
