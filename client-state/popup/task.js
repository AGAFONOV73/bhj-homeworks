document.addEventListener("DOMContentLoaded", () => {
  const subscribeModal = document.getElementById("subscribe-modal");
  const closeBtn = document.querySelector(".modal__close");

  if (!localStorage.getItem("modalClosed")) {
    subscribeModal.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => {
    subscribeModal.style.display = "none";
    localStorage.setItem("modalClosed", "true");
  });
});
