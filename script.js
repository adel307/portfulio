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
img.addEventListener('click', () => openLightbox(img));
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// language toggle & alt-text sync
const toggle = document.getElementById('langToggle');
let isAr = false;
function applyLang(){
document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
toggle.textContent = isAr ? 'عربي / EN' : 'EN / عربي';

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
}
toggle.addEventListener('click', () => { isAr = !isAr; applyLang(); });

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
const lang = document.documentElement.getAttribute('dir') === 'rtl' ? 'ar' : 'en';
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

// scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
} else {
revealEls.forEach(el => el.classList.add('is-visible'));
}