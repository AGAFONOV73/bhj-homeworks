document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const valueElem = dropdown.querySelector(".dropdown__value");
    const listElem = dropdown.querySelector(".dropdown__list");

    valueElem.addEventListener("click", () => {
      listElem.classList.toggle("dropdown__list_active");
    });
    listElem.querySelectorAll(".dropdown__item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = item
          .querySelector(".dropdown__link")
          .textContent.trim();
        valueElem.textContent = selectedText;
        listElem.classList.remove("dropdown__list_active");
      });
    });
  });
});
