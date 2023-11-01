//change h1 text
document.getElementsByTagName("h1")[0].innerHTML = "DOM Manipulation";

//change container background color
document.getElementById("container").style.backgroundColor = "lightblue"; 

//Add item 7
const ul = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = "Item 7";
ul.appendChild(newItem);

//manipulating items
const list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[0].style.color = "crimson";
list.getElementsByTagName("li")[2].style.backgroundColor = "pink";
list.getElementsByTagName("li")[4].style.backgroundColor = "yellow";
list.getElementsByTagName("li")[6].style.backgroundColor = "lightGrey";
list.getElementsByTagName("li")[6].style.color = "royalBlue";

//adding name item
const myNameItem = document.createElement('li');
myNameItem.textContent = "Jonathan Baker";
ul.appendChild(myNameItem);

//removing 4
ul.removeChild(ul.children[3]);

//html element
const button = document.getElementById('btn');
const italicElement = document.createElement('i');
italicElement.textContent = button.textContent;
button.textContent = '';
button.appendChild(italicElement);

//styling button
button.style.backgroundColor = "rebeccapurple";
button.style.color = "white";
button.style.border = "1px solid white";



