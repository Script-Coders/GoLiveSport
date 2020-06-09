'use strict'

// favClass.js1: 
// Here, the selected images(favourite images) will be rendered in fav.html 

// Step 1: Define global variables
var aikido = `Aikido :
derives mainly from the martial art of Daitō-ryū Aiki-jūjutsu, but began to diverge from it in the late 1920s, partly due to Ueshiba's involvement with the Ōmoto-kyō religion. Ueshiba's early students' documents bear the term aiki-jūjutsu.`;
var bodybulding = `Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature for aesthetic purposes. An individual who engages in this activity is referred to as a bodybuilder. In competitive bodybuilding, bodybuilders appear in lineups and perform specified poses (and later individual posing routines) for a panel of judges who rank the competitors based on criteria such as symmetry, muscularity, size, conditioning, posing, and stage presentation. Bodybuilders prepare for competitions through the elimination of nonessential body fat, enhanced at the last stage by a combination of extracellular dehydration and carbohydrate loading, to achieve maximum muscular definition and vascularity, as well as tanning and shaving to accentuate the contrast of the skin under the spotlights. Some bodybuilders use anabolic steroids and other performance-enhancing drugs to build muscles and recover from injuries more quickly however, competitions sometimes ban using them because of the health risks or considerations regarding fair competition. Despite some calls for testing for steroids, the leading bodybuilding federation (National Physique Committee) does not.`;
var boxing = `Boxing is a combat sport in which two people, usually wearing protective gloves, throw punches at each other for a predetermined amount of time in a boxing ring.
Amateur boxing is both an Olympic and Commonwealth Games sport and is a standard fixture in most international games—it also has its own World Championships. Boxing is overseen by a referee over a series of one- to three-minute intervals called rounds.`;
var hipsandabs = `Have you ever seen someone with really defined hips?  Strong hips are the key to improving your speed and efficiency in swimming, biking, running—and everything in between.`;
var MuayThai = `Formal muay Thai techniques are divided into two groups: mae mai, or 'major techniques', and luk mai, or 'minor techniques'. Muay Thai is often a fighting art of attrition, where opponents exchange blows with one another. This is certainly the case with traditional stylists in Thailand, but is a less popular form of fighting in the contemporary world fighting circuit where the Thai style of exchanging blow for blow is no longer favorable. Almost all techniques in muay Thai use the entire body movement, rotating the hip with each kick, punch, elbow and block.`;
var yoga = `Yoga is a mind and body practice with a 5,000-year history in ancient Indian philosophy. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation.`;
var zumba = `Grooving to the beats of salsa, flamenco, and merengue music feels more like a dance party than a workout, which is exactly what makes Zumba so popular. The Latin-inspired dance workout is one of the most popular group exercise classes in the world.`;

//p tage read from contentToDisplay 
var contentToDisplay = ``;


//array for all content
var allContent = [aikido, bodybulding, boxing, hipsandabs, MuayThai, yoga, zumba];

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
    // img1 = document.createElement('img');
    // showImage.appendChild(img1);
    // img1.setAttribute('src', add.path);
    // img1.setAttribute('alt', add.name);
    // img1.setAttribute('title', add.name);

    // var p = document.createElement('p');
    // showImage.appendChild(p);
    // p.textContent = test;

    var section = document.createElement('section');
    showImage.appendChild(section);


    var h2 = document.createElement('h2');
    section.appendChild(h2);
    h2.textContent = add.name + ' :';

    img1 = document.createElement('img');


    section.appendChild(img1);
    img1.setAttribute('src', add.path);
    img1.setAttribute('alt', add.name);
    img1.setAttribute('title', add.name);
    img1.setAttribute('class', 'animation');


    pContent(add.name);

    var p = document.createElement('p');
    section.appendChild(p);
    p.textContent = contentToDisplay;



}

// Step 3: if a change occures in the local storage, listen to the event and render the new image if it is new(not repeated)

window.addEventListener("storage", function() {

    if (c == 1) {
        cartItems = JSON.parse(localStorage.getItem('fav')) || [];
        var i = (cartItems.length) - 1;
        add = new FavSelected(cartItems[i].name);
        renderResults();
        c++;
    }
}, false);

// to choose wich content should appear

function pContent(name) {



    if (name == 'aikido') {
        console.log(name);
        console.log(allContent[0]);
        contentToDisplay = allContent[0];

    } else if (name == 'bodybuilding') {
        console.log(name);
        console.log(allContent[1]);
        contentToDisplay = allContent[1];
    } else if (name == 'boxing') {
        console.log(name);
        console.log(allContent[2]);
        contentToDisplay = allContent[2];
    } else if (name == 'hipsandabs') {
        console.log(name);
        console.log(allContent[3]);
        contentToDisplay = allContent[3];
    } else if (name == 'MuayThai') {
        console.log(name);
        console.log(allContent[4]);
        contentToDisplay = allContent[4];
    } else if (name == 'yoga') {
        console.log(name);
        console.log(allContent[5]);
        contentToDisplay = allContent[5];
    } else if (name == 'zumba') {
        console.log(name);
        console.log(allContent[6]);
        contentToDisplay = allContent[6];
    }



}