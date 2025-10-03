const slides = document.querySelectorAll('.slide');
const navBtns = document.querySelectorAll('.nav-btn');
const nextBtns = document.querySelectorAll('.arrow.next');
const prevBtns = document.querySelectorAll('.arrow.prev');
let current = 0;
function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
    navBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
    });
    current = idx;
}
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let idx = (current + 1) % slides.length;
        showSlide(idx);
    });
});
prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let idx = (current - 1 + slides.length) % slides.length;
        showSlide(idx);
    });
});
navBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => showSlide(i));
});
showSlide(0);