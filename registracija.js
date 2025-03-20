document.addEventListener("DOMContentLoaded", () => {
  // Wait for the DOM to be fully loaded before executing the script
  const registrationForm = document.getElementById("form");

  registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      // Send a POST request to the registration API
      const response = await fetch(
        "https://www.fulek.com/data/api/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Specify the content type as JSON
          body: JSON.stringify({ username, password }), // Convert the input data to a JSON string
        }
      );

      if (response.ok) {
        // alert("Registration successful! Redirecting to login...");
        window.location.href = "prijava.html"; // Redirect to the login page
      } else {
        // If the registration fails, notify the user
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error("Registration error:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
