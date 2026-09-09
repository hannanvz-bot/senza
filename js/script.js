/* ============================================================
   SENZA — script.js  |  EN default · FR · ES
   ============================================================ */

const i18n = {
  en: {
    nav_home:'Home', nav_book:'Book', nav_gallery:'Gallery', nav_contact:'Contact',
    home_label:'intimate photography by VZ',
    home_headline:'Book your\ntransformation.',
    home_sub:'USA · Mexico · Spain · South of France',
    home_cta:'Reserve a session',
    book_label:'Sessions',
    book_headline:'What would you like\nto create?',
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
    video_label:'The Experience', video_cta:'Book your session now',
    flip_hint:'Book this session →', ph_name:'Your name', ph_email:'Your email', flip_send:'Send request', flip_ok:'Sent! VZ will reach out soon.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
  },
  fr: {
    nav_home:'Accueil', nav_book:'Réserver', nav_gallery:'Galerie', nav_contact:'Contact',
    home_label:'photographie intime par VZ',
    home_headline:'Réservez votre\ntransformation.',
    home_sub:'USA · Mexique · Espagne · Sud de la France',
    home_cta:'Réserver une séance',
    book_label:'Séances',
    book_headline:'Qu\'aimeriez-vous\ncréer?',
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
    video_label:'L\'Expérience', video_cta:'Réservez votre séance maintenant',
    flip_hint:'Réserver cette séance →', ph_name:'Votre nom', ph_email:'Votre e-mail', flip_send:'Envoyer', flip_ok:'Envoyé! VZ vous contactera bientôt.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
  },
  es: {
    nav_home:'Inicio', nav_book:'Reservar', nav_gallery:'Galería', nav_contact:'Contacto',
    home_label:'fotografía íntima por VZ',
    home_headline:'Reserva tu\ntransformación.',
    home_sub:'USA · México · España · Sur de Francia',
    home_cta:'Reservar sesión',
    book_label:'Sesiones',
    book_headline:'¿Qué te gustaría\ncrear?',
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
    video_label:'La Experiencia', video_cta:'Reserva tu sesión ahora',
    flip_hint:'Reservar esta sesión →', ph_name:'Tu nombre', ph_email:'Tu correo', flip_send:'Enviar solicitud', flip_ok:'¡Enviado! VZ te contactará pronto.',
    footer_copy:'© 2026 SENZA · intimate photography by VZ',
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
      $$('.gtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $$('.gallery-pane').forEach(p => p.classList.remove('active'));
      const pane = document.getElementById('gallery-' + target);
      if (pane) {
        pane.classList.add('active');
        $$('#gallery-' + target + ' .reveal:not(.visible)').forEach(el => {
          requestAnimationFrame(() => el.classList.add('visible'));
        });
      }
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
  const items = $$('.gallery-item');
  galleryImgs = items.map(el => ({ src: el.querySelector('img').src }));
  items.forEach((el, i) => {
    el.addEventListener('click', () => openLb(i));
    el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0');
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


/* ── FLIP CARDS — submit to Formspree + WhatsApp notification ── */
function initFlipCards() {
  /* Mobile: click to flip */
  document.querySelectorAll('.flip-card:not(.flip-card--cta)').forEach(card => {
    card.addEventListener('click', function(e) {
      if (window.innerWidth <= 1024 && !e.target.closest('form') && !e.target.closest('button')) {
        this.classList.toggle('flipped');
      }
    });
  });

  /* Form submit — Formspree + WhatsApp link */
  document.querySelectorAll('.flip-form').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const session = this.dataset.session;
      const name    = this.querySelector('[name="name"]').value.trim();
      const email   = this.querySelector('[name="email"]').value.trim();
      if (!name || !email) return;

      const ok = this.closest('.flip-back').querySelector('.flip-ok');

      try {
        /* Send to Formspree → arrives at senzaphotography@outlook.com */
        await fetch('https://formspree.io/f/xdkozgkw', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name, email,
            session_type: session,
            _subject: `SENZA — New ${session} booking request from ${name}`,
            message: `Session: ${session}\nName: ${name}\nEmail: ${email}`
          })
        });

        /* Show success */
        this.style.display = 'none';
        ok.style.display = 'block';

        /* Open WhatsApp MX with pre-filled message */
        const msg = encodeURIComponent(
          `Hi VZ! I just requested a *${session}* session on SENZA.\nName: ${name}\nEmail: ${email}`
        );
        setTimeout(() => {
          window.open(`https://wa.me/529981552555?text=${msg}`, '_blank');
        }, 800);

      } catch(err) {
        ok.textContent = 'Something went wrong. Please try again.';
        ok.style.display = 'block';
      }
    });
  });

  /* Translate placeholders */
  function updatePlaceholders() {
    const t = i18n[lang];
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.dataset.i18nPh;
      if (t[k]) el.placeholder = t[k];
    });
  }

  /* Hook into language changes */
  const origApply = window._applyLangOrig || applyLang;
  window._applyLangOrig = origApply;
  const origRef = applyLang;
  updatePlaceholders();
  document.addEventListener('senza:langchange', updatePlaceholders);
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
  initFlipCards();
  initReveal();
});
