$(function(){

    // GNB 시작 (세로형 1열) :slide
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(400);
    // });

    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(900);
    // });
    // GNB 끝 (세로형 1열)


    // GNB 시작 (세로형 2열)  :fade
    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(800);
    });

    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });
    // GNB 끝 (세로형 2열) 



    // SlideShow 시작 (세로형)
    // setInterval(fnSlide, 3000);

    // function fnSlide(){
    //     $("#shuttleFrame").animate(
    //         {"margin-top" : "-350px"},
    //         1600,
    //         function(){
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-top" : "0"});
    //              //this=#shuttleFrame 
    //         }
    //     );
    // }
    // SlideShow 끝 (세로형)


    // SlideShow 시작 (가로형)
    // setInterval(fnSlide, 3000);

    // function fnSlide(){
    //     $("#shuttleFrame").animate(
    //         {"margin-left" : "-780px"},
    //         1600,
    //         function(){
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-left" : "0"});
    //              //this=#shuttleFrame 
    //         }
    //     );
    // }
    // SlideShow 끝 (가로형)


     // SlideShow 시작 (교차 전환형)
     setInterval(fnSlide, 3000);

     function fnSlide(){
         $("#slide a").eq(0).fadeOut(
             500,
             function(){
                 $(this).insertAfter("#slide a:last-child")
             }
             );
         $("#slide a").eq(1).fadeIn(1000)
     }
      // SlideShow 끝 (교차 전환형)

}); //에밋