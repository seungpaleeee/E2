$(function(){

    //menu

    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main > li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    })

    //slide

    var n = 0; //0(top:0) 1(top-900) 2(top-1800)

    setInterval(function(){
        if( n < 2){
            n++;
        }else{
            n=0;
        }

        console.log("n : ", n)

        pos = n * (-900) + "px"

        $(".top_move").animate( {top : pos}, 500)

    }, 3000)

    //pop
    $(".p_click").click(function(){
        $(".modal , .pop").show();
    })
    $(".close").click(function(){
        $(".modal , .pop").hide();
    })


})