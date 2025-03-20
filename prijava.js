document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("form");
  const registerLink = document.querySelector(".register-link a");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(
        "https://www.fulek.com/data/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login response:", data); // Inspect server response

        // Correctly access token from response
        if (data.data && data.data.token) {
          localStorage.setItem("jwt", data.data.token); // Store token for future requests
          window.location.href = "pocetna-stranica.html"; // Redirect to the homepage
        } else {
          alert("Login failed.");
        }
      } else {
        alert("Invalid credentials. Please try again."); // General error for failed response
      }
    } catch (error) {
      console.error("Login error:", error); // Log any network errors
      alert("An error occurred. Please try again."); // Notify user of an error
    }
  });

  registerLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "registracija.html"; // Redirect to registration page
  });
});
