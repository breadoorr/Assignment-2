// Secondary script file

// if the loaded page is the main one
if (window.location.href.indexOf("index.php") > -1) {
  // Wait for the DOM content to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Slider navigation buttons functioning
    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");

    // if one of the buttons is pressed
    if (nextButton && prevButton) {
      // navigation to a next picture
      nextButton.onclick = function () {
        let lists = document.querySelectorAll(".item");
        document.getElementById("slide").appendChild(lists[0]);
      };

      // navigating to a previous picture
      prevButton.onclick = function () {
        let lists = document.querySelectorAll(".item");
        document.getElementById("slide").prepend(lists[lists.length - 1]);
      };
    }

    //see more element in the bestsellers section is pressed
    let see = document.getElementsByClassName("see");
    for (let i = 0; i < see.length; i++) {
      see[i].addEventListener("click", function () {
        window.location.href = "Products.php";
      });
    }
  });
}

// function for the burger menu (when it appears on the screen)
function menu() {
  const nav = document.getElementById("navbar");
  const bar = document.getElementById("navbar-toggle");
  // opening the menu
  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("act");
    });
  }
}

// closing the menu
function cl() {
  const nav = document.getElementById("navbar");
  const closed = document.getElementById("closed");
  if (closed) {
    closed.addEventListener("click", () => {
      nav.classList.remove("act");
    });
  }
}

function trackClick(id){
  const existingCartJSON = localStorage.getItem("cart");
  // parsing from string if the cart is already exists, creating the new one if not
  let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};

  // const selectedProduct = id;
  // adding chosen product to the cart or updating its quantity if its already present in the cart
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }

  // Convert the updated cart to JSON format and store it in local storage
  const updatedCartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", updatedCartJSON);
  document.cookie = 'cart=' + updatedCartJSON + '; path=/';
  alert("Product added to the cart!");
}

function redirectToDetails(productId) {
  event.preventDefault();
  // Simulate click on the link to navigate to details page
  window.location.href = "item.php?product_id=" + productId;

  return false;
}

function remove(id) {
    const existingCartJSON = localStorage.getItem("cart");
    // parsing from string if the cart is already exists, creating the new one if not
    let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};
    //remove the item from cart
    delete cart[id];
    const updatedCartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", updatedCartJSON);
    document.cookie = 'cart=' + updatedCartJSON + '; path=/';
    location.reload();
    // Update data model storage accordingly
}

function item_cart(id) {
    const existingCartJSON = localStorage.getItem("cart");
    let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};
    const quantityEl = document
        .getElementById("quantity")
        .querySelector("input");
    const quantity = parseInt(quantityEl.value);
    if (cart[id]) {
      cart[id] += quantity;
    } else {
      cart[id] = quantity;
    }
    const updatedCartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", updatedCartJSON);
    document.cookie = 'cart=' + updatedCartJSON + '; path=/';
    // notify the user that the product has been added to the cart
    alert(`Product added to the cart!`);
}