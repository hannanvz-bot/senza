/* ============================================================
   SENZA — intimate photography by VZ
   script.js — Interactividad: slider, galería, idioma, formulario
   ============================================================ */

/* ============================================================
   TRADUCCIONES
   ============================================================ */
const i18n = {
  es: {
    nav_home:         'Inicio',
    nav_gallery:      'Galería',
    nav_about:        'Sobre SENZA',
    nav_testimonials: 'Testimonios',
    nav_contact:      'Contacto',
    tagline:          'Fotografía íntima y arte visual erótico.',
    gallery_label:    'Galería',
    about_label:      'Sobre SENZA',
    about_title:      'VZ',
    about_p1:         'SENZA nace como un espacio de fotografía íntima y arte visual. Un lugar donde el cuerpo se convierte en lenguaje, donde la luz construye silencio y donde cada imagen guarda aquello que las palabras no alcanzan a decir.',
    about_p2:         'La sesión fotográfica es un acto de confianza mutua. Trabajamos con delicadeza, discreción y profundo respeto por la intimidad de cada persona. El resultado no es una imagen. Es una experiencia.',
    about_p3:         'Disponible para sesiones privadas en Texas (USA), Cancún y CDMX (México).',
    testi_label:      'Testimonios',
    testi_note:       '— Textos de ejemplo / Placeholders —',
    testi1_text:      'Una experiencia completamente diferente a cualquier sesión que había imaginado. Todo se sintió elegante, íntimo y natural.',
    testi1_meta:      'Cliente privada — México',
    testi2_text:      'Salí con imágenes que nunca habría pensado que podría tener de mí misma. El proceso fue respetuoso, cálido y profundamente artístico.',
    testi2_meta:      'Cliente privada — Texas',
    testi3_text:      'SENZA no es una sesión fotográfica. Es la oportunidad de verte tal como eres, sin filtros y sin vergüenza.',
    testi3_meta:      'Pareja — Cancún',
    testi4_text:      'Une expérience différente de tout ce que j\'avais imaginé. Tout était élégant, intime et profondément naturel.',
    testi4_meta:      'Cliente privée — France',
    contact_label:    'Contacto',
    contact_headline: 'Cada imagen comienza\ncon una conversación.',
    contact_avail:    'Disponible para sesiones en Texas (USA), Cancún y CDMX (México).',
    contact_privacy:  'Todas las sesiones se realizan de forma completamente privada, con absoluto respeto por la intimidad y el consentimiento de cada participante.',
    field_name:       'Nombre',
    field_email:      'Correo electrónico',
    field_message:    'Mensaje',
    btn_send:         'Enviar mensaje',
    form_success:     'Tu mensaje ha sido enviado. Gracias.',
    err_name:         'Por favor, escribe tu nombre.',
    err_email:        'Por favor, escribe un correo válido.',
    err_message:      'Por favor, escribe tu mensaje.',
    locations:        'Texas, USA · Cancún · CDMX, México',
    footer_copy:      '© 2026 SENZA · intimate photography by VZ',
    footer_ig:        'Instagram',
    footer_wa:        'WhatsApp',
  },
  en: {
    nav_home:         'Home',
    nav_gallery:      'Gallery',
    nav_about:        'About SENZA',
    nav_testimonials: 'Testimonials',
    nav_contact:      'Contact',
    tagline:          'Intimate photography and erotic visual art.',
    gallery_label:    'Gallery',
    about_label:      'About SENZA',
    about_title:      'VZ',
    about_p1:         'SENZA was born as a space for intimate photography and visual art. A place where the body becomes language, where light builds silence, and where each image holds what words cannot reach.',
    about_p2:         'A photo session is an act of mutual trust. We work with care, discretion, and deep respect for each person\'s intimacy. The result is not just an image. It is an experience.',
    about_p3:         'Available for private sessions in Texas (USA), Cancún and Mexico City (Mexico).',
    testi_label:      'Testimonials',
    testi_note:       '— Sample texts / Placeholders —',
    testi1_text:      'An experience unlike any photoshoot I had imagined. Everything felt elegant, intimate and completely natural.',
    testi1_meta:      'Private client — Mexico',
    testi2_text:      'I left with images I never thought I could have of myself. The process was respectful, warm, and deeply artistic.',
    testi2_meta:      'Private client — Texas',
    testi3_text:      'SENZA is not a photo session. It is the opportunity to see yourself as you truly are, without filters, without shame.',
    testi3_meta:      'Couple — Cancún',
    testi4_text:      'An experience unlike anything I had imagined. Everything was elegant, intimate and deeply natural.',
    testi4_meta:      'Private client — France',
    contact_label:    'Contact',
    contact_headline: 'Every image begins\nwith a conversation.',
    contact_avail:    'Available for sessions in Texas (USA), Cancún and Mexico City (Mexico).',
    contact_privacy:  'All sessions are conducted with complete privacy and absolute respect for the intimacy and consent of every participant.',
    field_name:       'Name',
    field_email:      'Email address',
    field_message:    'Message',
    btn_send:         'Send message',
    form_success:     'Your message has been sent. Thank you.',
    err_name:         'Please enter your name.',
    err_email:        'Please enter a valid email.',
    err_message:      'Please enter your message.',
    locations:        'Texas, USA · Cancún · Mexico City',
    footer_copy:      '© 2026 SENZA · intimate photography by VZ',
    footer_ig:        'Instagram',
    footer_wa:        'WhatsApp',
  },
  fr: {
    nav_home:         'Accueil',
    nav_gallery:      'Galerie',
    nav_about:        'À propos de SENZA',
    nav_testimonials: 'Témoignages',
    nav_contact:      'Contact',
    tagline:          'Photographie intime et art visuel érotique.',
    gallery_label:    'Galerie',
    about_label:      'À propos de SENZA',
    about_title:      'VZ',
    about_p1:         'SENZA est né comme un espace de photographie intime et d\'art visuel. Un lieu où le corps devient langage, où la lumière construit le silence et où chaque image garde ce que les mots ne peuvent pas dire.',
    about_p2:         'La séance photographique est un acte de confiance mutuelle. Nous travaillons avec délicatesse, discrétion et profond respect pour l\'intimité de chaque personne. Le résultat n\'est pas seulement une image. C\'est une expérience.',
    about_p3:         'Disponible pour des séances privées au Texas (USA), à Cancún et à Mexico.',
    testi_label:      'Témoignages',
    testi_note:       '— Textes exemples / Placeholders —',
    testi1_text:      'Une expérience différente de tout ce que j\'avais imaginé. Tout était élégant, intime et profondément naturel.',
    testi1_meta:      'Cliente privée — Mexique',
    testi2_text:      'Je suis repartie avec des images que je n\'aurais jamais imaginé avoir de moi-même. Le processus était respectueux, chaleureux et profondément artistique.',
    testi2_meta:      'Cliente privée — Texas',
    testi3_text:      'SENZA n\'est pas une séance photo. C\'est l\'opportunité de vous voir tel que vous êtes vraiment, sans filtres et sans honte.',
    testi3_meta:      'Couple — Cancún',
    testi4_text:      'Une expérience différente de tout ce que j\'avais imaginé. Tout était élégant, intime et profondément naturel.',
    testi4_meta:      'Cliente privée — France',
    contact_label:    'Contact',
    contact_headline: 'Chaque image commence\npar une conversation.',
    contact_avail:    'Disponible pour des séances au Texas (USA), à Cancún et à Mexico.',
    contact_privacy:  'Toutes les séances sont réalisées de manière totalement privée, dans le respect absolu de l\'intimité et du consentement de chaque participant.',
    field_name:       'Nom',
    field_email:      'Adresse e-mail',
    field_message:    'Message',
    btn_send:         'Envoyer le message',
    form_success:     'Votre message a été envoyé. Merci.',
    err_name:         'Veuillez entrer votre nom.',
    err_email:        'Veuillez entrer un e-mail valide.',
    err_message:      'Veuillez entrer votre message.',
    locations:        'Texas, USA · Cancún · Mexico City',
    footer_copy:      '© 2026 SENZA · intimate photography by VZ',
    footer_ig:        'Instagram',
    footer_wa:        'WhatsApp',
  }
};

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */
let currentLang = localStorage.getItem('senza-lang') || 'es';
let heroIndex   = 0;
let heroTimer   = null;
const HERO_DURATION   = 8000;
const HERO_TRANSITION = 2000;
let galleryImages = [];
let lightboxIndex = 0;

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

/* ============================================================
   IDIOMA
   ============================================================ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('senza-lang', lang);
  const t = i18n[lang];
  document.documentElement.lang = lang;

  /* Traducir todos los elementos data-i18n */
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      }
    }
  });

  /* Actualizar botones de idioma */
  $$('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ============================================================
   HERO SLIDER — FADE/CROSSFADE
   ============================================================ */
function heroGoto(idx) {
  const slides = $$('.hero-slide');
  const dots   = $$('.hero-dots li');
  if (!slides.length) return;

  slides[heroIndex].classList.remove('active');
  dots[heroIndex]?.classList.remove('active');

  heroIndex = (idx + slides.length) % slides.length;

  slides[heroIndex].classList.add('active');
  dots[heroIndex]?.classList.add('active');
}

function heroNext() { heroGoto(heroIndex + 1); }
function heroPrev() { heroGoto(heroIndex - 1); }

function heroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(heroNext, HERO_DURATION);
}

function initHero() {
  const slides = $$('.hero-slide');
  if (!slides.length) return;

  /* Dots dinámicos */
  const dotsList = $('.hero-dots');
  if (dotsList) {
    dotsList.innerHTML = '';
    slides.forEach((_, i) => {
      const li = document.createElement('li');
      if (i === 0) li.classList.add('active');
      li.addEventListener('click', () => { heroGoto(i); heroAutoplay(); });
      dotsList.appendChild(li);
    });
  }

  slides[0].classList.add('active');
  heroAutoplay();

  /* Botones */
  $('.hero-btn-prev')?.addEventListener('click', () => { heroPrev(); heroAutoplay(); });
  $('.hero-btn-next')?.addEventListener('click', () => { heroNext(); heroAutoplay(); });
}

/* ============================================================
   HEADER SCROLL
   ============================================================ */
function initHeader() {
  const header = $('#header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const btn  = $('.hamburger');
  const menu = $('.mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Cerrar al hacer click en un link */
  $$('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(idx) {
  lightboxIndex = idx;
  const lb  = $('#lightbox');
  const img = lb.querySelector('.lightbox-img');
  img.src = galleryImages[idx].src;
  img.alt = galleryImages[idx].alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  const img = $('#lightbox .lightbox-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[lightboxIndex].src;
    img.alt = galleryImages[lightboxIndex].alt;
    img.style.opacity = '1';
  }, 150);
}

function initLightbox() {
  const items = $$('.gallery-item');
  galleryImages = items.map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt
  }));

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
    });
  });

  $('.lightbox-close')?.addEventListener('click', closeLightbox);
  $('.lightbox-prev')?.addEventListener('click', () => lightboxNav(-1));
  $('.lightbox-next')?.addEventListener('click', () => lightboxNav(1));

  /* Click fuera cierra */
  $('#lightbox')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  /* Teclado */
  document.addEventListener('keydown', e => {
    if (!$('#lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  /* Touch/swipe */
  let touchStart = 0;
  $('#lightbox')?.addEventListener('touchstart', e => {
    touchStart = e.touches[0].clientX;
  }, { passive: true });
  $('#lightbox')?.addEventListener('touchend', e => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) lightboxNav(diff > 0 ? 1 : -1);
  });
}

/* ============================================================
   FORMULARIO
   ============================================================ */
function initForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = i18n[currentLang];
    let valid = true;

    /* Nombre */
    const nameField = form.querySelector('[name="name"]');
    const nameError = nameField?.closest('.form-field');
    if (!nameField?.value.trim()) {
      nameError?.classList.add('error');
      valid = false;
    } else {
      nameError?.classList.remove('error');
    }

    /* Email */
    const emailField = form.querySelector('[name="email"]');
    const emailError = emailField?.closest('.form-field');
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailField?.value.trim() || !emailRx.test(emailField.value)) {
      emailError?.classList.add('error');
      valid = false;
    } else {
      emailError?.classList.remove('error');
    }

    /* Mensaje */
    const msgField = form.querySelector('[name="message"]');
    const msgError = msgField?.closest('.form-field');
    if (!msgField?.value.trim()) {
      msgError?.classList.add('error');
      valid = false;
    } else {
      msgError?.classList.remove('error');
    }

    if (valid) {
      form.style.display = 'none';
      $('.form-success').style.display = 'block';
      /* Aquí conectar a Formspree / Netlify Forms / backend */
    }
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* Idioma */
  applyLang(currentLang);

  $$('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* Módulos */
  initHeader();
  initHero();
  initMobileMenu();
  initLightbox();
  initForm();
  initReveal();
});
