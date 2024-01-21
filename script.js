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

document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    var firstChild = document.getElementById('firstChild');

    function updateRightProperty() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        firstChild.style.right = (screenWidth < 900) ? '0px' : '-40px';
    }

    updateRightProperty();
    window.addEventListener('resize', updateRightProperty);
});


// function contactPageScript() {
//     const contactForm = document.getElementById("contact-form");
//     const successMessage = document.getElementById("success-message");

//     contactForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         successMessage.textContent = "Message sent! We'll be in touch soon. Thank you!";
//         successMessage.style.display = "block";

//         setTimeout(function () {
//             successMessage.style.display = "none";
//         }, 3000);
//     });
// }


// function aboutUsPageScript() {
//     var firstChildAboutUs = document.getElementById('firstChildAboutUs');

//     function updateRightPropertyAboutUs() {
//         var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         firstChildAboutUs.style.right = (screenWidth < 950) ? '0px' : '-40px';
//     }

//     updateRightPropertyAboutUs();
//     window.addEventListener('resize', updateRightPropertyAboutUs);
// }


// CONTACTS Page :
// onclick() event handler :
// let send_msg = document.getElementById("send_msg");

// function changeColor(bcolor) {
//     send_msg.style.backgroundColor = bcolor;
// }

// function send_msg_clicked() {
//     changeColor("blue");
// };
