'use strict';

//calculate the bmi
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

function bmi() {
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

  textArea1.setAttribute('rows', '10');
  textArea1.setAttribute('cols', '50');
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
        var p1,input1,lable2,br2;
        // var aaaa="12346468";
function createRadio() {
p1=document.createElement('p');
p1.setAttribute('id','paraghForBooking');
p1.textContent=`Book the training days`;
br2 = document.createElement('br');
br2.setAttribute('id', 'br2');
p1.appendChild(br2);


input1=document.createElement('input');
input1.setAttribute('type','radio');
input1.setAttribute('value','sunday');
input1.setAttribute('id','day1')
lable2=document.createElement('label');
lable2.setAttribute('for','day1');
lable2.textContent="Sunday";
p1.appendChild(input1);
p1.appendChild(lable2);


input1=document.createElement('input');
input1.setAttribute('type','radio');
input1.setAttribute('value','monday');
input1.setAttribute('id','day2')
lable2=document.createElement('label');
lable2.setAttribute('for','day2');
lable2.textContent="Monday";
p1.appendChild(input1);
p1.appendChild(lable2);


input1=document.createElement('input');
input1.setAttribute('type','radio');
input1.setAttribute('value','tuesday');
input1.setAttribute('id','day3')
lable2=document.createElement('label');
lable2.setAttribute('for','day3');
lable2.textContent="Tuesday";
p1.appendChild(input1);
p1.appendChild(lable2);


input1=document.createElement('input');
input1.setAttribute('type','radio');
input1.setAttribute('value','wednesday');
input1.setAttribute('id','day4')
lable2=document.createElement('label');
lable2.setAttribute('for','day4');
lable2.textContent="Wednesday";
p1.appendChild(input1);
p1.appendChild(lable2);


input1=document.createElement('input');
input1.setAttribute('type','radio');
input1.setAttribute('value','thursday');
input1.setAttribute('id','day5')
lable2=document.createElement('label');
lable2.setAttribute('for','day5');
lable2.textContent="Thursday";
p1.appendChild(input1);
p1.appendChild(lable2);


document.getElementById('formF').appendChild(p1);
console.log(p1);

}