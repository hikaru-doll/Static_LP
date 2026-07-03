const body = document.body;
const ham = document.querySelector(".ham");
const menu = document.querySelector(".main-navigation");
ham.addEventListener("click", () => {
  body.classList.toggle("open");
});
menu.addEventListener("click", () => {
  body.classList.remove("open");
});
// メニュー内のみでフォーカスするように
let focusTrap = document.getElementById("js-focus-trap");
focusTrap.addEventListener("focus", (e) => {
  ham.focus();
});
// メニューをESCキーで閉じれるように
function openMenu() {
  body.classList.add("open");
  ham.setAttribute("aria-expanded", "true");
}
function closeMenu() {
  body.classList.remove("open");
  ham.setAttribute("aria-expanded", "false");
  ham.focus(); // ← これ超重要
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("open")) {
    e.preventDefault();
    closeMenu();
  }
});
// アニメーション-----------------------------------------

// section reason のアニメーション
const slide = document.querySelectorAll(".slideItem");
let observerSlide = new IntersectionObserver(callbackSlide);
slide.forEach((value) => {
  observerSlide.observe(value);
});
function callbackSlide(entries) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("sliding");
  }
}
// section voice のアニメーション
const pop = document.querySelectorAll(".popItem");
let observerPop = new IntersectionObserver(callbackPop);
pop.forEach((value) => {
  observerPop.observe(value);
});
function callbackPop(entries) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("pop");
  }
}
