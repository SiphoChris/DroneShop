let wrapper = document.querySelector(".products");

let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          productName: "DJI Mavic Air 2",
          productDescription:
            "Compact drone with 4K camera and advanced obstacle avoidance.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image1.jpg",
        },
        {
          id: 2,
          productName: "Autel Robotics EVO II",
          productDescription:
            "8K video, 40-minute flight time, superior image quality.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image2.jpg",
        },
        {
          id: 3,
          productName: "Parrot Anafi",
          productDescription:
            "Lightweight, 4K HDR camera, foldable design for portability.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image10.jpg",
        },
        {
          id: 4,
          productName: "DJI Phantom 4 Pro V2.0",
          productDescription:
            "Professional-grade drone with 1-inch sensor, precise controls.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image4.jpg",
        },
        {
          id: 5,
          productName: "Skydio 2",
          productDescription:
            "Autonomous flying, advanced AI, incredible obstacle avoidance capabilities.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image5.jpg",
        },
        {
          id: 6,
          productName: "DJI Inspire 2",
          productDescription:
            "High-end drone for filmmakers, dual-operator control, 5.2K video.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image6.jpg",
        },
        {
          id: 7,
          productName: "Holy Stone HS720E",
          productDescription:
            "Affordable drone with 4K camera, GPS, and image stabilization.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image7.jpg",
        },
        {
          id: 8,
          productName: "Yuneec Typhoon H Plus",
          productDescription:
            "Hexacopter, 4K camera, 360-degree gimbal, stable flight.",
          productImageUrl:
            "https://siphochris.github.io/images/images/DroneZone/image8.jpg",
        },
      ])
    );

function getProducts() {
  try {
    let productsCatalogue = products;
    productsCatalogue.forEach((product) => {
      wrapper.innerHTML += `
                <div class="card">
                <img src="${product.productImageUrl}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.productDescription}</p>
                </div>
                <div><button id="cart">Add to cart<button></div>
                </div>`;
    });
  } catch (e) {
    wrapper.textContent = "Please contact our admin at admin@gmail.com";
  }
}
getProducts();

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
