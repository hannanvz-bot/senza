/* ============================================================
   SENZA — script.js
   Default: EN. Order: EN / FR / ES.
   Clears stale lang cache on first load if not en/fr/es.
   ============================================================ */

const i18n = {
  en: {
    nav_home:'Home', nav_gallery:'Gallery', nav_about:'About',
    nav_testi:'Testimonials', nav_contact:'Contact',
    locations:'Texas · Cancún · Mexico City',
    hero_sub:'intimate photography',
    tagline:'Intimate photography\nand erotic visual art.',
    intro_sub:'Texas · Cancún · Mexico City',
    gallery_label:'Gallery',
    about_label:'About SENZA',
    about_title:'VZ',
    about_p1:'SENZA is a space where the body becomes language. Where light constructs silence. Where each image holds what words cannot reach.',
    about_p2:'Every session is an act of mutual trust — conducted with care, absolute discretion, and deep respect for the intimacy of each person. The result is not simply an image. It is a private world, captured forever.',
    about_p3:'Available for exclusive private sessions in Texas (USA), Cancún and Mexico City.',
    testi_label:'Testimonials', testi_note:'— Sample texts —',
    testi1:'"An experience unlike any I had imagined. Everything felt elegant, intimate — and completely mine."',
    testi1_meta:'Private client — Texas',
    testi2:'"I left with images I never thought I could have of myself. The process was respectful, warm, and deeply artistic."',
    testi2_meta:'Private client — New York',
    testi3:'"SENZA is not a photoshoot. It\'s the opportunity to see yourself as you truly are — without filters, without shame."',
    testi3_meta:'Couple — Cancún',
    testi4:'"Une expérience d\'une élégance absolue. VZ sait créer un espace où tout devient possible."',
    testi4_meta:'Private client — Paris',
    contact_label:'Contact',
    contact_headline:'Every image begins\nwith a conversation.',
    label_sessions:'Sessions',
    contact_avail:'Available in Texas (USA), Cancún & Mexico City.',
    contact_privacy:'All sessions are conducted in complete privacy, with absolute respect for the intimacy and consent of every participant.',
    field_name:'Name', field_email:'Email', field_message:'Message',
    btn_send:'Send message', form_ok:'Your message has been sent. Thank you.',
    err_name:'Please enter your name.', err_email:'Please enter a valid email.', err_msg:'Please enter your message.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
  },
  fr: {
    nav_home:'Accueil', nav_gallery:'Galerie', nav_about:'À propos',
    nav_testi:'Témoignages', nav_contact:'Contact',
    locations:'Texas · Cancún · Mexico City',
    hero_sub:'photographie intime',
    tagline:'Photographie intime\net art visuel érotique.',
    intro_sub:'Texas · Cancún · Mexico City',
    gallery_label:'Galerie', about_label:'À propos de SENZA', about_title:'VZ',
    about_p1:'SENZA est un espace où le corps devient langage. Où la lumière construit le silence. Où chaque image garde ce que les mots ne peuvent pas atteindre.',
    about_p2:'Chaque séance est un acte de confiance mutuelle — menée avec soin, discrétion absolue et profond respect pour l\'intimité de chaque personne. Le résultat n\'est pas simplement une image. C\'est un monde privé, capturé pour toujours.',
    about_p3:'Disponible pour des séances privées exclusives au Texas (USA), à Cancún et à Mexico.',
    testi_label:'Témoignages', testi_note:'— Textes exemples —',
    testi1:'"Une expérience différente de tout ce que j\'avais imaginé. Tout était élégant, intime — et complètement à moi."',
    testi1_meta:'Cliente privée — Texas',
    testi2:'"Je suis repartie avec des images que je n\'aurais jamais imaginé avoir de moi-même."',
    testi2_meta:'Cliente privée — New York',
    testi3:'"SENZA n\'est pas une séance photo. C\'est l\'opportunité de se voir tel qu\'on est vraiment."',
    testi3_meta:'Couple — Cancún',
    testi4:'"Une expérience d\'une élégance absolue. VZ sait créer un espace où tout devient possible."',
    testi4_meta:'Cliente privée — Paris',
    contact_label:'Contact',
    contact_headline:'Chaque image commence\npar une conversation.',
    label_sessions:'Séances',
    contact_avail:'Disponible au Texas (USA), à Cancún et à Mexico.',
    contact_privacy:'Toutes les séances sont réalisées dans une confidentialité totale, avec respect absolu de l\'intimité et du consentement de chaque participant.',
    field_name:'Nom', field_email:'E-mail', field_message:'Message',
    btn_send:'Envoyer', form_ok:'Votre message a été envoyé. Merci.',
    err_name:'Veuillez entrer votre nom.', err_email:'Veuillez entrer un e-mail valide.', err_msg:'Veuillez entrer votre message.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
  },
  es: {
    nav_home:'Inicio', nav_gallery:'Galería', nav_about:'Sobre SENZA',
    nav_testi:'Testimonios', nav_contact:'Contacto',
    locations:'Texas · Cancún · CDMX',
    hero_sub:'fotografía íntima',
    tagline:'Fotografía íntima\ny arte visual erótico.',
    intro_sub:'Texas · Cancún · CDMX, México',
    gallery_label:'Galería', about_label:'Sobre SENZA', about_title:'VZ',
    about_p1:'SENZA es un espacio donde el cuerpo se convierte en lenguaje. Donde la luz construye silencio. Donde cada imagen guarda lo que las palabras no alcanzan.',
    about_p2:'Cada sesión es un acto de confianza mutua — conducida con cuidado, discreción absoluta y profundo respeto por la intimidad de cada persona. El resultado no es simplemente una imagen. Es un mundo privado, capturado para siempre.',
    about_p3:'Disponible para sesiones privadas exclusivas en Texas (USA), Cancún y CDMX (México).',
    testi_label:'Testimonios', testi_note:'— Textos de ejemplo —',
    testi1:'"Una experiencia completamente diferente a cualquier cosa que había imaginado. Elegante, íntima — y completamente mía."',
    testi1_meta:'Cliente privada — Texas',
    testi2:'"Salí con imágenes que nunca habría pensado poder tener de mí misma. El proceso fue respetuoso, cálido y profundamente artístico."',
    testi2_meta:'Cliente privada — Nueva York',
    testi3:'"SENZA no es una sesión fotográfica. Es la oportunidad de verte tal como eres — sin filtros, sin vergüenza."',
    testi3_meta:'Pareja — Cancún',
    testi4:'"Une expérience d\'une élégance absolue. VZ sait créer un espace où tout devient possible."',
    testi4_meta:'Cliente — París',
    contact_label:'Contacto',
    contact_headline:'Cada imagen comienza\ncon una conversación.',
    label_sessions:'Sesiones',
    contact_avail:'Disponible en Texas (USA), Cancún y CDMX (México).',
    contact_privacy:'Todas las sesiones se realizan con absoluta privacidad y respeto por la intimidad y el consentimiento de cada participante.',
    field_name:'Nombre', field_email:'Correo electrónico', field_message:'Mensaje',
    btn_send:'Enviar mensaje', form_ok:'Tu mensaje ha sido enviado. Gracias.',
    err_name:'Por favor, escribe tu nombre.', err_email:'Por favor, escribe un correo válido.', err_msg:'Por favor, escribe tu mensaje.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
  }
};

/* Force EN if stale value */
const stored = localStorage.getItem('senza-lang');
let lang = (stored && i18n[stored]) ? stored : 'en';
if (!i18n[lang]) lang = 'en';

let heroIdx = 0, heroTimer = null;
let galleryImgs = [], lbIdx = 0;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ── LANG ── */
function applyLang(l) {
  if (!i18n[l]) l = 'en';
  lang = l;
  localStorage.setItem('senza-lang', l);
  document.documentElement.lang = l;
  const t = i18n[l];
  $$('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] == null) return;
    el.innerHTML = t[k].replace(/\n/g, '<br>');
  });
  $$('.lang-btn,.mobile-lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l));
}

/* ── HERO ── */
function heroGoto(i) {
  const slides = $$('.hero-slide'), dots = $$('.hero-dots li');
  slides[heroIdx].classList.remove('active');
  dots[heroIdx]?.classList.remove('active');
  heroIdx = (i + slides.length) % slides.length;
  slides[heroIdx].classList.add('active');
  dots[heroIdx]?.classList.add('active');
}
function heroPlay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => heroGoto(heroIdx + 1), 9000);
}
function initHero() {
  const slides = $$('.hero-slide');
  if (!slides.length) return;
  const dl = $('.hero-dots');
  if (dl) {
    dl.innerHTML = '';
    slides.forEach((_, i) => {
      const li = document.createElement('li');
      if (!i) li.classList.add('active');
      li.addEventListener('click', () => { heroGoto(i); heroPlay(); });
      dl.appendChild(li);
    });
  }
  slides[0].classList.add('active');
  heroPlay();
  $('.hero-btn-prev')?.addEventListener('click', () => { heroGoto(heroIdx - 1); heroPlay(); });
  $('.hero-btn-next')?.addEventListener('click', () => { heroGoto(heroIdx + 1); heroPlay(); });
}

/* ── HEADER ── */
function initHeader() {
  window.addEventListener('scroll', () =>
    $('#header').classList.toggle('scrolled', scrollY > 50), { passive: true });
}

/* ── MOBILE MENU ── */
function initMobile() {
  const btn = $('.hamburger'), menu = $('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const o = menu.classList.toggle('open');
    btn.classList.toggle('open', o);
    document.body.style.overflow = o ? 'hidden' : '';
  });
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ── LIGHTBOX ── */
function openLb(i) {
  lbIdx = i;
  const img = $('#lightbox .lightbox-img');
  img.src = galleryImgs[i].src;
  img.alt = galleryImgs[i].alt;
  $('#lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  $('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbNav(d) {
  lbIdx = (lbIdx + d + galleryImgs.length) % galleryImgs.length;
  const img = $('#lightbox .lightbox-img');
  img.style.opacity = '0';
  setTimeout(() => { img.src = galleryImgs[lbIdx].src; img.style.opacity = '1'; }, 180);
}
function initLightbox() {
  const items = $$('.gallery-item');
  galleryImgs = items.map(el => ({
    src: el.querySelector('img').src,
    alt: el.querySelector('img').alt
  }));
  items.forEach((el, i) => {
    el.addEventListener('click', () => openLb(i));
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLb(i); });
  });
  $('.lightbox-close')?.addEventListener('click', closeLb);
  $('.lightbox-prev')?.addEventListener('click', () => lbNav(-1));
  $('.lightbox-next')?.addEventListener('click', () => lbNav(1));
  $('#lightbox')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!$('#lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });
  let ts = 0;
  $('#lightbox')?.addEventListener('touchstart', e => { ts = e.touches[0].clientX; }, { passive: true });
  $('#lightbox')?.addEventListener('touchend', e => {
    const d = ts - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) lbNav(d > 0 ? 1 : -1);
  });
}

/* ── FORM ── */
function initForm() {
  const form = $('#contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const check = (name) => {
      const f = form.querySelector(`[name="${name}"]`);
      const w = f?.closest('.form-field');
      const bad = !f?.value.trim() ||
        (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      w?.classList.toggle('error', bad);
      if (bad) ok = false;
    };
    check('name'); check('email'); check('message');
    if (ok) {
      form.style.display = 'none';
      $('.form-success').style.display = 'block';
    }
  });
}

/* ── REVEAL ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.08 });
  $$('.reveal').forEach(el => obs.observe(el));
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  /* Clear stale ES cache — force EN as default */
  const s = localStorage.getItem('senza-lang');
  if (!s || !i18n[s]) localStorage.setItem('senza-lang', 'en');

  applyLang(lang);

  $$('.lang-btn,.mobile-lang-btn').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.lang)));

  initHeader();
  initHero();
  initMobile();
  initLightbox();
  initForm();
  initReveal();
});
