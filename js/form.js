'use strict';

var bmiC = document.getElementById('result');

var indexCase = ['Underweight', 'Normal', 'Overweight', 'Obese'];
aclass1 = ['Yoga'];
aclass2 = ['Yoga', 'Boxing'];
aclass3 = ['Body Builing', 'Running', 'Aikido'];
aclass4 = ['Body Builing', 'Running', 'Aikido', 'Cardio']
var aclass1, aclass2, aclass3, aclass4;
var classType = [aclass1, aclass2, aclass3, aclass4];
var select;// this for SELECT in form. Used to initiate the SELECT element to aviod the doublecation
var lable1, hr1, textArea1;// tags element in the form. Used to initiate the text area to aviod the doublecation 

function Class(name, sport) {
  this.nameClass = name;
  this.sport = sport;
  this.options = [];
  Class.all.push(this);
}

Class.all = [];

Class.prototype.optionsArray = function (i) {
  this.options = getArray(i);
}

for (var i = 0; i < indexCase.length; i++) {
  new Class(indexCase[i], "sport");
  Class.all[i].optionsArray(i);

}

function getArray(i) {
  var bArray = [];

  bArray = classType[i];
  // console.log(classType[i]);
  // console.log(bArray);
  return bArray;
}
// console.log(classType[1]);

//calculate the bmi
function bmi() {
  if(localStorage){
    localStorage.clear();
    console.log("LocaStorage been cleared")
  }
  event.preventDefault();
  var sheight = parseFloat(document.getElementById('height').value);
  var sweight = parseFloat(document.getElementById('wieght').value);

  var bmiCal = sweight / (sheight / 100 * sheight / 100);

  // Math.pow(sheight,2);
  // bmiC.textContent = bmiCal.toFixed(2);

  if (bmiCal < 18.5) {
    var var1 = 0;
    creatoptions(bmiCal, var1);

    //creat element in select drop down list
    var z = document.createElement("option");
    z.setAttribute("value", "under Weight");// will we use Value=under Weight ? if, where and how ?
    var t = document.createTextNode("yoga");// 
    z.appendChild(t);
    // z.textContent="Yoga";// this can be used instead of the above two lines



  } else if (bmiCal < 25) {
    var var1 = 1;
    creatoptions(bmiCal, var1);

  } else if (bmiCal < 30) {
    var var1 = 2;
    creatoptions(bmiCal, var1);

  } else {
    var var1 = 3;
    creatoptions(bmiCal, var1);

  }

  //creat a new select list  
  // var x = document.createElement("SELECT");
  // x.setAttribute("id", "mySelect");
  // document.body.appendChild(x);

  var formOrigin = document.getElementById('form1');


  resetForm(); //To reset the Form
  console.log(document.getElementById('form1'));
}

//to clear the form
function resetForm() {
  console.log(document.getElementById("form1"));

  // document.getElementById("form1").reset(); // we can use this instrction instead of separated for each tag in the form instructions

  // console.log("reset");
  // document.getElementById("fname").value = "";
  // document.getElementById("height").value = "";
  // document.getElementById("wieght").value = "";
  // document.getElementById("result").value = "your BMI and your suggstion for the class";
  // document.getElementById("mySelect").value = "";
}

function creatoptions(bmicalculated, var1, ) {// To creat options to select tag and show the BMI result

  creatTextArea(bmicalculated);// creat text area

  var bmiC = document.getElementById('result');// to append bmiC to id = resul, which is in text area

  bmiC.textContent = bmicalculated.toFixed(2);
  bmiC.textContent = `your BMI is: ${bmicalculated.toFixed(2)} and you are  ${indexCase[var1]}`;

  if (select) {
    document.getElementById("mySelect").remove();
  }// To avoid repeating of SELECT TAG in the form

  select = document.createElement('select');
  select.setAttribute('id', 'mySelect');

  document.getElementById('formF').appendChild(select);
  document.getElementById("mySelect").textContent = null;

  for (var i = 0; i < Class.all[var1].options.length; i++) {
    var z = document.createElement("option");
    z.setAttribute("value", `${Class.all[var1].options[i]}`);
    z.textContent = `${Class.all[var1].options[i]}`;
    document.getElementById("mySelect").appendChild(z);
  }
  createRadio();

}
function creatTextArea() {

  if (lable1 || hr1 || textArea1) {// To avoid repeating of text area elements in the form
    document.getElementById("lable1").remove();
    document.getElementById("hr1").remove();
    document.getElementById("result").remove();

  }
  lable1 = document.createElement('label');
  lable1.setAttribute('for', 'BMI');
  lable1.setAttribute('id', 'lable1');
  lable1.textContent = 'calculate your BMI:';
  hr1 = document.createElement('br');
  hr1.setAttribute('id', 'hr1');
  textArea1 = document.createElement('textarea');
  textArea1.setAttribute('name', 'message');

  textArea1.setAttribute('rows', '5');
  textArea1.setAttribute('cols', '30');
  textArea1.setAttribute('id', 'result');
  textArea1.textContent = 'your BMI and your suggstion for the class';

  document.getElementById('formF').appendChild(lable1);
  document.getElementById('formF').appendChild(hr1);
  document.getElementById('formF').appendChild(textArea1);



}
//git  class from local storag
// function addToCart(){

//     var cartItems = JSON.parse(localStorage.getItem('class')) || [];

//     console .log(cartItems);
// }

{/* <p>Please select your favorite genre:
        <br />
  <input type="radio" name="genre" value="rock"
    checked="checked" /> Rock
        <input type="radio" name="genre" value="pop" />
        Pop
        <input type="radio" name="genre" value="jazz" />
        Jazz
        </p> */}
var p1, input1, lable2, br2, botton1;
// var aaaa="12346468";
function createRadio() {
  if (p1) {
    document.getElementById('paraghForBooking').remove();
  }
  p1 = document.createElement('p');
  p1.setAttribute('id', 'paraghForBooking');
  p1.textContent = `Book the training days`;
  br2 = document.createElement('br');
  br2.setAttribute('id', 'br2');
  p1.appendChild(br2);

  input1 = document.createElement('input');
  input1.setAttribute('type', 'checkbox');
  input1.setAttribute('value', 'sunday');
  input1.setAttribute('id', 'day1')
  lable2 = document.createElement('label');
  lable2.setAttribute('for', 'day1');
  lable2.textContent = "Sunday";
  p1.appendChild(input1);
  p1.appendChild(lable2);

  input1 = document.createElement('input');
  input1.setAttribute('type', 'checkbox');
  input1.setAttribute('value', 'monday');
  input1.setAttribute('id', 'day2')
  lable2 = document.createElement('label');
  lable2.setAttribute('for', 'day2');
  lable2.textContent = "Monday";
  p1.appendChild(input1);
  p1.appendChild(lable2);

  input1 = document.createElement('input');
  input1.setAttribute('type', 'checkbox');
  input1.setAttribute('value', 'tuesday');
  input1.setAttribute('id', 'day3')
  lable2 = document.createElement('label');
  lable2.setAttribute('for', 'day3');
  lable2.textContent = "Tuesday";
  p1.appendChild(input1);
  p1.appendChild(lable2);

  input1 = document.createElement('input');
  input1.setAttribute('type', 'checkbox');
  input1.setAttribute('value', 'wednesday');
  input1.setAttribute('id', 'day4')
  lable2 = document.createElement('label');
  lable2.setAttribute('for', 'day4');
  lable2.textContent = "Wednesday";
  p1.appendChild(input1);
  p1.appendChild(lable2);

  input1 = document.createElement('input');
  input1.setAttribute('type', 'checkbox');
  input1.setAttribute('value', 'thursday');
  input1.setAttribute('id', 'day5');
  lable2 = document.createElement('label');
  lable2.setAttribute('for', 'day5');
  lable2.textContent = "Thursday";
  p1.appendChild(input1);
  p1.appendChild(lable2);

  botton1 = document.createElement('input');
  botton1.setAttribute('type', 'submit');
  botton1.setAttribute('value', 'Book Now');
  botton1.setAttribute('id', 'booking');
  // botton1.setAttribute('onclick',);
  p1.appendChild(botton1);

  document.getElementById('formF').appendChild(p1);
  // console.log(document.getElementById('day1').checked);

  // if(document.getElementById('booking')){

  //   console.log(event.target.id);
  // }
  var booking1 = document.getElementById('booking');
  booking1.addEventListener('click', doBooking);

}

function doBooking() {
  event.preventDefault();
  for (var i = 1; i <= 5; i++) {
    if (document.getElementById(`day${i}`).checked) {
      checkedArray.push(document.getElementById(`day${i}`).value);
      console.log(checkedArray);
    }
    }
    storeDays(checkedArray);
    restoreDays();
    // console.log(document.getElementById('paraghForBooking'));
    // console.log(savedDays);
    document.getElementById('paraghForBooking').remove();
    bookingResult();

}
var checkedArray = [];// For booking days that user want in local storage;
function storeDays(a){
  localStorage.setItem('bookingDays',JSON.stringify(a))
  // console.log(localStorage);

}
function restoreDays(){
  
  savedDays=JSON.parse(localStorage.getItem('bookingDays'))||[];
  
}
var savedDays;// For booking days that user want **from** local storage;

var article1,article2,sp;
function bookingResult(){
   article1=document.createElement('div');
  article1.setAttribute('id','daysDev');
  // document.getElementById('formF').appendChild(article1);
  var p2=document.createElement('p');
  var y=p2.textContent=` and Your Booking Days are  :`;
  article1.appendChild(p2);

  var e = document.getElementById("mySelect");
var result = e.options[e.selectedIndex].value;
 
for(var i=0;i<savedDays.length;i++){
  var li1=document.createElement('li');
  var x=li1.textContent=savedDays[i];
  var z=article1.appendChild(li1);
  

  alert("you have chose "+result+" sport "+y+x);
}


}
