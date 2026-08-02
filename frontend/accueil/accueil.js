/**
 * accueil.js — Comportements propres à la page d'accueil :
 * - câble le compteur de passagers et la date par défaut du hero
 */
document.addEventListener("DOMContentLoaded", () => {
    initHeroSearchForm();
});

function initHeroSearchForm() {
    const dateInput = document.querySelector("[data-today-default]");
    if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().split("T")[0];
    }

    const paxInput = document.getElementById("search-pax");
    const paxOutput = document.querySelector("[data-pax-value]");
    const decrementBtn = document.querySelector("[data-pax-decrement]");
    const incrementBtn = document.querySelector("[data-pax-increment]");
    if (!paxInput || !paxOutput || !decrementBtn || !incrementBtn) return;

    const PAX_MIN = 1;
    const PAX_MAX = 8;

    const setPax = (value) => {
        const clamped = Math.min(PAX_MAX, Math.max(PAX_MIN, value));
        paxInput.value = clamped;
        paxOutput.textContent = clamped;
        decrementBtn.disabled = clamped === PAX_MIN;
        incrementBtn.disabled = clamped === PAX_MAX;
    };

    decrementBtn.addEventListener("click", () => setPax(Number(paxInput.value) - 1));
    incrementBtn.addEventListener("click", () => setPax(Number(paxInput.value) + 1));
    setPax(Number(paxInput.value));
}
