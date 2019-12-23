<!DOCTYPE html>
    <head>
        <title>Assignment 7</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
        <header class="header">
            <center><h1><a href=index.html>Cat Meme Store</a></h1></center>
            <button class="open-button" onclick="login()">Login</button>
            <div class="hidden" id="login">
                <form action="login.php" class="container" method="POST">
                  <h2>Login</h2>
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name = "logEmail" required>
                  <label for="pw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name = "logPW" required>
                  <button type="submit" class="button">Login</button>
                  <button class="button" onclick="endLogin()">Close</button>
                  </form>
            </div>
            <form action="search.php" method="POST">
                <input class="search" type="text" placeholder="Search" name="search">
                <button type="submit" class="button">Search</button>
            </form>

        </header>
        <hr>    
    <br>
    <br>
    <body>  
    
    <?php
    $name = $_POST['fullName'];
    $email = $_POST['regEmail'];
    $pw = $_POST['pw2'];
    $filea = fopen("users.txt","a") or die("error opening file");
    $line= $name.":".$email.":".$pw."\n";
    fwrite($filea, $line);
    fclose($filea);
    print("Welcome to the Cat Meme Store, $name");
    ?>

    <center>
        <form action="products.php" id="finalform" method="POST">
        <div class="content">
            <center><div class="shoppingForm">
                <h3>Angry Cat T-Shirt</h3>
                <h4>$15</h4>
                <center>Select Size:<br>
                <form>
                    <input type="radio" name="size" value="XS">XS</input>
                    <br>
                    <input type="radio" name="size" value="S">S</input>
                    <br>
                    <input type="radio" name="size" value="M">M</input>
                    <br>
                    <input type="radio" name="size" value="L">L</input>
                    <br>
                    <input type="radio" name="size" value="XL">XL</input><br>
                </form>
                Quantity:<input type="number" name="iPhone" min="0" max="100" value="0">
            </div>
            </center>
            <center><div class="shoppingForm">
                <h3>Eh the Smudge Cat Hoodie</h3>
                <h4>$35</h4>
                <center>Select Size:<br>
                        <form>
                            <input type="radio" name="size" value="XS">XS</input>
                            <br>
                            <input type="radio" name="size" value="S">S</input>
                            <br>
                            <input type="radio" name="size" value="M">M</input>
                            <br>
                            <input type="radio" name="size" value="L">L</input>
                            <br>
                            <input type="radio" name="size" value="XL">XL</input><br>
                        </form>
                Quantity:<input type="number" name="Macbook" min="0" max="100" value="0">
            </div>
            </center>
        </div>
        <br>
        First name: <input type="text" name="firstName" ><br><br>
        Last name: <input type="text" name="lastName" ><br><br>
        Zipcode: <input type= "number" name="Zipcode"><p>
        Email: <input type= "email" name="Email"><p>
        Credit Card Number: <input type=number name="creditCardNumber"><p>    
    
        <input class="button" type="reset" value="Reset"><br>
        <br>
        <input class="button" type="submit" value="Submit">
        </form>
        </center>   
        </form>

        <p id="app" style="color:rgb(0, 4, 255)"></p>
        <script src="js/main.js"></script>
    </body>
</html>
