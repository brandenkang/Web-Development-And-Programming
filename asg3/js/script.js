//1. Random Image Application
function randomImage(){
    var image = document.getElementById("random");
    image.src = "img/img" + Math.floor(Math.random()*5 + 1) + ".jpg";
}

//2. Slide Show Application 
var counter = 0; 
var slide = true; 
function startButton() { 
    if (slide == true) {
        var curr = document.getElementById("slideshow"); 
        counter++; 
        if (counter > 5) {counter = 1} 
        curr.src = "img/img" + counter + ".jpg"; 
        setTimeout(startButton, 2000); 
    }
}
function endButton() {
    slide = false; 
}

//3. Simple Crap Game (Dice game based on luck)
function roll(){
  if (document.getElementById("diesum").value < 1 || document.getElementById("diesum").value > 12) {
      alert("Value must be between 1 and 12"); 
  }
  else {
      var die1 = Math.floor((Math.random() * 6) + 1)
      var die2 = Math.floor((Math.random() * 6) + 1)
      var sum = die1 + die2
      document.getElementById("die1").src = "img/dice"+die1+".gif"
      document.getElementById("die2").src = "img/dice"+die2+".gif"
      document.getElementById("sum").innerHTML = "The sum is : " + sum;
      if(sum == 7 || sum == 11){alert = "You Won!";}  
      else if(sum == 2 || sum == 3 || sum == 12) {alert = "You lost!";}
      else {alert = "Roll Again";}
      document.getElementById("alert").innerHTML = alert;
  }
}

//4. NYU Holiday Calendar 
var holidayArr = [
  "2019-09-02", "2019-10-14", "2019-11-27", "2019-11-28", "2019-11-29",
  "2019-12-21", "2019-12-22", "2019-12-23", "2019-12-24", "2019-12-25",
  "2019/12/26", "2019/12/27", "2019/12/28", "2019/12/29", "2019/12/30",
  "2019/12/31", "2020/01/01", "2020/01/02", "2020/01/03", "2020/01/04",
  "2020/01/05", "2020/02/17", "2020/03/16", "2020/03/17", "2020/03/18",
  "2020/03/19", "2020/03/20", "2020/03/21", "2020/03/22", "2020/05/25",
  "2020/07/03", "2020/07/04" 
];

var nameArr = []; 
nameArr[0] = "Labor Day";
nameArr[1] = "Fall Recess";
nameArr[2] = nameArr[3] = nameArr[4] = "Thanksgiving";
nameArr[5] = nameArr[6] = nameArr[7] = nameArr[8] = nameArr[9] = nameArr[10] = nameArr[11] = nameArr[12] =
nameArr[13] = nameArr[14] = nameArr[15] = nameArr[16] = nameArr[17] = nameArr[18] = nameArr[19] = nameArr[20] = "Winter Break"; 
nameArr[21] = "President's Day"; 
nameArr[22] = nameArr[23] = nameArr[24] = nameArr[25] = nameArr[26] = nameArr[27] = nameArr[28] = "Spring Break"; 
nameArr[29] = "Memorial Day"
nameArr[30] = nameArr[31] = "Independence Day";

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function checkDate(){
    date = new Date(document.getElementById("datetime").value);
    start = new Date("2019/08/25");
    end = new Date("2020/08/16");
    alert = document.getElementById("alert");
    newDate = document.getElementById("datetime").value;
    if(date.valueOf() < start.valueOf()) {
        document.getElementById("alert2").innerHTML = "Date entered is before the beginning of the semester";
    }
    else if (date.valueOf() > end.valueOf()) {
        document.getElementById("alert2").innerHTML = "Date entered is after the end of the semester";
    }
    else if(holidayArr.includes(newDate.toString())){
        i = holidayArr.indexOf(newDate);
        document.getElementById("alert2").innerHTML = "Date given is " + nameArr[i]+".";
        holidayName = nameArr[i].toLowerCase().replace(/ /g, '').replace("'","");
        document.getElementById("holidayImg").src = "img/" + holidayName + ".jpg";
        document.getElementById("citation").innerHTML = "(Picture obtained from https://www.shutterstock.com/photos)"; 
    }
    else {
        document.getElementById("alert2").innerHTML = newDate + " is not an NYU Holiday"
    }
}