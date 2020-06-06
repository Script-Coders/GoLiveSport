'use strict'

// favClass.js1: 
// Here, the selected images(favourite images) will be rendered in fav.html 

// Step 1: Define global variables

var add;
var img1;
var c = 1;
var cartItems = [];
FavSelected.all = [];
var showImage = document.getElementById('showImage');

// Step 2: Get local storage values

// 2.1: use getFav function
getFav();

function getFav() {

    cartItems = JSON.parse(localStorage.getItem('fav')) || [];
    console.log(cartItems);
    for (var i = 0; i < cartItems.length; i++) {
        add = new FavSelected(cartItems[i].name);
        renderResults();
    }
    // console.log(FavSelected.all);
}

// 2.2: use FavSelected object to creat objects for the local storage array
function FavSelected(name) {
    this.name = name;
    this.path = `img/${name}.jpg`;
    FavSelected.all.push(this);
}

// 2.3: Render resaults

function renderResults() {
    img1 = document.createElement('img');
    showImage.appendChild(img1);
    img1.setAttribute('src', add.path);
    img1.setAttribute('alt', add.name);
    img1.setAttribute('title', add.name);
}

// Step 3: if a change occures in the local storage, listen to the event and render the new image if it is new(not repeated)

window.addEventListener("storage", function () {

   if (c == 1) {
        cartItems = JSON.parse(localStorage.getItem('fav')) || [];
        var i = (cartItems.length) - 1;
        add = new FavSelected(cartItems[i].name);
        renderResults();
       c++;
    }
}, false);


