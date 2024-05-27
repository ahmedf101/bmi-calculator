function bmi(weight,height){
    var bmiCal = weight / (height*height);
    bmiCal = Math.floor(bmiCal);
    return bmiCal;
}
  let bmiCal= bmi(83,1.68);
 console.log("Your BMI is: " + bmiCal);
 