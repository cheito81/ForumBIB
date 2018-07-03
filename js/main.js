$(document).ready(function(){

    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    
    var href = $(this).attr('href');
    console.log(href);
    if (href!='#inicio') {
        $('html, body').animate({ scrollTop : ($( href ).offset().top)-45 }, 'slow');
    } else {
        $('html, body').animate({ scrollTop : '0' }, 'ease-in');
    }
    
    });
   
});
$('a').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
});
/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>400){
        $('#site-nav').addClass('bg-light').fadeIn( "slow" ); 
        $('#site-nav').addClass('navbar-light').fadeIn( "slow" );
	}
	else{
        $('#site-nav').removeClass('bg-light'); 
        $('#site-nav').removeClass('navbar-light'); 
	}
}
