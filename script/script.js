$(function(){

    // GNB 시작 (세로형 1열)
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(400);
    // });

    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(900);
    // });
    // GNB 끝 (세로형 1열)


    // GNB 시작 (세로형 2열)
    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(600);
    });

    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });
    // GNB 끝 (세로형 2열) 



});