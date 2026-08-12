document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーの開閉とタブ操作の制御
  const body = document.body;
  const ham = document.querySelector(".ham");
  const menu = document.querySelector(".main-navigation");
  function closeMenu() {
    body.classList.remove("open");
    ham.setAttribute("aria-expanded", "false");
    ham.setAttribute("aria-label", "メニューを開く");
    ham.focus();
  }
  function openMenu() {
    body.classList.add("open");
    ham.setAttribute("aria-expanded", "true");
    ham.setAttribute("aria-label", "メニューを閉じる");
  }
  function toggleMenu() {
    body.classList.contains("open") ? closeMenu() : openMenu();
  }

  // ハンバーガーメニューの開閉とaria属性の切り替え
  ham.addEventListener("click", toggleMenu);

  // 開いたmenuのクリック時でメニューの閉会とaria属性の切り替え
  menu.addEventListener("click", closeMenu);

  // ESCキーでメニューを閉じる
  // 視覚上の状態だけでなくaria-expandedも同期する
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  };
  document.addEventListener("keydown", handleKeydown);

  // キーボード操作時に、メニュー最後の次はボタンに戻るようにする
  const focusTrap = document.getElementById("js-focus-trap");
  focusTrap.addEventListener("focus", (e) => {
    ham.focus();
  });

  // コピーライトの西暦を動的に出力する----------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  //アニメーション------------------------------------------

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
});
