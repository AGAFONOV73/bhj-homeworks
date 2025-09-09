const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

async function loadPoll() {
  try {
    const response = await fetch(
      "https://students.netoservices.ru/nestjs-backend/poll"
    );
    if (!response.ok) throw new Error("Ошибка загрузки опроса");
    const data = await response.json();

    pollTitle.textContent = data.data.title;
    pollAnswers.innerHTML = "";
    data.data.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.className = "poll__answer";
      btn.textContent = answer;
      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
      pollAnswers.appendChild(btn);
    });
  } catch (error) {
    pollTitle.textContent = "Не удалось загрузить опрос.";
    console.error(error);
  }
}
loadPoll();
