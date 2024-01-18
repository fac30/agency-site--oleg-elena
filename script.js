// Load Font Awesome Kit
const fontAwesomeKitScript = document.createElement('script');
fontAwesomeKitScript.src = "https://kit.fontawesome.com/4562b23ee3.js";
fontAwesomeKitScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeKitScript);

// Load Font Awesome CSS
const fontAwesomeCssLink = document.createElement('link');
fontAwesomeCssLink.rel = "stylesheet";
fontAwesomeCssLink.href = "https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css";
document.head.appendChild(fontAwesomeCssLink);

// Load Font Awesome 4 CSS
const fontAwesome4CssLink = document.createElement('link');
fontAwesome4CssLink.rel = "stylesheet";
fontAwesome4CssLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
document.head.appendChild(fontAwesome4CssLink);

// Load Ionicons ES Module
const ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.defer = true;
ioniconsModuleScript.type = "module";
ioniconsModuleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
document.head.appendChild(ioniconsModuleScript);

// Load Ionicons (No Module)
const ioniconsNoModuleScript = document.createElement('script');
ioniconsNoModuleScript.defer = true;
ioniconsNoModuleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
document.head.appendChild(ioniconsNoModuleScript);

// Load custom script
const customScript = document.createElement('script');
customScript.defer = true;
customScript.src = "./scripts.js";
document.head.appendChild(customScript);


// HOMEPAGE :
// Get the first child div
var firstChild = document.getElementById('firstChild');

// Function to update the right property based on screen width
function updateRightProperty() {
    // Check the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Update the right property based on the screen width
    if (screenWidth < 950) {
        firstChild.style.right = '0px';
    } else {
        firstChild.style.right = '-40px';
    }
}

// Initial call to set the initial right property
updateRightProperty();

// Add event listener for window resize
window.addEventListener('resize', updateRightProperty);



// ABOUT US page:
if (document.getElementById('firstChild')) {
    // Get the first child div for About Us page
    var firstChildAboutUs = document.getElementById('firstChild');

    // Function to update the right property based on screen width for About Us page
    function updateRightPropertyAboutUs() {
        // Check the screen width
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Update the right property based on the screen width for About Us page
        if (screenWidth < 950) {
            firstChildAboutUs.style.right = '0px';
        } else {
            firstChildAboutUs.style.right = '-40px';
        }
    }

    // Initial call to set the initial right property for About Us page
    updateRightPropertyAboutUs();

    // Add event listener for window resize for About Us page
    window.addEventListener('resize', updateRightPropertyAboutUs);
}

// MEET THE TEAM page:
