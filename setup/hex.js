const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const randomHexColor = () => {
  return Math.floor(Math.random() * hex.length);
};
btn.addEventListener("click", function () {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[randomHexColor()];
  }
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
