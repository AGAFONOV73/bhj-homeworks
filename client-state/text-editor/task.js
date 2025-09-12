const editor = document.getElementById("editor");

window.onload = () => {
  const savedText = localStorage.getItem("editorContent");
  if (savedText) {
    editor.value = savedText;
  }
};
editor.addEventListener("input", () => {
  const textToSave = editor.value;
  localStorage.setItem("editorContent", textToSave);
});
