 $(document).ready(function(){


$(".top-button").click(function(){
    $("html, body").animate({
        "scrollTop" : "0"
    }, 500)
});


$(window).scroll(function(){
    var scrollValue = $(this).scrollTop();

    if(scrollValue >= 250){
        $(".top-button").fadeIn();
    }else {
        $(".top-button").fadeOut();
    };
});



 });
