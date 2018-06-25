$(document).ready(function(){

    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'easeout');
    });
     $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        newFunction(scroll);
    });
    
});

function newFunction(scroll) {
    if (scroll > 50) {
        $("nav").addClass(".navbar-solid");
    }
    else {
        $("nav").removeClass(".navbar-solid");
    }
}