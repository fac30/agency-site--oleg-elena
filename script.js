// Function to load external script
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.crossOrigin = "anonymous";
    script.onload = callback;
    document.head.appendChild(script);
}

// Load Font Awesome Kit
loadScript("https://kit.fontawesome.com/4562b23ee3.js");



// Add listener for the values pages : 
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname == "/index.html") {
        indexPageScript();
    } else if (window.location.pathname == "/contacts.html") {
        contactPageScript();
    } else if (window.location.pathname == "/about_us.html") {
        // aboutUsPageScript();
    }

});

//Adjusting the "10"'s  position on the page depending on the page size
document.addEventListener("DOMContentLoaded", function () {
    var firstChild = document.getElementById('firstChild');

    function updateRightProperty() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        firstChild.style.right = (screenWidth < 900) ? '0px' : '-40px';
    }

    updateRightProperty();
    window.addEventListener('resize', updateRightProperty);
});


// Function to handle the menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("collapsed");
        menuToggle.classList.toggle("active");
    });
});


// Function to handle an HTTP request sent to backend by the form on the contacts page and a pop-up message
document.addEventListener('DOMContentLoaded', function () {
    async function handleFormSubmission() {
      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      const formData = {
        name: name,
        email: email,
        message: message,
      };

      try {
        // Send form data to the server
        const response = await fetch('http://localhost:3000/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData), // Use URLSearchParams to format the data
        });

        if (response.ok) {
          // Form submitted successfully, handle the response if needed
          console.log('Form submitted successfully');
          myFunction(true, 'Form submitted successfully'); // Display the success message
        } else {
          // Handle error response
          console.error('Error submitting form:', response.status, response.statusText);
          myFunction(false, 'Error: ' + response.statusText); // Display the error message
        }

        // Wait for 3 seconds and then reload the page
        setTimeout(function () {
          document.getElementById("contact-form").reset();
          location.reload();
        }, 3000);
      } catch (error) {
        console.error('Error submitting form:', error.message);
        myFunction(false, 'Error: ' + error.message); // Display the error message

        // Wait for 3 seconds and then reload the page
        setTimeout(function () {
          document.getElementById("contact-form").reset();
          location.reload();
        }, 3000);
      }

      // Prevent the default form submission behavior
      return false;
    }

    // Toggle the visibility of the popup
    function myFunction(isSuccess, message) {
      var popup = document.getElementById("myPopup");
      var popupMessage = document.getElementById("popupMessage");

      if (isSuccess) {
        popupMessage.innerHTML = 'Form submitted successfully';
      } else {
        popupMessage.innerHTML = message;
      }
      popup.classList.toggle("show");
    }

    // Attach the handleFormSubmission function to the form submission event
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
      handleFormSubmission();
    });
  });
