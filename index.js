let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_span.innerText = "Hello, World.";

my_element.appendChild(my_span);

document.body.appendChild(my_element);
