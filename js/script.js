$(function(){

    //메뉴 방법 1
// $(".main > li").hover(function(){
//     $(this).find(".sub").stop().show();
// }, function(){
//     $(this).find(".sub").stop().hide();
// })

    //메뉴 방법2 
$(".main > li").mouseover(function(){
    $(this).find(".sub").stop().show();
})
$(".main > li").mouseout(function(){
    $(this).find(".sub").stop().hide();
})

// //이미지 슬라이드 방법 1
// var n=0;
// setInterval(function(){
//     if(n == 2){
//         n=0;
//     }else{
//         n++;
//     }
//     pos = n * -800 + "px";
// console.log(pos)
// $(".left_move").animate({left:pos},500);
// },2000)

//이미지 슬라이드 방법 2
setInterval(function(){
    $(".left_move").animate({left:"-800px"}, 500, function(){
        $(".left_move").css({left:"0"});
        $(".left_move").append($(".left_move li").first())
    })
},3000)




//팝업
$(".p_click").click(function(){
    $(".pop").fadeIn();
})
$(".close").click(function(){
    $(".pop").fadeOut();
})


})//jquery