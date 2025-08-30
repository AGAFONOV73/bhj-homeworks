const fontSizeElements = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

fontSizeElements.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    const isActive = this.classList.contains("font-sixe_active");

    fontSizeElements.forEach((el) => el.classList.remove("font-size_active"));
    this.classList.add("font-size_active");
    book.classList.remove("font-size_small", "font-size_big");

    if (!isActive) {
      this.classList.add("font-size_active");

      const size = this.dataset.size;
      if (size === "small") {
        book.classList.add("font-size_small");
      } else if (size === "big") {
        book.classList.add("font-size_big");
      }
    }
  });
});
