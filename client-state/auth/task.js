document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signin__form");
  const signinBlock = document.getElementById("signin");
  const welcomeBlock = document.getElementById("welcome");
  const userIdSpan = document.getElementById("user_id");

  const savedUserId = localStorage.getItem("user_id");
  if (savedUserId) {
    userIdSpan.textContent = savedUserId;
    signinBlock.classList.remove("signin_active");
    welcomeBlock.style.display = "block";
  } else {
    signinBlock.classList.add("signin_active");
    welcomeBlock.style.display = "none";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const login = formData.get("login").trim();
    const password = formData.get("password").trim();

    if (!login || !password) {
      alert("Пожалуйста, заполните оба поля");
      return;
    }

    const params = new URLSearchParams();
    params.append("login", login);
    params.append("password", password);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        alert("Ошибка сети или сервера");
        return;
      }

      const data = await response.json();
      if (data.success) {
        const userId = data.user_id || "неизвестный";
        userIdSpan.textContent = userId;

        localStorage.setItem("user_id", userId);

        signinBlock.classList.remove("signin_active");
        welcomeBlock.style.display = "block";
        form.reset();
      } else {
        alert("Неверный логин или пароль");
      }
    } catch (error) {
      alert("Произошла ошибка:" + error.message);
    }
  });
});
