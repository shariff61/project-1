const hsl = [0, 1, 2, 3, 5, 6, 4, 7, 8, 9];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const randomHsl = () => {
  return Math.floor(Math.random() * hsl.length);
};
btn.addEventListener("click", function () {
  let hslColor = "#";
  for (let i = 0; i < 4; i++) {
    hslColor += hsl[randomHsl()];
  }
  document.body.style.backgroundColor = hslColor;
  color.textContent = hslColor;
});
