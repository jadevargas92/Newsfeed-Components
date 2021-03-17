// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// Created the menuMaker component function

function menuMaker(array) {
  //Created the html elements necessary
  let div = document.createElement('div');
  div.classList.add('menu')
  let ul = document.createElement('ul')
  //Looping over the passed in array and appending that data into a li element in the ul.
  array.forEach(element => {
    let li = document.createElement('li')
    li.textContent = element;
    ul.appendChild(li);
  });

  // appending the ul (that contains the li's) to the div
  div.appendChild(ul);

  //creating the menuButton  element and adding its click event listener that toggles the class of menu--open
  let menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', event => {
    div.classList.toggle('menu--open')
  })

  return div
}

// creating the header and appending the returned div from menuMaker that takes the 'menuItems' array as an argument
let header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems));