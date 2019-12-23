function final(){
var item = document.getElementById('#finalform');
item.addEventListener("submit", function(e)
{
	var msg = "";

	for (var i=0; i < 2; i++)
	{
		if(item.elements[i].value != 0){
			msg += item.elements[i].name;
			msg += ":";
			msg += item.elements[i].value;
		}
	}

	for (var i=2; i < item.elements.length -2; i++)
	{
		if ((item.elements[i].value == "") || (item.elements[i].value == null))
		{
			alert("This Input is Required.");
			item.elements[i].focus();
			item.elements[i].select();
			item.elements[i].style.backgroundColor="F00";
			e.preventDefault();
			return;
		}

		else if ((i == 4 ) && (item.elements[i].value.length != 5)  )
		{
			alert("You Must Input 5 Digits for the Zipcode.");
			item.elements[i].focus();
			item.elements[i].select();
			item.elements[i].style.backgroundColor="F00";
			e.preventDefault();
			return;
		}

		else if (((i == 5 ) && (item.elements[i].value.indexOf("@") == -1)) || ((i == 5 ) && (item.elements[i].value.indexOf(".") == -1)))
		{

			alert("Your email should inlcude @ and . ");
			item.elements[i].focus();
			item.elements[i].select();
			item.elements[i].style.backgroundColor= "F00";
			e.preventDefault();
			return;
		}

		else if (i == 6 && item.elements[i].value.length < 16) 
		{
			alert("You must enter a 16-digit credit card number " );
			item.elements[i].focus();
			item.elements[i].select();
			item.elements[i].style.backgroundColor="F00";
			e.preventDefault();
			return;
		}

		else 
		{
			msg += item.elements[i].name;
			msg += ":";
			msg += item.elements[i].value;
			msg += "<p>";
		}
	}
	document.getElementById("app").innerHTML= msg;
});
}

function checkPW(){
  if(document.getElementById("pw1") != document.getElementById("pw2")){
    alert("Passwords Don't Match.");
  }
}

function register() {
  document.getElementById("register").style.final = "block";
}

function endRegister() {
  document.getElementById("register").style.final = "none";
}

function login() {
  document.getElementById("login").style.final = "block";
}

function endLogin() {
  document.getElementById("login").style.final = "none";
}

