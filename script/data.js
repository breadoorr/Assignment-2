// // the main script file of the app that loads and manages most of the data
//
// // structure that allows to arrange and store the given products data
//
//
//
//
// // function that renders the given array of products on Product.html page
// function render(products) {
//   // for each product in the array
//     // main structure of the product div
//     productDiv = document.getElementsByClassName('product');
//
//     // if the product div is being pressed
//     productDiv.addEventListener("click", function (event) {
//       // only perform if not the "a" tag element is pressed
//       if (
//         event.target.tagName.toLowerCase() !== "a" &&
//         event.target.closest("a") === null
//       ) {
//
//       }
//     });
//     // if the "cart" ("a") element is pressed
//     productDiv
//       .getElementsByClassName("cart")[0]
//       .addEventListener("click", function () {
//         var existingCartJSON = localStorage.getItem("cart");
//         // parsing from string if the cart is already exists, creating the new one if not
//         let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};
//
//         const selectedProduct = products[i];
//         // adding chosen product to the cart or updating its quantity if its already present in the cart
//         if (cart[selectedProduct.id]) {
//           cart[selectedProduct.id].quantity++;
//         } else {
//           cart[selectedProduct.id] = {
//             product: selectedProduct,
//             quantity: 1,
//           };
//         }
//
//         // Convert the updated cart to JSON format and store it in local storage
//         const updatedCartJSON = JSON.stringify(cart);
//         localStorage.setItem("cart", updatedCartJSON);
//
//         productDiv.getElementsByClassName("cart")[0].classList.add("active");
//         // notify the user that the product has been added to the cart
//         alert("Product added to the cart!");
//       });
//     document.getElementById("container").appendChild(productDiv);
//   }
// }
//
// // function that removes chosen products from the product page
// function removeProducts(category) {
//   const productsToRemove = document.querySelectorAll(`.${category.id}`);
//
//   // Convert NodeList to an array
//   const productsArray = Array.from(productsToRemove);
//   const div = document.getElementById("container");
//
//   // Remove the associated products
//   productsArray.forEach((product) => {
//     div.removeChild(product);
//   });
// }
//
// // calling the function to parse products
// parsePro();
//
// // creating the array of all products
// const products = hoodies.concat(jumpers, tshirts);
//
// // Check if the current page is 'Products.html'
// if (window.location.href.indexOf("Products.html") > -1) {
//   document.addEventListener("DOMContentLoaded", function () {
//     // rendering the categories to the page
//     const div = document.getElementById("categories");
//
//     function createCategory(categoryId, categoryName) {
//       const category = document.createElement("div");
//       category.innerHTML = `
//                 <h1>${categoryName}</h1>
//             `;
//       category.className = "category";
//       category.classList.add("active");
//       category.id = categoryId;
//       category.addEventListener("click", function () {
//         category.classList.toggle("active");
//         if (category.classList.contains("active")) {
//           renderSelectedCategories();
//         } else {
//           removeProducts(category);
//         }
//       });
//       div.appendChild(category);
//     }
//
//     // creating a category for each type of product
//     createCategory("hoodies", "Hoodies");
//     createCategory("jumpers", "Jumpers");
//     createCategory("tshirts", "Tshirts");
//
//     renderSelectedCategories();
//
//     // function that renders the elements of the selected category
//     function renderSelectedCategories() {
//       const activeCategories = document.querySelectorAll(".category.active");
//       // Render filtered products
//       activeCategories.forEach((products) => {
//         switch (products.id) {
//           case "hoodies":
//             render(hoodies);
//             break;
//
//           case "jumpers":
//             render(jumpers);
//             break;
//
//           case "tshirts":
//             render(tshirts);
//             break;
//         }
//       });
//     }
//
//     // creating a button that allows to scroll on top
//     const topBtn = document.createElement("button");
//     topBtn.classList.add("scroll");
//     topBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
//     document.body.appendChild(topBtn);
//
//     // Function to check scroll position and toggle button visibility
//     function checkScroll() {
//       if (
//         document.body.scrollTop > 300 ||
//         document.documentElement.scrollTop > 300
//       ) {
//         topBtn.style.display = "block";
//       } else {
//         topBtn.style.display = "none";
//       }
//     }
//
//     // Listen for the scroll event
//     window.addEventListener("scroll", checkScroll);
//
//     // Add click event to scroll to the top
//     topBtn.addEventListener("click", function () {
//       window.scroll({
//         top: 0,
//         behavior: "smooth",
//       });
//     });
//
//     // Initial check when the page loads
//     checkScroll();
//
//     if (
//       document.body.scrollTop > 300 ||
//       document.documentElement.scrollTop > 300
//     ) {
//       topBtn.style.display = "block";
//     } else {
//       topBtn.style.display = "none";
//     }
//   });
// }
//
// // Checking if the current page is 'Cart.html'
// if (window.location.href.indexOf("Cart.html") > -1) {
//   document.addEventListener("DOMContentLoaded", function () {
//     // rendering the header part of the main body (Shopping cart)
//     const head = document.createElement("div");
//     head.classList.add("head");
//     head.innerHTML = `
//       <h2>Shopping Cart</h2>
//     `;
//     document.getElementById("container").appendChild(head);
//
//     // initializing the sum variable
//     var sum = 0.0;
//
//     // creating a bottom div that is going to display the total sum
//     const sumDiv = document.createElement("div");
//     sumDiv.id = "sum";
//
//     // getting the cart from the local storage
//     var existingCartJSON = localStorage.getItem("cart");
//     let cartPro = existingCartJSON ? JSON.parse(existingCartJSON) : {};
//     let div = document.getElementById("container");
//
//     // if the cart is empty displaying the corresponding label
//     if (Object.keys(cartPro).length === 0) {
//       const pro = document.createElement("div");
//       pro.classList.add("empty");
//       pro.innerText = "The cart is empty for now";
//       div.appendChild(pro);
//     } else {
//       // else, rendering each element of the cart
//       Object.values(cartPro).forEach((cartItem) => {
//         const product = cartItem.product;
//         const quantity = cartItem.quantity;
//         // parsing the given price to floating point number
//         const price = parseFloat(product.price.replace(/[^\d.]/g, ""));
//         // updating the sum
//         sum += price * quantity;
//         const pro = document.createElement("div");
//         pro.className = "product";
//         pro.innerHTML = `
//         <p class="id">${product.id}</p>
//         <img src="./resources/products/coursework/assignment-1-resources/${
//           product.image
//         }" />
//         <h2>${product.title}</h2>
//         <p class="quantity">${quantity}</p>
//         <p class = "total">£${(price * quantity).toFixed(2)}</p>
//         <a href="#" class="cross"><i class="fa fa-times"></i></a>
//     `;
//
//         // if the user presses on the element redirect to the item page
//         pro.addEventListener("click", function (event) {
//           if (
//             event.target.className.toLowerCase() !== "a" &&
//             event.target.closest("a") === null
//           ) {
//             var productJSON = JSON.stringify(product);
//
//             // Store the JSON-formatted string in session storage
//             sessionStorage.setItem("productData", productJSON);
//
//             // Redirect to the item.html page
//             window.location.href = "item.html";
//           }
//         });
//
//         div.appendChild(pro);
//       });
//
//       // if the cart is not empty displaying the checkout button
//       const check = document.createElement("button");
//       check.id = "check";
//       check.innerText = "Proceed to checkout";
//       document.getElementById("buttons").appendChild(check);
//       // if the button is pressed storing the sum to the session storage
//       // and redirecting the the checkout page
//       check.addEventListener("click", function () {
//         sessionStorage.setItem("sum", sum.toFixed(2));
//         window.location.href = "checkout.html";
//       });
//
//       // if the cart is not empty displaying the "empty the cart" button
//       const empty = document.createElement("button");
//       empty.id = "empty";
//       empty.innerText = "Empty the cart";
//       document.getElementById("buttons").appendChild(empty);
//
//       // if the "empty" button is pressed
//       empty.addEventListener("click", function () {
//         // asking user the second time
//         const userPermission = window.confirm("Do you want to empty the cart?");
//         if (userPermission) {
//           // removing the cart item from the local storage
//           localStorage.removeItem("cart");
//           // reloading the page
//           location.reload();
//           alert("Cart was emptied!");
//         }
//       });
//     }
//
//     sumDiv.innerHTML = `
//       <h3>Total sum: ${sum.toFixed(2)}£</h3>
//     `;
//
//     div.appendChild(sumDiv);
//
//     const crosses = document.querySelectorAll(".cross");
//
//     crosses.forEach((cross) => {
//       // if the remove button on the cart product is pressed
//       cross.addEventListener("click", function () {
//         const productDiv = cross.closest(".product");
//         const idElement = productDiv.querySelector(".id");
//         const id = idElement.textContent;
//         // updating the sum
//         sum -= parseFloat(
//           productDiv.getElementsByClassName("total")[0].textContent
//         );
//         productDiv.remove();
//         //remove the item from cart
//         delete cartPro[id];
//         const updatedCartJSON = JSON.stringify(cartPro);
//         localStorage.setItem("cart", updatedCartJSON);
//         location.reload();
//         // Update data model storage accordingly
//       });
//     });
//   });
// }
//
// // Checking if the current page is "item.html"
// if (window.location.href.indexOf("item.html") > -1) {
//   document.addEventListener("DOMContentLoaded", function () {
//     // creating a div for a product
//     var div = document.getElementById("container");
//     var product = document.createElement("div");
//     product.id = "product";
//     // getting a product data from the session storage
//     const pro = JSON.parse(sessionStorage.getItem("productData"));
//     product.innerHTML = `
//         <img src = "./resources/products/coursework/assignment-1-resources/${pro.image}"/>
//         <div>
//           <h2>${pro.title}</h2>
//           <p id = "color"><b>Color</b>: ${pro.color}</p>
//           <p id = "price"><b>Price</b>: ${pro.price}</p>
//           <p id = "quantity"><b>Quantity</b>:<input type="number" min = "0" max = "10" step = "1" size = "3" value = "1"></p>
//           <p id = "add"><button>Add to cart</button></p>
//         </div>
//         <p id = "des"><b>Description</b>: ${pro.description}</p>
//         `;
//     div.appendChild(product);
//
//     // managing add to cart button,
//     // so it captures the chosen quantity and adds product to the cart
//     document.getElementById("add").addEventListener("click", function () {
//       var existingCartJSON = localStorage.getItem("cart");
//       let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};
//       const quantityEl = document
//         .getElementById("quantity")
//         .querySelector("input");
//       const quantity = parseInt(quantityEl.value);
//       if (cart[pro.id]) {
//         cart[pro.id].quantity = quantity;
//       } else {
//         cart[pro.id] = {
//           product: pro,
//           quantity: quantity,
//         };
//       }
//       const updatedCartJSON = JSON.stringify(cart);
//       localStorage.setItem("cart", updatedCartJSON);
//       // notify the user that the product has been added to the cart
//       alert(`Product ${pro.title} added to the cart!`);
//     });
//   });
// }
//
// // Checking if the current page is "checkout.html"
// if (window.location.href.indexOf("checkout.html") > -1) {
//   document.addEventListener("DOMContentLoaded", function () {
//     const order = document.getElementById("order");
//     // rendering each cart item to the order summary
//     const cart = JSON.parse(localStorage.getItem("cart"));
//     Object.values(cart).forEach((product) => {
//       const pro = document.createElement("p");
//       pro.innerText = `${product.product.title}, ${product.product.color}, ${
//         product.quantity
//       }, ${
//         parseFloat(product.product.price.replace(/[^\d.]/g, "")) *
//         parseFloat(product.quantity)
//       }£`;
//       order.insertBefore(pro, document.getElementById("submit"));
//     });
//     // displaying total price for the order
//     const sumP = document.createElement("p");
//     sumP.innerText = `Total price: ${sessionStorage.getItem("sum")}£`;
//     order.insertBefore(sumP, document.getElementById("submit"));
//   });
// }
//
// // Checking if the current page is "index.html" or initial page
// if (
//   window.location.href.indexOf("index.html") > -1 ||
//   window.location.href === window.location.origin + "/" ||
//   window.location.href === window.location.origin
// ) {
//   document.addEventListener("DOMContentLoaded", function () {
//     // function that displays the best sellers section
//     // rendering each item category
//     function best() {
//       let container = document.getElementById("products");
//       var div = document.createElement("div");
//       div.className = "pro";
//       div.innerHTML = `
//             <img src="./resources/products/coursework/assignment-1-resources/${hoodies[0].image}" alt="${hoodies[0].title}"/>
//             <h2>${hoodies[0].title}</h2>
//                 `;
//       div.addEventListener("click", function () {
//         window.location.href = "Products.html";
//       });
//       container.appendChild(div);
//       var div = document.createElement("div");
//       div.className = "pro";
//       div.innerHTML = `
//                 <img src="./resources/products/coursework/assignment-1-resources/${jumpers[0].image}" alt=${hoodies[0].title}/>
//                 <h2>${jumpers[0].title}</h2>
//                 `;
//       div.addEventListener("click", function () {
//         window.location.href = "Products.html";
//       });
//       container.appendChild(div);
//       var div = document.createElement("div");
//       div.className = "pro";
//       div.innerHTML = `
//                 <img src="./resources/products/coursework/assignment-1-resources/${tshirts[0].image}" alt=${hoodies[0].title}/>
//                 <h1>${tshirts[0].title}</h1>
//                 `;
//       container.appendChild(div);
//       div.addEventListener("click", function () {
//         window.location.href = "products.html";
//       });
//       var div = document.createElement("div");
//       div.className = "pro";
//       div.id = "view";
//       div.innerHTML = `
//                 <p><i class="fa fa-chevron-right"></i></p>
//                 <h1>Start Shopping</h1>
//                 `;
//       div.addEventListener("click", function () {
//         window.location.href = "Products.html";
//       });
//       container.appendChild(div);
//     }
//
//     // Call the render function when the DOM is fully loaded
//     best();
//   });
// }
