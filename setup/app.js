const colors = ["green", "red", "yellow", "blue"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const getRandomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});
