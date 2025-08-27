document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Array.from(tabs).indexOf(tab);

      document.querySelector(".tab.tab_active").classList.remove("tab_active");
      document
        .querySelector(".tab__content.tab__content_active")
        .classList.remove("tab__content_active");
      tab.classList.add("tab_active");
      contents[index].classList.add("tab__content_active");
    });
  });
});
