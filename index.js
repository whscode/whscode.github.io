// This is our source code for our website
// Authors: Morelli,Lalo,Mario,Casper

// Variable Declarations
let my_element = document.createElement('h1');
let my_span = document.createElement('span');
let header2 = document.createElement('h2');
let header2_span = document.createElement('span');
let my_image = document.createElement('img');
let myCaveLink = document.createElement('div');
let myCaveText = document.createElement('h3');

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
myCaveText.innerText = "please click the link to  play our game";
document.body.appendChild(myCaveText);
myCaveLink.innerHTML = "<a href='https://onlinegdb.com/BJFYAn5sP'>Cave Game Link</a>";
document.body.appendChild(myCaveLink);