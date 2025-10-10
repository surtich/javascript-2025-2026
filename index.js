const changeColorBtn = document.getElementById("changeColor");
const addColorBtn = document.getElementById("addColor");
const removeColorBtn = document.getElementById("removeColor");
const colorInput = document.getElementById("colorInput");

const colorContainer = document.querySelector(".color-container");
const colors = colorContainer.querySelectorAll("div.color");
let colorSelected = document.querySelector(".color-selected");

for (let color of colors) {
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


removeColorBtn.addEventListener("click", function(event){
   if (!colorSelected) {
    return;
   };

    //const colorValue=window.getComputedStyle(colorToRemove).backgroundColor;
    //const bodyColor = window.getComputedStyle(document.body).backgroundColor;
 
    colorContainer.removeChild(colorSelected);
});

function isValidColor(strColor) {
  return CSS.supports("color", strColor);
}


/* ejercicios

2.- Deactivar o activar los botones según sea necesario
3.- Crear el botón borrar color. Que borre el color seleccionado
4.- Cuando se borre un color, si ese es el color seleccionado, se debe seleccionar el siguiente.
5.- Cuando se borre un color, si ese es el color es el de fondo, se debe poner el fondo en blanco.
7.- Usar radio buttons en lugar de divs. Los radiobuttons deben tener la misma apariencia que los divs.
*/