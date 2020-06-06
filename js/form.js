//calculate the bmi
function bmi(){

    var sheight=parseFloat(document.getElementById('height').value);
    var sweight=parseFloat(document.getElementById('wieght').value);
    var bmi=sweight/(sheight/100*sheight/100);
    // Math.pow(sheight,2);
    var bmiC=document.getElementById('result');
    bmiC.textContent=bmi.toFixed(2);
    if(bmi < 18.5){
        bmiC.textContent= "your BMI is: "+bmi.toFixed(2)+ " and you are Underweight";
      }else if (bmi < 25){
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Normal";
      }else if (bmi < 30){
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Overweight";
      }else{
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Obese";
      }
   
    }
//to clear the form
    function resetForm() {
    document.getElementById("fname").value=""; 
    document.getElementById("height").value=""; 
    document.getElementById("wieght").value="";
    document.getElementById("result").value="your BMI and your suggstion for the class"; 
    }
//git  class from local storag
    // function addToCart(){
        
    //     var cartItems = JSON.parse(localStorage.getItem('class')) || [];
       
    //     console .log(cartItems);
    // }