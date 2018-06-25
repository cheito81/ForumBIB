$(document).ready(function(){

    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'easeout');
    });

});

function newFunction(scroll) {
    if (scroll > 50) {
        $("h3").addClass(".section-title");
    }
    else {
        $("h3").removeClass(".section-title");
    }
}