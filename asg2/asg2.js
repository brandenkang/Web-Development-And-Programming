function styleApp(){
    body = document.getElementById("body");
    body.style.backgroundColor = "#000000";
    h1 = document.getElementById("h1");
    h1.style.fontFamily = "'Mansalva', Almarai";
    h1.style.color = "#F0F8FF";
    h1.style.fontSize = "40px";
    h1.style.border = "inset #7FFF00";
    h1.style.padding = "15px";
};

function undo(){
    body = document.getElementById("body");
    body.style.backgroundColor = "#FFFFFF";
    h1 = document.getElementById("h1");
    h1.style.fontFamily = "'Merriweather', sans serif";
    h1.style.color = "#000000";
    h1.style.border = "thick solid #000000";
    h1.style.padding = "none";
};


function randArray(){
   prizeArr = ["Nintendo Switch", "$50 Amazon Gift Card", "Apple Airpods", "iPhone XS Max", "Nike Air Jordan 1 'Rookie of The Year'"];
   prize = document.getElementById("prize");
   for(let i =0; i<prizeArr.length; i++){
        prize.innerHTML += prizeArr[i]+" || ";
   }
   setTimeout(function win(){
       index = Math.floor(Math.random() * prizeArr.length); 
       prize.innerHTML += "Congratulations! You won: " + prizeArr[index] + " !"; 
    },2000);

};


function swapT(){
    p1 = document.getElementById("p1");
    p2 = document.getElementById("p2");
    swap = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = swap;
}

function swapI(){
    img1 = document.getElementById("img1");
    img2 = document.getElementById("img2");

    temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
}


function newDoc(){
     document.open();
     document.title = "Output";
     document.write("<html><head><title>Output</title> <link rel='stylesheet' href='css/style.css' type='text/css'></head>");
     document.write("<body><center><h1>Unimpressed Cat</h1><center><br><br><center><img id=\"cat\"src=\"img/cat.jpg\"></center>");
     document.write("<center><p>This cat is a famous internet meme!</p><center><br>");
     cat = document.getElementById("cat");
     document.write("Image Height: "+cat.height + " Image Width: "+ cat.width + "<br>");
     week = ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saturday'];
     let date = new Date();
     document.write("Today is "+ week[date.getDay()] + ", " + date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear());
     document.write("</body></html>");
     document.close();
}

function convert(){
    convert = document.getElementById("input").value * 0.621371; 
    document.getElementById("output").value = convert;
    document.getElementById("output").style.color = "#FF0000";
}