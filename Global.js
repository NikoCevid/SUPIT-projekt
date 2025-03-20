$(document).ready(function () {
  // Dynamically load header from 'header.html'
  $("header").load("header.html", function () {
    // Check JWT token and show/hide items only after header is loaded
    const loginItem = $("#login");
    const logoutItem = $("#logout");
    const studyProgram = $("#study-program");

    const jwtToken = localStorage.getItem("jwt");

    if (jwtToken) {
      loginItem.addClass("hidden");
      logoutItem.removeClass("hidden");
      studyProgram.removeClass("hidden");
    } else {
      loginItem.removeClass("hidden");
      logoutItem.addClass("hidden");
      studyProgram.addClass("hidden");
    }

    // Logout functionality
    logoutItem.on("click", function () {
      localStorage.removeItem("jwt"); // Remove token from localStorage
    });

    // Hamburger menu functionality
    $("#hamburger-menu").on("click", function () {
      $(".main-list").toggleClass("show");
    });

    // Add extra menu items on 'O-nama.html' after header is loaded
    if (window.location.pathname.includes("O-nama.html")) {
      const transitionList = $("<ul>").addClass("transition-list");

      transitionList.append(
        '<li><a href="#first-section">Naše vrijednosti</a></li>'
      );
      transitionList.append('<li><a href="#history-section">Povijest</a></li>');
      transitionList.append(
        '<li><a href="#algebra-graybox">Algebra grupa</a></li>'
      );
      transitionList.append('<li><a href="#map-section">Kako do nas</a></li>');

      // Append the additional menu to the nav bar
      $(".nav-bar").append(transitionList);
    }
  });

  // Dynamically load footer from 'footer.html' (except on contact.html and index.html)
  let page = window.location.pathname.split("/").pop();
  if (page !== "kontaktirajte.html" && page !== "pocetna-stranica.html") {
    $("footer").load("footer.html");
  }
  // Add contact iframe overlay dynamically (for all pages except contact.html)
  if (!window.location.pathname.includes("kontaktirajte.html")) {
    const contactOverlay = `
        <div id="contact-overlay" class="overlay">
          <div class="overlay-content">
            <a href="#" class="close-overlay">&times;</a>
            <iframe src="kontaktirajte.html" frameborder="0" class="contact-iframe"></iframe>
          </div>
        </div>
      `;

    // Append the overlay to the body of the page
    $("body").append(contactOverlay);
  }

  // Use event delegation for dynamically added elements
  $(document).on("click", "#contact-overlay-link", function (e) {
    e.preventDefault();
    $("#contact-overlay").fadeIn(); // Show the overlay
  });

  $(document).on("click", ".close-overlay", function () {
    $("#contact-overlay").fadeOut(); // Hide the overlay
  });
});
