const loader = document.getElementById("loader");
const items = document.getElementById("items");

function createItem(code, value, currency) {
  const item = document.createElement("div");
  item.className = "item";

  const codeDiv = document.createElement("div");
  codeDiv.className = "item__code";
  codeDiv.textContent = code;

  const valueDiv = document.createElement("div");
  valueDiv.className = "item__value";
  valueDiv.textContent = value;

  const currencyDiv = document.createElement("div");
  currencyDiv.className = "item__currency";
  currencyDiv.textContent = currency;

  item.appendChild(codeDiv);
  item.appendChild(valueDiv);
  item.appendChild(currencyDiv);

  return item;
}

function loadCurrency() {
  loader.classList.add("loader_active");

  fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ошибка сети: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      items.innerHTML = "";
      const valutes = data.response.Valute;

      for (const key in valutes) {
        if (valutes.hasOwnProperty(key)) {
          const valute = valutes[key];
          const item = createItem(valute.CharCode, valute.Value, "рубль");
          items.appendChild(item);
        }
      }
    })
    .catch((error) => {
      items.innerHTML = `<div class="error">Ошибка загрузки данных: ${error.message}</div>`;
    })
    .finally(() => {
      loader.classList.remove("loader_active");
    });
}
window.addEventListener("DOMContentLoaded", loadCurrency);
