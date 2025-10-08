const btn = document.getElementById("btn");

const colors = document.querySelectorAll("div.color-container > div.color");
let colorSelected = document.querySelector(".color-selected");

for (let color of colors) {
  color.addEventListener("click", function() {
    if (colorSelected) {
      colorSelected.classList.remove("color-selected");
    }
    color.classList.add("color-selected");
    colorSelected = color;
  });
}

btn.addEventListener("click", function(event) {
  if (colorSelected) {
    document.body.style.backgroundColor = getComputedStyle(colorSelected).backgroundColor;
  }
});  