/**
 * Handles the language switching logic between English and Polish.
 * Saves the preference to localStorage so it persists on refresh.
 */
function toggleLanguage() {
    const enElements = document.querySelectorAll('.lang-en');
    const plElements = document.querySelectorAll('.lang-pl');
    const langText = document.getElementById('langText');
    
    // Check current state based on one of the Polish elements
    const isPlHidden = plElements[0].classList.contains('hidden');

    if (isPlHidden) {
        // Switch to Polish
        enElements.forEach(el => el.classList.add('hidden'));
        plElements.forEach(el => el.classList.remove('hidden'));
        langText.innerText = 'EN';
        localStorage.setItem('prefLang', 'pl');
        document.documentElement.lang = 'pl';
    } else {
        // Switch to English
        enElements.forEach(el => el.classList.remove('hidden'));
        plElements.forEach(el => el.classList.add('hidden'));
        langText.innerText = 'PL';
        localStorage.setItem('prefLang', 'en');
        document.documentElement.lang = 'en';
    }
}

// Initialize the site with the user's preferred language on load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('prefLang');
    if (savedLang === 'pl') {
        toggleLanguage();
    }
});