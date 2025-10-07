const btn = document.getElementById("kk");

btn.onclick = function(event) {
  event.target.innerText = "Clicked";
  //this.innerText = "Clicked";
  //btn.innerText = "Clicked";  
}