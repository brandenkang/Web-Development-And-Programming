<!DOCTYPE html>
    <head>
        <title>Assignment 7</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
        <header class="header">
            <center><h1><a href=index.html>Cat Meme Store</a></h1></center>
            <form action="search.php" method="POST">
                <input class="search" type="text" placeholder="Enter Search Query" name="searchQuery">
                <button type="submit" class="search-button">Search</button>
            </form>
        </header>
        <hr>    
    <br>
    <br>
    <body> 
    <?php 
        $user = $_POST['logEmail'];
        $password = $_POST['logPW'];
        $file = fopen("users.txt", "r");
        $flag = FALSE;
        while(!(feof($file)))
        {
            $line= fgets($file);
            $line = rtrim($line);
            $info = explode(":", $line);
            if (($user == $info[1] ) && ( $password == $info[2] ))
            {
            $flag = TRUE;
            break;
            }
        }
        if ($flag)
            {
            print(" Welcome back $info[0]!"); 
            }

        else
        {
            print("Cannot find any account linked to that email. ");
        }

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
