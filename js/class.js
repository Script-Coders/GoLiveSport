'use strict';
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
    this.frame =[];
    Obj.all.push(this);
    
}
Obj.all = [];


// To be filled 1-7


text1 = `Aikido (合気道, aikidō, Japanese pronunciation: [aikiꜜdoː], kyūjitai: 合氣道) is a modern Japanese martial art developed by Morihei Ueshiba as a synthesis of his martial studies, philosophy and religious beliefs. Ueshiba\'s goal was to create an art that practitioners could use to defend themselves while also protecting their attackers from injury.[1][2] Aikido is often translated as "the way of unifying (with) life energy\" or as \"the way of harmonious spirit\". According to the founder\'s philosophy, the primary goal in the practice of aikido is to overcome oneself instead of cultivating violence or aggressiveness.[5] Morihei Ueshiba used the phrase \"masakatsu agatsu katsuhayabi\" (Japanese: 正勝吾勝勝速日) (\"true victory, final victory over oneself, here and now\") to refer to this principle.`;

text2 = `Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature for aesthetic purposes.[1] An individual who engages in this activity is referred to as a bodybuilder. In competitive bodybuilding, bodybuilders appear in lineups and perform specified poses (and later individual posing routines) for a panel of judges who rank the competitors based on criteria such as symmetry, muscularity, size, conditioning, posing, and stage presentation. Bodybuilders prepare for competitions through the elimination of nonessential body fat, enhanced at the last stage by a combination of extracellular dehydration and carbohydrate loading, to achieve maximum muscular definition and vascularity, as well as tanning and shaving[2] to accentuate the contrast of the skin under the spotlights. Some bodybuilders use anabolic steroids and other performance-enhancing drugs to build muscles and recover from injuries more quickly[3]; however, competitions sometimes ban using them because of the health risks or considerations regarding fair competition. Despite some calls for testing for steroids, the leading bodybuilding federation (National Physique Committee) does not`;

text3 = 'Boxing is a combat sport in which two people, usually wearing protective gloves, throw punches at each other for a predetermined amount of time in a boxing ring.Amateur boxing is both an Olympic and Commonwealth Games sport and is a standard fixture in most international games—it also has its own World Championships. Boxing is overseen by a referee over a series of one- to three-minute intervals called rounds.A winner can be resolved before the completion of the rounds when a referee deems an opponent incapable of continuing, disqualification of an opponent, or resignation of an opponent. When the fight reaches the end of its final round with both opponents still standing, the judges\' scorecards determine the victor. In the event that both fighters gain equal scores from the judges, professional bouts are considered a draw. In Olympic boxing, because a winner must be declared, judges award the contest to one fighter on technical criteria.While humans have fought in hand-to-hand combat since the dawn of human history, the earliest evidence of fist-fighting sporting contests date back to the ancient Near East in the 3rd and 2nd millennia BC. The earliest evidence of boxing rules date back to Ancient Greece, where boxing was established as an Olympic game in 688 BC.Boxing evolved from 16th- and 18th-century prizefights, largely in Great Britain, to the forerunner of modern boxing in the mid-19th century with the 1867 introduction of the Marquess of Queensberry Rules.';

text4 = 'Have you ever seen someone with really defined hips?  Strong hips are the key to improving your speed and efficiency in swimming, biking, running—and everything in between.To define your hips, you\'ll need to strengthen your glutes and abdominals. Together these three areas form the girdle of your body and they\'re responsible for the majority of human movement.Weak hips directly translate to weak knees and weak ankles; keeping them strong and mobile is essential to preventing injury as we get older';


text5 = `Muay Thai (Thai: มวยไทย, RTGS: muai thai, pronounced [mūa̯j tʰāj] (About this soundlisten)), or literally \'Thai boxing\', is a combat sport of Thailand that uses stand-up striking along with various clinching techniques.[1][2][3][4][5] This discipline is known as the "art of eight limbs" as it is characterized by the combined use of fists, elbows, knees, and shins.[6] Muay Thai became widespread internationally in the late-20th to 21st century, when Westernized practitioners from Thailand began competing in kickboxing and mixed rules matches as well as matches under muay Thai rules around the world. The professional league is governed by The Professional Boxing Association of Thailand (P.A.T), sanctioned by The Sports Authority of Thailand (SAT), and the World Professional Muaythai Federation (WMF) overseas`;

text6 = 'Yoga is a mind and body practice with a 5,000-year history in ancient Indian philosophy. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation.In more recent years, it has become popular as a form of physical exercise based upon poses that promote improved control of the mind and body and enhance well-being.Aside from the physical benefits, one of the best benefits of yoga is how it helps a person manage stress, which is known to have devastating effects on the body and mind. “Stress can reveal itself in many ways, including back or neck pain, sleeping problems, headaches, drug abuse, and an inability to concentrate,” says Dr. Nevins. “Yoga can be very effective in developing coping skills and reaching a more positive outlook on life.”';

text7 = 'Grooving to the beats of salsa, flamenco, and merengue music feels more like a dance party than a workout, which is exactly what makes Zumba so popular. The Latin-inspired dance workout is one of the most popular group exercise classes in the world.The high-energy classes are set to upbeat music and feature choreographed dance numbers that you might see in a nightclub. You don’t need to be a great dancer to feel welcome in a Zumba class. With the tag line, “Ditch the Workout, Join the Party,” the classes emphasize moving to the music and having a good time, no rhythm required';


var contentlorem = [text1, text2, text3, text4, text5, text6, text7];

var text1, text2, text3, text4, text5, text6, text7;



// var nameOfSport = ['aikido', 'bodybuilding', 'boxing', 'hipsandabs', 'MuayThai', 'yoga', 'zumba'];
framAki1 = ['https://www.youtube.com/embed/u71nroaAXnM','https://www.youtube.com/embed/ONddI-SpQoE','https://www.youtube.com/embed/fmjX7df96HM'];
framBody2 = ['https://www.youtube.com/embed/l0gDqsSUtWo', 'https://www.youtube.com/embed/U8Li9TlGlW4','https://www.youtube.com/embed/ikqaOReLe-g'];
framBoxing = ['https://www.youtube.com/embed/Q1Piq_vMh5g', 'https://www.youtube.com/embed/m-kr-Vw0VQA?start=9', 'https://www.youtube.com/embed/jCTEVKRTuS8'];
framHipsandabs = ['https://www.youtube.com/embed/W3q2ealQ2ic', 'https://www.youtube.com/embed/SRq7XtDW0wg', 'https://www.youtube.com/embed/gC_L9qAHVJ8'];
framMuayThai=['https://www.youtube.com/embed/Tu_mAuLjTpA','https://www.youtube.com/embed/JbK1KofAEcg','https://www.youtube.com/embed/KcIGuMn4vB4'];
framYoga=['https://www.youtube.com/embed/4pKly2JojMw','https://www.youtube.com/embed/b6IFkfSj4Jo','https://www.youtube.com/embed/vTMdISoaKT4'];
framZumba=['https://www.youtube.com/embed/QRZcZgSgSHI','https://www.youtube.com/embed/HRkNfdlm5Qs','https://www.youtube.com/embed/zDPsJ3ECaTI'];
var framAki1,framBody2,framBoxing,framHipsandabs,framMuayThai,framYoga,framZumba;
var framArray=[framAki1,framBody2,framBoxing,framHipsandabs,framMuayThai,framYoga,framZumba];// frames for each sport


Obj.prototype.pushFrame=function (a){
    
        this.frame=framArray[a];

    
}




for (var i = 0; i < nameOfSport.length; i++) {
    new Obj(`img/${nameOfSport[i]}.jpg`, nameOfSport[i], contentlorem[i]);
    Obj.all[i].pushFrame(i);
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
    // <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
// </iframe>
for(var i=0;i<Obj.all[index].frame.length;i++){
    var framForVideo=document.createElement('iframe');
    framForVideo.setAttribute('width','300');framForVideo.setAttribute('height','300');framForVideo.setAttribute('src',`${Obj.all[index].frame[i]}`);
    
    container.appendChild(framForVideo);}

    
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