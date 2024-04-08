<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Makes the webpage responsive -->
    <link rel="stylesheet" type="text/css" href="style/styleM.css" />
    <link rel="stylesheet" href="style/styleC.css" />
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
          <li class="active">
            <a href="Cart.php"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main body -->

    <div id="container">
        <?php
        // Retrieve cart data from cookie
        if (isset($_COOKIE['cart'])) {
            $cartData = json_decode($_COOKIE['cart'], true);
//            $cartData = json_decode($cartData, true);
            if ($cartData !== null && is_array($cartData)) {
                if (empty($cartData)) {
                    echo "<div class='empty'>The cart is empty for now</div>";
                } else {
                    // Proceed with your database connection and processing
                    global $connection;
                    include 'db_connection.php';

                    $sum = 0;
                    foreach ($cartData as $product => $quantity) {

                        // Query the tbl_products table
                        $result = mysqli_query($connection, "SELECT * FROM tbl_products WHERE product_id LIKE $product");
                        $row = mysqli_fetch_assoc($result);

                        $price = floatval(preg_replace("/[^\d.]/", "", $row['product_price']));
                        $totalPrice = $price * $quantity;
                        $sum += $totalPrice;

                        echo '<div class="product">
                          <a href="#" onclick="redirectToDetails(' . $row['product_id'] . ')">
                          <p class="id">' . $product . '</p>
                          <img src="./resources/products/coursework/assignment-1-resources/' . $row['product_image'] . '" />
                          <h2>' . $row['product_title'] . '</h2>
                          <p class="quantity">' . $quantity . '</p>
                          <p class="total">£' . number_format($totalPrice, 2) . '</p>
                          </a>
                          <a href="#" onclick="remove(' . $product . ')" class="cross"><i class="fa fa-times"></i></a>
                          </div>';
                    }
                }

                // Now $cartData contains the cart data from localStorage
                // You can use it as needed
            }
            else {
                echo "<div class='empty'>The cart is empty for now</div>";
            }
        }
        else {
            echo "<div class='empty'>The cart is empty for now</div>";
        }
        ?>

    </div>
    <div id="buttons"></div>

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
