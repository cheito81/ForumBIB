$(document).ready(function(){
    $("#ponentMenu").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop:'2250'}, '2000');
        return false;
    });
    var scroll = $(document).scrollTop();
    $(document).scroll(function (e) { 
        e.preventDefault();
        document.title=scroll;
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

