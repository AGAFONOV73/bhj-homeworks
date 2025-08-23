const cookie = document.getElementById("cookie");
const counterSpan = document.getElementById("clicker__counter");

let clickCount = 0;
let width = cookie.offsetWidth;
let height = cookie.offsetHeight;
let isShrinking = true;

cookie.addEventListener("click", () => {
  clickCount++;
  counterSpan.textContent = clickCount;
  if (isShrinking) {
    width -= 10;
    height -= 10;
    isShrinking = false;
  } else {
    width += 10;
    height += 10;
    isShrinking = true;
  }
  if (height < 50) {
    height = 50;
  }
  if (width < 50) {
    width = 50;
  }
  cookie.style.width = width + "px";
  cookie.style.height = height + "px";
});
