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

        //creat element in select drop down list
        var z = document.createElement("option");
      z.setAttribute("value", "under Weight");
      var t = document.createTextNode("yoga");
      z.appendChild(t);
      
      document.getElementById("mySelect").appendChild(z);
      }else if (bmi < 25){
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Normal";
      }else if (bmi < 30){
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Overweight";
        //array class fit him will be add to the list
        
      }else{
        bmiC.textContent="your BMI is: "+bmi.toFixed(2)+ " and you are Obese";
      }
//creat a new select list  
      // var x = document.createElement("SELECT");
      // x.setAttribute("id", "mySelect");
      // document.body.appendChild(x);
    
      
   
    }
  

//to clear the form
    function resetForm() {
    document.getElementById("fname").value=""; 
    document.getElementById("height").value=""; 
    document.getElementById("wieght").value="";
    document.getElementById("result").value="your BMI and your suggstion for the class"; 
    document.getElementById("mySelect").value="";
    }
//git  class from local storag
    // function addToCart(){
        
    //     var cartItems = JSON.parse(localStorage.getItem('class')) || [];
       
    //     console .log(cartItems);
    // }