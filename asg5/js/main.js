$(document).ready(function(){
    $(".btn1").click(function(){
      $("#special").css("color", "green");
      $(".highlight").css("background-color", "yellow");
      $( ".text" ).each(function() {
        $(this).css("color", "white" );
        $(this).css("background-color", "red");
        $(this).css("border-style", "dotted");
        alert($(this).html());
      });
    });
    $(".btn2").click(function(){
        $("#img1").hide();
    });
    $(".btn3").click(function(){
        $("#img1").show();
    });
    $(".btn4").click(function(){
        $("#img1").fadeOut(2000);
    });
    $(".move").click(function(){
        if($(".box").position() < 0){
            $(".box").position() = 2000;
            $(".box").height() = 20;
            $(".box").width() = 20;
        }
        $(".box").css({left: $(".box").position().left-300});
        $(".box").css({height: $(".box").height()+20});
        $(".box").css({width: $(".box").width()+20});
        $(".box").fadeTo("slow", 0.25);
    });
    $("input").change(function(){
        if($("#username").val() == '' ||$("#username").val() == ' ' ){
            $("#username").on('focus', function(){
                $("#username").css("background-color", "yellow");
            });
            alert("You must input a value.");
        }
        if($("#password").val() == '' || $("#password").val() == ' '){
            $("#password").on('focus', function(){
                $("#password").css("background-color", "yellow");
            });
            alert("You must input a value.");
        }
        else{
            let htmlString = "Username: "+ $("#username").val() + " | Password: "+ $("#password").val();
            $("#demo").text(htmlString);
        }
    });
});

