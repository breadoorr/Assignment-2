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

    // if see more element in the best sellers section is pressed
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
