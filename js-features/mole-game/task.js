const deadSpan = document.getElementById("dead");
const lostSpan = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;
const totalHoles = 9;
let gameOver = false;
function getHole(index) {
    return document.getElementById(`hole${index}`);
  }

for (let i = 1; i <= totalHoles; i++) {
  const hole = getHole(i);
  hole.addEventListener("click", () => {
    if (gameOver) return;

    if (hole.classList.contains("hole_has-mole")) {
      deadCount++;
      deadSpan.textContent = deadCount;

      hole.classList.remove("hole_has-mole");
      
      if (deadCount >= 10) {
        alert("Победа!");
        endGame();
      }
    } else {
      lostCount++;
      lostSpan.textContent = lostCount;
      if (lostCount >= 5) {
        alert("Игра окончена!");
        endGame();
      }
    }
  });
}

function endGame() {
    gameOver = true;
}
