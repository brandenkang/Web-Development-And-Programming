var obj = document.getElementById("add");
obj.addEventListener("click", addMore);

function addMore() {
    var breedArr = ["Abyssinian","Aegean","American Curl","American Shorthair","Arabian Mau"]; 
    for (var i=0; i<5; i++) {
        var node = document.createElement("li"); 
        var breed = document.createTextNode(breedArr[i]); 
        node.appendChild(breed); 
        document.getElementById("breeds").appendChild(node); 
    }

    var all = document.querySelectorAll('li');                   
                                                        
    for (var i = 1; i < all.length; i+=2) {            
    all[i].className = 'red';                                 
    }
    for (var i = 2; i < all.length; i+=2) {            
        all[i].className = 'blue';                                 
    }
}
