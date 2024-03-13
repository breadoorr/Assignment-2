<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Makes the webpage responsive -->
    <link rel="stylesheet" type="text/css" href="style/styleM.css" />
    <link rel="stylesheet" type="text/css" href="style/styleA.css" />
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
          <li><a href="index.html">Home</a></li>
          <li><a href="Products.html">Products</a></li>
          <li class="active"><a href="About.html">About</a></li>
          <li>
            <a href="Cart.html"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main body -->

    <section id="container">
      <div class="content">
        <img id="image" src="resources/campus.jpg" alt="Campus" />
        <h1 id="center">Welcome to UClan Store</h1>
      </div>
    </section>

    <section>
      <div class="content">
        <div id="body">
          <h1>About us</h1>

          <h3 class="videoText">Where opportunity creates success</h3>
          <p>
            Every student at The University of Central Lancashire is
            automatically a member of the Students' Union. We're here to make
            life better for students - inspiring you to succeed and achieve your
            goals.
          </p>
          <p>
            Everything you need to know about UCLan Students' Union. Your
            membership starts here.
          </p>

          <!-- Utility of an iframe -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3BrQb61bIE8?si=cAqRzyG0JG6OI25m"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <h2>Meet Christmas with us!</h2>
          <!-- Utility of the HTML5 API (video tag) -->
          <video controls>
            <source src="resources/christmas.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
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
