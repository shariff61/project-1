const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const rgbRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  return color;
};

btn.addEventListener("click", function () {
  const rgb = rgbRandomColor();
  document.body.style.backgroundColor = rgb;
  color.textContent = rgb;
});
