const count = document.querySelector(".counts");

const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

const btns = document.querySelectorAll(".btn");

let amount = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const info = e.currentTarget.classList;

    if (info.contains("increase")) {
      amount++;
      console.log(amount);
    } else if (info.contains("decrease")) {
      amount--;
    } else {
      amount = 0;
    }
    count.innerText = amount;
  });
});
