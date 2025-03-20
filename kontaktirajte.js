document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const checkbox = document.getElementById("ReceiveNewsletter");
    // if checked -> true
    if (checkbox.checked) {
      checkbox.value = "true";
    } else {
      checkbox.value = "false";
    }
  });
