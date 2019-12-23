<!DOCTYPE html>
    <head>
        <title>Assignment 7</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
        <center><h1><a href=index.html>Cat Meme Store</a></h1></center>
    <br>
    <br>
    <body> 
    <?php 
        $query = $_POST['search'];
        $file = fopen("shopping.txt", "r");
        $flag = FALSE;
        while(!(feof($file)))
        {
            $line= fgets($file);
            $line = rtrim($line);
            $info = explode(":", $line);
            if (($query == $info[0] ))
            {
            $flag = TRUE;
            break;
            }
        }
        if ($flag)
        {
            print("$info[0] <br> $info[1] <br> $info[2] <br> $info[3] Items Available <br> <a href=\"index.html\">Return to Homepage</a>"); 
        }
        else
        {
            print("Product Not Found<br><a href=\"index.html\">Return to Homepage</a>");
        }  
    ?>
    <script src="js/main.js"></script>
    </body>
</html>
