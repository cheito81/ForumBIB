$(document).ready(function(){
    //$('#idioma').addClass('idiomaInicio');
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    
    var href = $(this).attr('href');
    if (href!='#inicio') {
        $('html, body').animate({ scrollTop : ($( href ).offset().top)-45 }, 'slow');
    } else {
        $('html, body').animate({ scrollTop : '0' }, 'slow');
    }
    
    });
    $('.up').hide(); 
});
$('a').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
});

/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	navAnimation();
});

/**$(window).load(function(){
	navAnimation();
});*/

function navAnimation() {
	var top=$(window).scrollTop();

	if(top>400){
        $('#site-nav').addClass('bg-light').fadeIn( "slow" ); 
        $('#site-nav').addClass('navbar-light').fadeIn( "slow" );
        $('.up').show(700);
        //$('#idioma').addClass('idiomaInicio');
	}
	else{
        $('#site-nav').removeClass('bg-light'); 
        $('#site-nav').removeClass('navbar-light'); 
        $('#site-nav').addClass('navCustom').fadeIn( "slow" );
        //$('#idioma').removeClass('idiomaInicio').addClass('idioma');
        $('.up').hide(700);
	}
}
