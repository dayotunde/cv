var rand1 = Math.random();
var rand2 = Math.random();
rand1 = (Math.floor(rand1 *= 6) + 1);
rand2 = (Math.floor(rand2 *= 6) + 1);
console.log(rand1);
console.log(rand2);
if (rand1 == rand2) {
  document.querySelector("h1").textContent = "DRAW";
  console.log("Draw");
} else if (rand1 > rand2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
  console.log("Player 1 wins!");
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  console.log("Player 2 wins!");
}

function dice1() {

  if (rand1 == 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png")
    console.log(1)
  } else if (rand1 == 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png")
    console.log(2);
  } else if (rand1 == 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png")
    console.log(3)
  } else if (rand1 == 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png")
    console.log(4)
  } else if (rand1 == 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png")
    console.log(5)
  } else {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png")
    console.log(6)
  }
}

function dice2() {

  if (rand2 == 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png")
    console.log(1)
  } else if (rand2 == 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png")
    console.log(2);
  } else if (rand2 == 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png")
    console.log(3)
  } else if (rand2 == 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png")
    console.log(4)
  } else if (rand2 == 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png")
    console.log(5)
  } else {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png")
    console.log(6)
  }
}

dice1();
dice2();
