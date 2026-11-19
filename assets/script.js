// project image lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(img){
lightboxImg.src = img.currentSrc || img.src;
lightboxImg.alt = img.alt || '';
lightbox.classList.add('is-open');
document.body.style.overflow = 'hidden';
}
function closeLightbox(){
lightbox.classList.remove('is-open');
document.body.style.overflow = '';
lightboxImg.src = '';
}

document.querySelectorAll('.proj-thumb img').forEach(img => {
img.setAttribute('tabindex', '0');
img.setAttribute('role', 'button');
img.addEventListener('click', () => openLightbox(img));
img.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); } });
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// language toggle & alt-text sync
const langToggles = document.querySelectorAll('.lang-toggle'); // استهداف كل أزرار اللغة
let isAr = false;
try { isAr = localStorage.getItem('lang') === 'ar'; } catch (_) {}
let currentNoteState = 'idle';   // حالة رسالة الفورم (تُحفظ عند تغيير اللغة)
const pageTitles = { en: 'Adel Al-Boshy — Full-Stack Developer', ar: 'عادل البوشي — مطوّر Full-Stack' };
const menuLabels = {
    en: { open: 'Open menu', close: 'Close menu' },
    ar: { open: 'فتح القائمة', close: 'إغلاق القائمة' }
};
function syncMenuLabel(){
    const t = document.getElementById('menuToggle');
    if (!t) return;
    const l = menuLabels[isAr ? 'ar' : 'en'];
    t.setAttribute('aria-label', t.classList.contains('is-open') ? l.close : l.open);
}

function applyLang(){
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
    
    // تحديث نص جميع أزرار اللغة
    langToggles.forEach(btn => {
        btn.textContent = isAr ? 'عربي / EN' : 'EN / عربي';
    });

    // Update Text Content
    document.querySelectorAll('[data-en]').forEach(el => {
        const val = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        if (val !== null) el.textContent = val;
    });

    // Fix: Dynamic Alt text update for images
    document.querySelectorAll('img[data-alt-en]').forEach(img => {
        const altVal = isAr ? img.getAttribute('data-alt-ar') : img.getAttribute('data-alt-en');
        if (altVal) img.setAttribute('alt', altVal);
    });

    document.title = isAr ? pageTitles.ar : pageTitles.en;
    syncMenuLabel();
    if (typeof setNote === 'function' && formNote) setNote(currentNoteState);
}

// ربط الحدث بكل أزرار اللغة الموجودة في الصفحة
langToggles.forEach(btn => {
    btn.addEventListener('click', () => { 
        isAr = !isAr; 
        try { localStorage.setItem('lang', isAr ? 'ar' : 'en'); } catch (_) {}
        applyLang(); 
    });
});

// About tools: infer each tool's name, then give it a matching glow on hover/focus.
const toolThemes = {
    react: '#61dafb',
    'next.js': '#d7e3f4',
    typescript: '#3178c6',
    'node.js': '#67b84a',
    express: '#a8b7c9',
    mongodb: '#47a248',
    mysql: '#4d9bd6',
    tailwind: '#38bdf8',
    'material ui': '#007fff',
    django: '#4aa3ff',
    fastapi: '#00c7b7'
};

function getToolTheme(toolName) {
    const normalizedName = toolName.trim().toLowerCase();
    return Object.entries(toolThemes).find(([name]) => normalizedName.includes(name))?.[1] || '#8BE8D0';
}

function setToolGlow(chip, isActive) {
    chip.classList.toggle('is-glowing', isActive);
}

document.querySelectorAll('.about .skill-chip').forEach((chip) => {
    const toolName = chip.textContent.trim();
    chip.style.setProperty('--tool-glow', getToolTheme(toolName));

    chip.addEventListener('mouseenter', () => setToolGlow(chip, true));
    chip.addEventListener('mouseleave', () => setToolGlow(chip, false));
});

// portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.proj-card');
filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    cards.forEach(c => {
    c.classList.toggle('hidden', f !== 'all' && c.getAttribute('data-cat') !== f);
    });
});
});

// contact form — Formspree AJAX submit
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('formSubmitBtn');
const formNote = document.getElementById('formNote');
const noteMsgs = {
idle: { en: "I'll get this straight in my inbox and reply within a day.", ar: "هتوصلني الرسالة مباشرة على بريدي وهرد خلال يوم واحد." },
sending: { en: "Sending…", ar: "جارِ الإرسال…" },
success: { en: "Sent! Thanks — I'll reply within a day.", ar: "تم الإرسال! شكرًا — هرد عليك خلال يوم واحد." },
error: { en: "Something went wrong — please email me directly instead.", ar: "حصل خطأ — من فضلك راسلني مباشرة على البريد بدلاً من ذلك." }
};
function setNote(state){
currentNoteState = state;
const lang = isAr ? 'ar' : 'en';
formNote.textContent = noteMsgs[state][lang];
}
if (contactForm) {
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btnLabelBefore = submitBtn.textContent;
    submitBtn.disabled = true;
    setNote('sending');
    try {
    const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
        setNote('success');
        contactForm.reset();
    } else {
        setNote('error');
    }
    } catch (err) {
    setNote('error');
    } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = btnLabelBefore;
    }
});
}

// Slow text reveal and scroll entrance motion
const textRevealSelector = [
    '.headline', '.hero p.sub', '.avail', '.stat-num', '.stat-label',
    '.section-title', '.section-sub', '.about-body p',
    '.resume-col h3', '.resume-col li', '.service-card h3', '.service-card p',
    '.proj-body h3', '.proj-body p', '.contact-info-card h3',
    '.contact-info-card p', '.contact-row', 'label', '.form-note',
    '.footer-inner'
].join(', ');

document.querySelectorAll(textRevealSelector).forEach((el, index) => {
    el.classList.add('text-reveal');
    el.style.setProperty('--reveal-delay', `${(index % 6) * 90}ms`);
});

const revealEls = document.querySelectorAll('[data-reveal], .text-reveal');
if ('IntersectionObserver' in window) {
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });
revealEls.forEach(el => io.observe(el));
} else {
revealEls.forEach(el => el.classList.add('is-visible'));
}

(function(){
  const menu   = document.getElementById('mobileMenu');
  const toggle = document.getElementById('menuToggle');
  const body   = document.body;

  function openMenu(){
    menu.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
    syncMenuLabel();
    const closeBtn = menu.querySelector('.menu-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu(){
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    syncMenuLabel();
  }

  toggle.addEventListener('click', () => {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('[data-close-menu], a').forEach(el => {
    el.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  // أغلق القائمة تلقائيًا لو اتحولت الشاشة لحجم ديسكتوب (تدوير/تكبير)
  window.matchMedia('(min-width: 1025px)').addEventListener('change', e => {
    if (e.matches && menu.classList.contains('is-open')) closeMenu();
  });
})();

// طبّق اللغة المحفوظة عند التحميل (في آخر الملف عشان كل العناصر تكون معرّفة)
if (isAr) applyLang();