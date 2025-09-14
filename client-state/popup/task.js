document.addEventListener("DOMContentLoaded", () => {
  const subscribeModal = document.getElementById("subscribe-modal");
  const closeBtn = document.querySelector(".modal__close");

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return undefined;
  }
  if (!getCookie("modalClosed")) {
    subscribeModal.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => {
    subscribeModal.style.display = "none";

    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `modalClosed=true; expires=${expires.toUTCString()}; path=/`;
  });
});
