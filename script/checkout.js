let checkoutContainer = document.querySelector('[checkout-container]')


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


  let checkoutItems = localStorage.getItem('checkout')

  function displayCheckoutItems(){
    checkoutItems.forEach(item => {
      checkoutContainer.innerHTML += `
        <div>
          <p>${item.productName}</p>
        </div>
      `
    })
  }