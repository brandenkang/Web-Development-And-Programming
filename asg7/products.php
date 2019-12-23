<!DOCTYPE html>
<head>
        <title>Assignment 7</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
        <center><h1><a href=index.html>Cat Meme Store</a></h1></center>
    <br>
    <body>  
    <?php
    // get all values from form using foreach loop  

    $line = "";
    print("<h2>Thanks for Shopping with Us! Here are your details!</h2>");
    foreach ($_POST as $key => $value)
    {
    // form line with one value at a time when you go through the loop
    if($value != '0')
        {
        $line .= $value . ":";
    
    if($key == "CreditCardNo"){
        $arr = str_split($value);
        $val2 = "xxxxxxxxxxxx".$arr[12].$arr[13].$arr[14].$arr[15];
        print("<li> $key: $val2 ");
    }
    else{
        print("<li> $key: $value ");
        }
    }
    }
    $filea = fopen("db.txt","a") or die("error in opening file");
    fwrite($filea, $line);
    fclose($filea);
    ?>    
    <script src="js/main.js"></script>
    </body>
</html>
