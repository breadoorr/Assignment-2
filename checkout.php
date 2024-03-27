<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Makes the webpage responsive -->
    <link rel="stylesheet" type="text/css" href="style/styleM.css" />
    <link rel="stylesheet" href="style/checkout.css" />
    <!-- Usage of a "FontAwesome" for some icons present on page
        >Cart icon
        >Menu bar icon
        >Cross icon
    -->
    <script
      src="https://kit.fontawesome.com/3ba50cbadb.js"
      crossorigin="anonymous"
    ></script>
    <title>Uclan Store</title>
    <script src="script/data.js"></script>
    <script src="script/script.js"></script>
  </head>
  <body>
    <!-- Header Section that contains Navigation bar (menu) -->
    <div id="header">
      <div id="navbar-toggle" onclick="menu()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <a class="logo" href="https://www.uclancyprus.ac.cy/" target="_blank"
        ><img src="resources/UCLAN.png" class="logo" alt="UCLan Cyprus logo"
      /></a>
      <div class="nav">
        <ul id="navbar">
          <li>
            <a href="#" id="closed" onclick="cl()"
              ><i class="fa fa-times"></i
            ></a>
          </li>
          <li><a href="index.php">Home</a></li>
          <li><a href="Products.php">Products</a></li>
          <li><a href="About.php">About</a></li>
          <li>
            <a href="Cart.php"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main section that contains checkout form -->
    <h2>Checkout</h2>

    <main>
      <div id="bill">
        <form>
          <!-- Billing Information -->
          <h3>Billing Information</h3>
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label for="email">Email:</label>
          <input type="email" name="email" required />

          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label for="city">City:</label>
          <input type="text" id="city" name="city" required />

          <label for="zipCode">ZIP Code:</label>
          <input type="text" id="zipCode" name="zipCode" required />
        </form>
      </div>

      <div id="payment">
        <form>
          <!-- Payment Information -->
          <h3>Payment Information</h3>
          <label for="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" name="paymentMethod" required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <label for="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            required
          />

          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </form>
      </div>
      <div id="order">
        <!-- Order Summary -->
        <h3>Order Summary</h3>
        <button type="submit" id="submit">Place Order</button>
      </div>
    </main>
    <!-- Contact section -->
    <section id="contact">
      <div class="contact-container">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="company-info">
          <h2>About Us</h2>
          <p>Address: 12-14 University Avenue Pyla</p>
          <p>Email: info@uclancyprus.ac.cy</p>
          <p>Phone: + 357 24 69 40 00</p>
          <a class="logo" href="https://www.uclancyprus.ac.cy/" target="_blank"
            ><img
              src="resources/UCLAN.png"
              class="logo"
              alt="UCLan Cyprus logo"
          /></a>
        </div>
      </div>
      <p class="copy">Copyright © 2023 UCLan Cyprus, All rights reserved.</p>
    </section>
  </body>
</html>
