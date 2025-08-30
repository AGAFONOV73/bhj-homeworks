function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function onScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("reveal_active");
    } else {
    }
  });
}

window.addEventListener("scroll", onScroll);

window.addEventListener("load", onScroll);
