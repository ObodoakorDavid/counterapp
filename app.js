/** @format */

const counter = document.getElementById("num");

let btn = document.getElementsByClassName("btn");

let zero = document.getElementsByTagName("h2")[0];

document.body.style.backgroundColor = "yellow";

// console.log(zero);

let score = 0;

btn[0].addEventListener("click", () => {
  score--;
  zero.textContent = score;
    if (score < 0) {
      document.body.style.backgroundColor = "red";
    } else if (score == 0) {
      document.body.style.backgroundColor = "yellow";
    }

  // switch (score) {
  //   case 0:
  //     document.body.style.backgroundColor = "yellow";
  //     break;
  //   default:
  //     document.body.style.backgroundColor = "red";
  //     break;
  // }
});

btn[1].addEventListener("click", () => {
  score = 0;
  zero.textContent = score;

  if (score == 0) {
    document.body.style.backgroundColor = "yellow";
  }
});

btn[2].addEventListener("click", () => {
  score++;
  zero.textContent = score;
  if (score > 0) {
    document.body.style.backgroundColor = "green";
  } else if (score == 0) {
    document.body.style.backgroundColor = "yellow";
  }
});
