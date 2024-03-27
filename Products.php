<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta charset="UTF-8" />
    <!-- css file specific for the page -->
    <link rel="stylesheet" type="text/css" href="style/styleS.css" />
    <!-- Main css file -->
    <link rel="stylesheet" href="style/styleM.css" />
    <!-- Usage of a "FontAwesome" for some icons present on page
    >Cart icon
    >Menu bar icon
    >Cross icon
    >Arrows icons
    -->
    <script
      src="https://kit.fontawesome.com/3ba50cbadb.js"
      crossorigin="anonymous"
    ></script>
    <!-- link for the main script file -->
    <script src="script/data.js"></script>
    <!-- link for the secondary script file -->
    <script src="script/script.js"></script>
    <title>Uclan Store</title>
  </head>
  <body>
    <!-- NAVIGATION BAR SECTION -->

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
          <li class="active"><a href="Products.php">Products</a></li>
          <li><a href="About.php">About</a></li>
          <li>
            <a href="Cart.php"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Products Section -->

    <div id="container">
<!--        --><?php
//        $search ="";
//
//        if(isset($_GET["searchCriterion"])){
//            echo "You searched ". $_GET["searchCriterion"];
//
//            $search = $_GET["searchCriterion"];
//        }
//        ?>
      <div id="categories"></div>
        <?php
        $connection = mysqli_connect('localhost', 'root','usbw', 'dchystiakova');
        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        // Query the tbl_products table
        $result = mysqli_query($connection, "SELECT * FROM tbl_products");

        // Check if the query was successful
        if (!$result) {
            die("Query failed: " . mysqli_error($connection));
        }

        // Fetch and display the data
        while ($row = mysqli_fetch_assoc($result)) {
//            echo "Product ID: " . $row['product_id'] . "<br>";
//            echo "Product Name: " . $row['product_title'] . "<br>";
//            // Output other fields as needed
//            echo "<br>";

            echo '
            <div class="product">
                <img src="./resources/products/coursework/assignment-1-resources/' . $row['product_image'] . '" alt="' . $row['product_title'] . '"/>
                <h2>' . $row['product_title'] . '</h2>
                <p>Price: ' . $row['product_price'] . '</p>
                <a href="#" class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </div>
        ';
        }

        // Close the connection
        mysqli_close($connection);
        ?>
    </div>

    <!-- CONTACT SECTION -->

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

    <?php

    ?>
  </body>
</html>
