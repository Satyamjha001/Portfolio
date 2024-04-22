// JavaScript function to toggle the visibility of the menu
function toggleMenu() {
    var x = document.querySelector(".navbar .right");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  