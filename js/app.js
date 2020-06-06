'use strict';

// In app.js we will creat an object for all imgs using Sport constructor, 
//then whenever the user add a favourite picture(clicking on the star)
// the new object will be stored in selectedFavourite arrayand will be stored in the local storage


// Step 1: Define global variables
var index = 0;
var selectedFavourite = []; // is an array that contains all selected favourite sports as objects
var newSelectFav;  // will conatin the new favorite sport when clicking on star(add to favourite)
Sport.all = [];  // contains all sports 


// Step 2: Creat objects for the images
function Sport(name) {  // constructor to creat Sports objects 
    this.name = name;
    this.path = `img/${name}.jpg`;
    Sport.all.push(this);
}

var names = ['aikido', 'bodybuilding', 'boxing', 'hipsandabs', 'MuayThai', 'yoga', 'zumba'];
for (var i = 0; i < names.length; i++) {
    var pic = new Sport(names[i]);
}

// Step 3: When user add an image to favourite
// 3.1: set function will be called to add the selected image (after creating a new object)to the selectedFavourite array
//      and will also check if the user wants to add or delete the image from the his favourites (step 5)
function set(imgId) {

    newSelectFav = Sport.all[imgId];
    console.log('before store',selectedFavourite);

    if (!selectedFavourite.includes(newSelectFav)) { // if the new object is not reapeted addd it to the array to display it
        selectedFavourite.push(newSelectFav);
        console.log('before store',selectedFavourite);
        storeFav();
        console.log('after store',selectedFavourite);

    }
    else {
        //remove from selectedFavourite 
        for (var j; j < selectedFavourite.length; j++) {
            if (selectedFavourite[j] == newSelectFav) {
                index = j;
            }
        }
        selectedFavourite.splice(index);
        console.log(selectedFavourite);
        deleteFromLocalStorage(newSelectFav.name);
    }
}

// 3.2: Storing favourite classes to the local storage

function storeFav() {
    // var favArray = JSON.stringify(Fav.all);
    var favArray = JSON.stringify(selectedFavourite);
    localStorage.setItem('fav', favArray);
}

// Step 4: Getting the stored objects from the local storage
function getFavMainPage() {
    selectedFavourite = JSON.parse(localStorage.getItem('fav')) || [];
    storeFav();
}
getFavMainPage();

// Step 5: delete the image from the selectedFavourite array and from the loal storage

function deleteFromLocalStorage(itemName) { // to delete a reapeted element
    var arr = JSON.parse(localStorage.getItem('fav'));
    if (arr) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name != itemName) {
                newArray.push(arr[i]);
            }
        }
        selectedFavourite= newArray;
        console.log(selectedFavourite);
        localStorage.clear();
        var favArray = JSON.stringify(newArray);
        localStorage.setItem('fav', favArray);
    }
}







