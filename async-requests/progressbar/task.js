const progressBar = document.getElementById("progress");
const form = document.getElementById("form");
const fileInput = document.getElementById("file");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = fileInput.files[0];
  if (!file) {
    alert("Пожалуйста, выберите файл");
    return;
  }
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.value = percentComplete;
    }
  });
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Файл успешно загружен");
    } else {
      alert("Ошибка загрузки файла");
    }
  };

  xhr.onerror = function () {
    alert("Ошибка при отправке файла");
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  const formData = new FormData();
  formData.append("file", file);

  xhr.send(formData);
});
