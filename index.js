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

// Page Objects
my_span.innerText = "Hello, World.";
my_element.appendChild(my_span);
document.body.appendChild(my_element);

header2.innerText = "Welcome to the WHS Code Club Website.";
header2.appendChild(header2_span);
document.body.appendChild(header2);

function logoImg()
{
    var logoImg = document.getElementById('x');
    logoImg.getElementsByTagName("img")[0].src = "./images/WHSCODE.png";
}