$(document).ready(function () {
    var upval, downval, leftval, rightval, tileNumber, positionNumber,ch,chu,rt,tr,dh=0;
    //window.numberOfMoves = sessionStorage.getItem("noOfMoves") ? parseInt(sessionStorage.getItem("noOfMoves")) : 0
   var count=0;
    $("button").click(function () {
     dh=dh+1;
        tileNumber = $(this).text();
        positionNumber = $(this).val();
        if(dh==1)
                {
                    rt=positionNumber;
                    ch=$("#"+positionNumber).text();
                }
            if(dh==2)
                {
                    tr=positionNumber;
                    chu=$("#"+positionNumber).text();
                    dh=0;
                }
            if(dh!=1)
                {
                    count=count+1;
                    $("#" + rt).text(tileNumber);
                    $(this).text(ch);
                }

       /* if (tileNumber == "") {
            window.numberOfMoves = parseInt(window.numberOfMoves + 1)

            if ((positionNumber != 1) && (positionNumber != 2) && (positionNumber != 3)) {
                upval = eval(eval(positionNumber) - eval(3));
                var upTxt = $("#" + upval).text();
                if (upTxt == "") {
                    $("#" + upval).text(tileNumber);
                    $(this).text("");
                }
            }
            if ((positionNumber != 7) && (positionNumber != 8) && (positionNumber != 9)) {
                downval = eval(eval(positionNumber) + eval(3));
                var downTxt = $("#" + downval).text();
                if (downTxt == "") {
                    $("#" + downval).text(tileNumber);
                    $(this).text("");
                }
            }
            if ((positionNumber != 1) && (positionNumber != 4) && (positionNumber != 7)) {
                leftval = eval(eval(positionNumber) - eval(1));
                var leftTxt = $("#" + leftval).text();
                if (leftTxt == "") {
                    $("#" + leftval).text(tileNumber);
                    $(this).text("");
                }
            }
            //edited
            if ((positionNumber != 3) && (positionNumber != 6) && (positionNumber != 9)) 
            {
                rightval = eval(eval(positionNumber) + eval(1));
                var RTxt = $("#" + rightval).text();
                if (RTxt == "") {
                    $("#" + rightval).text(tileNumber);
                    $(this).text("");
                }
            }
            //var ch=$("#"+positionNumber).text();
            //var ch=$()
            
            
            var one = $("#1").text();
            var two = $("#2").text();
            var three = $("#3").text();
            var four = $("#4").text();
            var five = $("#5").text();
            var six = $("#6").text();
            var seven = $("#7").text();
            var eight = $("#8").text();
            var nine = $("#9").text();

            if (isGameOver(one, two, three, four, five, six, seven, eight, nine)) {
                alert("Congratulations You Won The Game... :) ");
                $("button").attr("disabled", "disabled");
            }
        }*/
        console.log(window.numberOfMoves)
        $('.count').text(count);
        sessionStorage.setItem("noOfMoves", parseInt(window.numberOfMoves))
    });

    $('.count').text(window.numberOfMoves)

  /*  function isGameOver(one, two, three, four, five, six, seven, eight, nine) {
        if(one=="1" && two=="2" && three=="3"&& four=="4"&& five=="5"&& six=="6"&& seven=="7"&& eight=="8" && nine=="")
            
            {
                return true;
            }
        else{
            return false;
        }
        //Your Code Goes Here
    }*/

});