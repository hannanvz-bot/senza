/* ============================================================
   SENZA — script.js  |  EN default · FR · ES
   ============================================================ */

const i18n = {
  en: {
    nav_home:'Home', nav_book:'Book', nav_gallery:'Gallery', nav_about:'About', nav_contact:'Contact',
    home_label:'fine art · intimate photography by VZ',
    home_headline:'Images that hold\nwhat words cannot.',
    home_sub:'USA · Mexico · Spain · South of France',
    home_cta:'View sessions',
    book_label:'Sessions',
    book_headline:'What would you like\nto create?',
    book_cta_line:'Every session begins with a conversation.', book_cta_btn:'Begin yours →',
    s_women:'Women',
    s_women_d:'A private session that celebrates your body, sensuality and confidence — entirely on your terms.',
    s_couples:'Couples',
    s_couples_d:'Intimate portraits that capture the chemistry, desire and tenderness between two people.',
    s_boudoir:'Boudoir',
    s_boudoir_d:'Editorial boudoir photography — artistic, sensual, and completely confidential.',
    s_family:'Family & Maternity',
    s_family_d:'Authentic, emotional portraits of the moments that define your family story.',
    s_corporate:'Corporate & Brand',
    s_corporate_d:'Professional portraits and brand imagery with the same artistic vision and attention to detail.',
    s_cta_text:'Every session is unique.\nLet\'s talk about yours.',
    s_cta_btn:'Get in touch',
    gallery_label:'Gallery',
    gallery_intro:'A selection of work — intimate, editorial, and always private.',
    tab_color:'Color',
    tab_bw:'B&W',
    contact_label:'Contact',
    contact_headline:'Every image begins\nwith a conversation.',
    label_sessions:'Sessions',
    contact_avail:'USA · Mexico · Spain · South of France',
    contact_privacy:'All sessions are conducted in complete privacy, with absolute respect for the intimacy and consent of every participant.',
    field_name:'Name', field_email:'Email', field_session:'Session type', field_message:'Message',
    opt_select:'Select...',
    btn_send:'Send message',
    form_ok:'Your message has been sent. Thank you.',
    err_name:'Please enter your name.',
    err_email:'Please enter a valid email.',
    err_msg:'Please enter your message.',
    intro_body:'VZ creates images that hold what words cannot reach —<br>the quiet power of a body at rest, the charge between two people,<br>the moment before and after everything changes.',
    tagline:'Fine art photography<br>of the intimate and the unseen.',
    video_label:'The Experience', video_cta:'View sessions',
    flip_hint:'Begin a conversation →', ph_name:'Your name', ph_email:'Your email', flip_send:'Send request', flip_ok:'Sent! VZ will reach out soon.',
    footer_copy:'© 2026 SENZA · fine art photography by VZ',
    about_label:'About VZ',
    about_headline:'Art made\nin the space of trust.',
    about_body:'Vanesa Ávila Zubizarreta is a fine art photographer based between Texas, Cancún and Europe. Her work explores intimacy, vulnerability and the beauty of the human form — through portraiture, editorial sessions and long-term visual projects with her clients.',
    about_body2:'Every image SENZA creates begins with a real conversation. Privacy, consent and authorship are non-negotiable. The result is not a service — it is a collaboration.',
    about_cta:'Work with VZ →',
  },
  fr: {
    nav_home:'Accueil', nav_book:'Réserver', nav_gallery:'Galerie', nav_about:'À propos', nav_contact:'Contact',
    home_label:'photographie d\'art · intime par VZ',
    home_headline:'Des images qui gardent\nce que les mots ne peuvent pas.',
    home_sub:'USA · Mexique · Espagne · Sud de la France',
    home_cta:'Voir les séances',
    book_label:'Séances',
    book_headline:'Qu\'aimeriez-vous\ncréer?',
    book_cta_line:'Chaque séance commence par une conversation.', book_cta_btn:'Commencez la vôtre →',
    s_women:'Femmes',
    s_women_d:'Une séance privée qui célèbre votre corps, votre sensualité et votre confiance — entièrement selon vos conditions.',
    s_couples:'Couples',
    s_couples_d:'Portraits intimes qui capturent la chimie, le désir et la tendresse entre deux personnes.',
    s_boudoir:'Boudoir',
    s_boudoir_d:'Photographie boudoir éditoriale — artistique, sensuelle et totalement confidentielle.',
    s_family:'Famille & Maternité',
    s_family_d:'Portraits authentiques et émouvants des moments qui définissent votre histoire familiale.',
    s_corporate:'Corporate & Image de marque',
    s_corporate_d:'Portraits professionnels avec la même vision artistique et la même attention aux détails.',
    s_cta_text:'Chaque séance est unique.\nParlons de la vôtre.',
    s_cta_btn:'Nous contacter',
    gallery_label:'Galerie',
    gallery_intro:'Une sélection de travaux — intimes, éditoriaux et toujours privés.',
    tab_color:'Couleur',
    tab_bw:'N&B',
    contact_label:'Contact',
    contact_headline:'Chaque image commence\npar une conversation.',
    label_sessions:'Séances',
    contact_avail:'USA · Mexique · Espagne · Sud de la France',
    contact_privacy:'Toutes les séances sont réalisées dans une confidentialité totale, avec respect absolu de l\'intimité et du consentement de chaque participant.',
    field_name:'Nom', field_email:'E-mail', field_session:'Type de séance', field_message:'Message',
    opt_select:'Choisir...',
    btn_send:'Envoyer',
    form_ok:'Votre message a été envoyé. Merci.',
    err_name:'Veuillez entrer votre nom.',
    err_email:'Veuillez entrer un e-mail valide.',
    err_msg:'Veuillez entrer votre message.',
    intro_body:'VZ crée des images qui gardent ce que les mots ne peuvent atteindre —<br>la puissance tranquille d\'un corps au repos, la tension entre deux personnes,<br>l\'instant avant et après que tout change.',
    tagline:'Photographie d\'art<br>de l\'intime et de l\'invisible.',
    video_label:'L\'Expérience', video_cta:'Voir les séances',
    flip_hint:'Commencer une conversation →', ph_name:'Votre nom', ph_email:'Votre e-mail', flip_send:'Envoyer', flip_ok:'Envoyé! VZ vous contactera bientôt.',
    footer_copy:'© 2026 SENZA · photographie d\'art par VZ',
    about_label:'À propos de VZ',
    about_headline:'Un art créé\ndans l\'espace de la confiance.',
    about_body:'Vanesa Ávila Zubizarreta est photographe d\'art entre le Texas, Cancún et l\'Europe. Son travail explore l\'intimité, la vulnérabilité et la beauté de la forme humaine — à travers des portraits, des séances éditoriales et des projets visuels sur le long terme.',
    about_body2:'Chaque image SENZA commence par une vraie conversation. La vie privée, le consentement et la paternité sont non négociables. Le résultat n\'est pas un service — c\'est une collaboration.',
    about_cta:'Travailler avec VZ →',
  },
  es: {
    nav_home:'Inicio', nav_book:'Sesiones', nav_gallery:'Galería', nav_about:'Sobre VZ', nav_contact:'Contacto',
    home_label:'fotografía de arte · íntima por VZ',
    home_headline:'Imágenes que guardan\nlo que las palabras no alcanzan.',
    home_sub:'USA · México · España · Sur de Francia',
    home_cta:'Ver sesiones',
    book_label:'Sesiones',
    book_headline:'¿Qué te gustaría\ncrear?',
    book_cta_line:'Cada sesión comienza con una conversación.', book_cta_btn:'Comienza la tuya →',
    s_women:'Mujeres',
    s_women_d:'Una sesión privada que celebra tu cuerpo, sensualidad y confianza — completamente en tus términos.',
    s_couples:'Parejas',
    s_couples_d:'Retratos íntimos que capturan la química, el deseo y la ternura entre dos personas.',
    s_boudoir:'Boudoir',
    s_boudoir_d:'Fotografía boudoir editorial — artística, sensual y completamente confidencial.',
    s_family:'Familia y Maternidad',
    s_family_d:'Retratos auténticos y emotivos de los momentos que definen tu historia familiar.',
    s_corporate:'Corporativo y Marca Personal',
    s_corporate_d:'Retratos profesionales con la misma visión artística y atención al detalle.',
    s_cta_text:'Cada sesión es única.\nHablemos de la tuya.',
    s_cta_btn:'Contáctanos',
    gallery_label:'Galería',
    gallery_intro:'Una selección de trabajo — íntimo, editorial y siempre privado.',
    tab_color:'Color',
    tab_bw:'B&N',
    contact_label:'Contacto',
    contact_headline:'Cada imagen comienza\ncon una conversación.',
    label_sessions:'Sesiones',
    contact_avail:'USA · México · España · Sur de Francia',
    contact_privacy:'Todas las sesiones se realizan con absoluta privacidad y respeto por la intimidad y el consentimiento de cada participante.',
    field_name:'Nombre', field_email:'Correo electrónico', field_session:'Tipo de sesión', field_message:'Mensaje',
    opt_select:'Seleccionar...',
    btn_send:'Enviar mensaje',
    form_ok:'Tu mensaje ha sido enviado. Gracias.',
    err_name:'Por favor, escribe tu nombre.',
    err_email:'Por favor, escribe un correo válido.',
    err_msg:'Por favor, escribe tu mensaje.',
    intro_body:'VZ crea imágenes que guardan lo que las palabras no alcanzan —<br>el poder silencioso de un cuerpo en reposo, la tensión entre dos personas,<br>el instante antes y después de que todo cambia.',
    tagline:'Fotografía de arte<br>de lo íntimo y lo invisible.',
    video_label:'La Experiencia', video_cta:'Ver sesiones',
    flip_hint:'Iniciar una conversación →', ph_name:'Tu nombre', ph_email:'Tu correo', flip_send:'Enviar solicitud', flip_ok:'¡Enviado! VZ te contactará pronto.',
    footer_copy:'© 2026 SENZA · fotografía de arte por VZ',
    about_label:'Sobre VZ',
    about_headline:'Arte creado\nen el espacio de la confianza.',
    about_body:'Vanesa Ávila Zubizarreta es fotógrafa de arte entre Texas, Cancún y Europa. Su trabajo explora la intimidad, la vulnerabilidad y la belleza de la forma humana — a través de retratos, sesiones editoriales y proyectos visuales a largo plazo.',
    about_body2:'Cada imagen SENZA comienza con una conversación real. La privacidad, el consentimiento y la autoría son innegociables. El resultado no es un servicio — es una colaboración.',
    about_cta:'Trabajar con VZ →',
  }
};

const stored = localStorage.getItem('senza-lang');
let lang = (stored && i18n[stored]) ? stored : 'en';
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
    if (el.tagName === 'OPTION') { el.textContent = t[k]; return; }
    el.innerHTML = t[k].replace(/\n/g, '<br>');
  });
  $$('.lang-btn,.mobile-lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l));
}

/* ── HEADER ── */
function initHeader() {
  window.addEventListener('scroll', () =>
    $('#header').classList.toggle('scrolled', scrollY > 40), { passive: true });
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

/* ── PORTRAIT MAGNETIC ── */
function initPortrait() {
  const wrap = $('.home-portrait-wrap');
  if (!wrap) return;
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / r.width  * 12;
    const dy = (e.clientY - r.top  - r.height / 2) / r.height * 12;
    wrap.querySelector('.home-portrait').style.transform =
      `translate(${dx}px,${dy}px)`;
  });
  wrap.addEventListener('mouseleave', () => {
    wrap.querySelector('.home-portrait').style.transform = '';
  });
}

/* ── GALLERY TABS ── */
function initTabs() {
  $$('.gtab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      const current = document.querySelector('.gallery-pane.active');
      const next = document.getElementById('gallery-' + target);
      if (!next || next === current) return;

      // Update tab buttons immediately
      $$('.gtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Fade out current, then fade in next
      if (current) current.classList.remove('active');
      // Small delay so CSS transition on outgoing pane starts before incoming
      setTimeout(() => {
        if (next) {
          next.classList.add('active');
          $$('#gallery-' + target + ' .reveal:not(.visible)').forEach(el => {
            requestAnimationFrame(() => el.classList.add('visible'));
          });
        }
      }, 80);
    });
  });
}

/* ── LIGHTBOX ── */
function openLb(i) {
  lbIdx = i;
  const img = $('#lightbox .lightbox-img');
  img.src = galleryImgs[i].src;
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
  setTimeout(() => { img.src = galleryImgs[lbIdx].src; img.style.opacity = '1'; }, 150);
}
function initLightbox() {
  const allItems = $$('.gallery-item');
  galleryImgs = allItems.map(el => ({ src: el.querySelector('img').src }));
  allItems.forEach((el, i) => {
    el.addEventListener('click', () => openLb(i));
    el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0');
    el.style.cursor = 'pointer';
    el.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openLb(i); });
  });
  $('.lightbox-close')?.addEventListener('click', closeLb);
  $('.lightbox-prev')?.addEventListener('click',  () => lbNav(-1));
  $('.lightbox-next')?.addEventListener('click',  () => lbNav(1));
  $('#lightbox')?.addEventListener('click', e => { if (e.target===e.currentTarget) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!$('#lightbox').classList.contains('open')) return;
    if (e.key==='Escape')      closeLb();
    if (e.key==='ArrowLeft')   lbNav(-1);
    if (e.key==='ArrowRight')  lbNav(1);
  });
  let ts = 0;
  $('#lightbox')?.addEventListener('touchstart', e => { ts = e.touches[0].clientX; }, {passive:true});
  $('#lightbox')?.addEventListener('touchend',   e => {
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
        (name==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
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
  if (!i18n[localStorage.getItem('senza-lang')]) localStorage.setItem('senza-lang', 'en');
  applyLang(lang);
  $$('.lang-btn,.mobile-lang-btn').forEach(b =>
    b.addEventListener('click', () => { applyLang(b.dataset.lang); document.dispatchEvent(new Event('senza:langchange')); }));
  initHeader();
  initMobile();
  initPortrait();
  initTabs();
  initLightbox();
  initForm();
  initReveal();
});
