// Menu opener hamburger

$(function() {
	//Preloader
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

	//Smooth Scrolling
	$(".more-btn").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	//Menu Open Hamburger
	$('.hamburger, .menu-opened a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu__list').toggleClass('menu-opened');
    });

    //Arctic Modal
    $('.call-btn').click(function (e) {
        e.preventDefault();
        $('#callModal').arcticmodal();
    });

    //Slider
    $('.single-item').slick({
    	dots: true,
    	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });
})