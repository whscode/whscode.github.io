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
