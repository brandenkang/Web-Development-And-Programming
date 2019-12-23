function receipt()
{
    var output = "<h2>Thank You For Your Purchase: Here's a Review of Your Order:</h2>";
    for (var index=0; index < document.forms[2].elements.length -2; index ++)
    {
        var curr = document.forms[2].elements[index];
        if (curr.value == "") 
        {
        alert("You must enter a value for " + curr.name);
        curr.focus();
        curr.select();
        curr.style.backgroundColor="#F00";
        return;
        }
        curr.style.backgroundColor="#999";

        if (index == 2 && curr.value.length != 5) 
        {
            alert("Please enter a valid Zip Code" );
            curr.focus();
            curr.select();
            curr.style.backgroundColor="#F00";
            return;
        }

        if ((index == 3 && curr.value.indexOf("@") == -1) || (index == 3 && curr.value.indexOf(".") == -1)) 
        {
        alert("Please enter a valid email." );
        curr.focus();
        curr.select();
        curr.style.backgroundColor="#F00";
        return;
        }

        if (index == 4 && curr.value.length < 9) 
        {
        alert("Please Enter a valid Phone Number.");
        curr.focus();
        curr.select();
        curr.style.backgroundColor="#F00";
        return;
        }

        if (index == 5 && curr.value.length < 16)
        {
        alert("You must enter a valid Credit Card Number." );
        curr.focus();
        curr.select();
        curr.style.backgroundColor="#F00";
        return;
        }

        if (index == 5) {
        creditCard = curr.value.toString();
        creditCard = creditCard.slice(creditCard.length-4)
        output += "<div>" + curr.name + ": " + "xxxxxxxxxxxx" + creditCard;  
        }
        else {
            output += "<div>" + curr.name + ": " + curr.value;
        }
    }

    document.getElementById("output").innerHTML = output;

    var date = new Date(); 
    var currentDate = "Current Date: " + date.getDate() + "/"
                    + (date.getMonth()+1)  + "/" 
                    + date.getFullYear() 
    document.getElementById("date").innerHTML = "<div>" +currentDate;
}



var tshirtQ = document.getElementById("tshirtQ"); 
var hoodieQ = document.getElementById("hoodieQ"); 
tshirtQ.addEventListener("change",total());
hoodieQ.addEventListener("change",total()); 
var total1 = 0; 
var total2 = 0; 
var final = 0; 
var shipping = 0;

var shipped = document.getElementsByName("deliveryMethod")[0].value; 
if (shipped.value == Pickup) {
    shipping = 10; 
}

function total() {
    total1 = tshirtQ.value * 15;
    total2 = hoodieQ.value * 35;
    document.getElementById("tshirtResult").innerHTML = "Subtotal : " + total1.toString()
    document.getElementById("hoodieResult").innerHTML = "Subtotal : " + total2.toString() 
    final = total1 + total2 + shipping; 
    document.getElementById("grandTotal").innerHTML = "Grand Total: " + final.toString(); 
    return;
}
