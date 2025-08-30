const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll(".rotator__case");
  let currentIndex = Array.from(cases).findIndex((c) =>
    c.classList.contains("rotator__case_active")
  );
  if (currentIndex >= 0) {
    rotator.style.color = cases[currentIndex].dataset.color;
  }

  setInterval(() => {
    cases[currentIndex].classList.remove("rotator__case_active");
    currentIndex = (currentIndex + 1) % cases.length;
    cases[currentIndex].classList.add("rotator__case_active");
    rotator.style.color = cases[currentIndex].dataset.color;
  }, parseInt(cases[currentIndex].dataset.speed) || 1000);
});
