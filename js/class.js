'use strict';

// var breifClass = document.getElementById('sectionImage');
// // if (breifClass) {

//     // }

//     var m = document.getElementById('test0');
//     renderBreif();
//     function renderBreif() {

// m.textContent='function';
// // window.location='class.html';


// //     // alert(event.target.id);

// //     // m.textContent="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
// //     // console.log(m);
// var m2 = document.createElement('p');
//     m.appendChild(m2);
//     m2.textContent = "mkskkjk";
// //     console.log(m);
// //     console.log(event);
// }
// console.log('hello, mohammad');
// // console.log(breifClass);

// breifClass.addEventListener('click', renderBreif);
// //
// //event.target.id
// if(event==sectionImage){
//     var breifClass = document.getElementById('breifForClass');
//     console.log(breifClass);
// }
///////////
// var breifClass = document.getElementById('sectionImage');
// breifClass.addEventListener('click', function (event) {
//     event.preventDefault();
//    alert(event.target.id); 
//    console.log(event.target.id);
//    window.location('class.html');
// })
var getId; // this variable will store the targated (Id event.target.id)
var savedId; // this variable where it excract from the local storage

var breifClass = document.getElementById('sectionImage'); // DOM in section that exist in index with ID=...

if (breifClass) {// To aviod event listner in class.html. Because "sectionImage" does
    breifClass.addEventListener('click', function (event) {
        // event.preventDefault();

        getId = event.target.id;
        // console.log(a);

        storeFav(getId);


    });

}
getStoredId(); // assigned ID value to b which is declared in line
var nameOfSport = ['aikido', 'bodybuilding', 'boxing', 'hipsandabs', 'MuayThai', 'yoga', 'zumba'];
function Obj(path, title, content) {
    this.path = path;
    this.title = title;
    this.text = content;
    Obj.all.push(this);

}
Obj.all = [];


// To be filled 1-7


text1 = 'aikido';
text2 = 'bodybuilding';
text3 = 'boxing';
text4 = 'hipsandabs';
text5 = '';
text6 = '';
text7 = '';


var contentlorem = [text1, text2, text3, text4, text5, text6, text7];

var text1, text2, text3, text4, text5, text6, text7;














for (var i = 0; i < nameOfSport.length; i++) {
    new Obj(`img/${nameOfSport[i]}.jpg`, nameOfSport[i], contentlorem[i]);
}
console.log(Obj.all);
console.log(nameOfSport[i]);
var index;
for (var i = 0; i < nameOfSport.length; i++) {
    if (savedId == nameOfSport[i]) {
        index = i;
        console.log(index);
    }
}
console.log(Obj.all[0].path);
var container = document.getElementById('breifForClass');

if (container) {
    var imgRender = document.createElement('img');
    container.appendChild(imgRender);
    imgRender.setAttribute('src', `${Obj.all[index].path}`);
    // imgRender.setAttribute('alt',);
    // imgRender.setAttribute('title',);
    var containerFortext = document.createElement('p');
    container.appendChild(containerFortext);
    containerFortext.textContent = `${Obj.all[index].text}`;

}





function storeFav(a) {

    var favArray = JSON.stringify(a);
    localStorage.setItem('imageId', favArray);
}
function getStoredId() {
    savedId = JSON.parse(localStorage.getItem('imageId')) || [];

    // storeFav();
}















// we are in break  now ///////////////////////////
//  hhhhhhh Ok