// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new version.
        window.applicationCache.swapCache();
        if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
        }
        } else {
        // Manifest didn't changed. Nothing new to server.
        }
    }, false);
    
    }, false);

// Variable Declarations
let my_element = document.createElement('h1');
let my_span = document.createElement('span');

let header2 = document.createElement('h2');
let header2_span = document.createElement('span');

let my_image = document.createElement('img');

let myCaveGame = document.createElement('script');

// Page Objects

// Logo
my_image.setAttribute("src", "./images/WHSCODE.png");
my_image.setAttribute("width", "300");
my_image.setAttribute("height", "300");
document.body.appendChild(my_image);

// Hello World
my_span.innerText = "Hello, World.";
my_element.appendChild(my_span);
document.body.appendChild(my_element);

// Welcome Message
header2.innerText = "Welcome to the WHS Code Club Website.";
header2.appendChild(header2_span);
document.body.appendChild(header2);

// Cave Game Link
myCaveGame.setAttribute("src", "https://onlinegdb.com/embed/js/G7QcxAC85?theme=undefined");