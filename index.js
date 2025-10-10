const changeColorBtn = document.getElementById("changeColor");
const addColorBtn = document.getElementById("addColor");
const removeColorBtn = document.getElementById("removeColor");
const colorInput = document.getElementById("colorInput");

const colorContainer = document.querySelector(".color-container");
let colorSelected = document.querySelector(".color-selected");

for (let color of colorContainer.children) {
  addClickColorListener(color);
}

changeColorBtn.addEventListener("click", function(event) {
  if (colorSelected) {
    document.body.style.backgroundColor = getComputedStyle(colorSelected).backgroundColor;
  }
});

addColorBtn.addEventListener("click", function(event) {
  const color = colorInput.value;
  if (color) {
    addColor(color);
  }
  event.preventDefault();
});


colorInput.addEventListener("input", function(event) {
  const color = colorInput.value;
  addColorBtn.disabled = !isValidColor(color);
});

function addColor(color) {
  if (!isValidColor(color)) {
    alert("Color no válido");
    return;
  }
  const div = document.createElement("div");
  div.classList.add("color");
  div.style.backgroundColor = color;
  addClickColorListener(div) ;
  colorContainer.appendChild(div);
}

function addClickColorListener(div) {
  div.addEventListener("click", function() {
    if (colorSelected) {
      colorSelected.classList.remove("color-selected");      
    }
    div.classList.add("color-selected");
    colorSelected = div;
  });
}

function selectNextColor() {
  if (!colorSelected) return;

  let nextColor = colorSelected.nextElementSibling;
  if (!nextColor) {
    nextColor = colorContainer.firstElementChild;
  }

  nextColor.classList.add("color-selected");
  colorContainer.removeChild(colorSelected);
  if (colorContainer.children.length > 0) {
    colorSelected = nextColor;
  } else {
    colorSelected = null;
  }
}

removeColorBtn.addEventListener("click", function(event){
  if (!colorSelected) {
    return;
  };  
  document.body.style.backgroundColor = "white";  
  selectNextColor();
});

function isValidColor(strColor) {
  return CSS.supports("color", strColor);
}


/* ejercicios

2.- Deactivar o activar los botones según sea necesario
7.- Usar radio buttons en lugar de divs. Los radiobuttons deben tener la misma apariencia que los divs.
*/