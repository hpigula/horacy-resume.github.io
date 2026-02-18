/**
 * Language switching with accessibility updates.
 * - persists choice in localStorage
 * - updates document.lang and lang button ARIA state
 * - marks decorative icons as aria-hidden
 */
function updateLangButtonState(isPl) {
    const btn = document.getElementById('langBtn');
    if (!btn) return;
    btn.setAttribute('aria-pressed', isPl ? 'true' : 'false');
    btn.setAttribute('aria-label', isPl ? 'Switch to English' : 'Switch to Polish');
}

function setLanguage(lang) {
    const enElements = document.querySelectorAll('.lang-en');
    const plElements = document.querySelectorAll('.lang-pl');
    const langText = document.getElementById('langText');

    if (lang === 'pl') {
        enElements.forEach(el => el.classList.add('hidden'));
        plElements.forEach(el => el.classList.remove('hidden'));
        langText.innerText = 'EN';
        localStorage.setItem('prefLang', 'pl');
        document.documentElement.lang = 'pl';
        updateLangButtonState(true);
    } else {
        enElements.forEach(el => el.classList.remove('hidden'));
        plElements.forEach(el => el.classList.add('hidden'));
        langText.innerText = 'PL';
        localStorage.setItem('prefLang', 'en');
        document.documentElement.lang = 'en';
        updateLangButtonState(false);
    }
}

function toggleLanguage() {
    const plElements = document.querySelectorAll('.lang-pl');
    const isPlHidden = plElements[0].classList.contains('hidden');
    setLanguage(isPlHidden ? 'pl' : 'en');
}

window.addEventListener('DOMContentLoaded', () => {
    // Initialize language from saved preference (or keep default `en`)
    const savedLang = localStorage.getItem('prefLang');
    if (savedLang === 'pl') {
        setLanguage('pl');
    } else {
        setLanguage('en');
    }
});