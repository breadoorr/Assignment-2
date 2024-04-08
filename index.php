<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Makes the webpage responsive -->
    <link rel="stylesheet" type="text/css" href="style/styleM.css" />
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
          <li class="active"><a href="index.php">Home</a></li>
          <li><a href="Products.php">Products</a></li>
          <li><a href="About.php">About</a></li>
          <li>
            <a href="Cart.php"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </li>
          <li onclick="openOverlay()"><i class="fa-solid fa-circle-user fa-2xl" aria-hidden="true"></i></li>
        </ul>
      </div>
    </div>
    <?php
    session_start();
    include 'login.php'; ?>
    <!-- Main body section -->
    <div id="container">
      <div id="home">
        <!-- SLIDER -->
        <div class="container">
          <div id="slide">
            <div class="item" style="background-image: url(resources/uu.jpg)">
              <div class="content">
                <div class="name">UCLan Store</div>
                <div class="des">
                  Fashion with a Class: Your University Wardrobe.
                </div>
                <button class="see">See more</button>
              </div>
            </div>
            <div
              class="item"
              style="background-image: url(resources/campus.jpg)"
            >
              <div class="content">
                <div class="name">UCLan Store</div>
                <div class="des">
                  Discover the unique advantages of shopping at the British
                  University of Cyprus
                </div>
                <button class="see">See more</button>
              </div>
            </div>
            <div
              class="item"
              style="background-image: url(resources/campC.jpg)"
            >
              <div class="content" style="color: black">
                <div class="name">UCLan Store</div>
                <div class="des">Dress the Campus Way, Every Day!</div>
                <button class="see">See more</button>
              </div>
            </div>
            <div
              class="item"
              style="background-image: url(resources/hoodieG.jpg)"
            >
              <div class="content">
                <div class="name">UCLan Store</div>
                <div class="des">
                  Where Fashion Meets Knowledge - University Chic!
                </div>
                <button class="see">See more</button>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button id="prev">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button id="next">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <!-- END OF SLIDER -->
      </div>

<!--       Best sellers section-->
      <section class="best">
        <h2 id="sell">Special offers</h2>
        <div id="products">
            <?php
            global $connection;
            include 'db_connection.php';

            // Query the tbl_products table
            $result = mysqli_query($connection, "SELECT * FROM tbl_offers");

            // Check if the query was successful
            if (!$result) {
                die("Query failed: " . mysqli_error($connection));
            }

            // Fetch and display the data
            while ($row = mysqli_fetch_assoc($result)){
                echo '<div class="pro">
                <h2>' . $row['offer_title'] . '</h2>
                <p>' . $row['offer_dec'] . '</p>
                </div>';
            }
            ?>
        </div>
      </section>

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
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div class="company-info">
            <h2>About Us</h2>
            <p>Address: 12-14 University Avenue Pyla</p>
            <p>Email: info@uclancyprus.ac.cy</p>
            <p>Phone: + 357 24 69 40 00</p>
            <a
              class="logo"
              href="https://www.uclancyprus.ac.cy/"
              target="_blank"
              ><img
                src="resources/UCLAN.png"
                class="logo"
                alt="UCLan Cyprus logo"
            /></a>
          </div>
        </div>
        <p class="copy">Copyright © 2023 UCLan Cyprus, All rights reserved.</p>
      </section>
    </div>
  </body>
</html>
