





function displayNav() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
  



document.querySelector("[current-year]").textContent =
        new Date().getUTCFullYear();
