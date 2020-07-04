$(function () {
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		asNavFor: '.slider-dots-head',
		prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.svg" alt="">'
	});
	$('.slider-dots-head').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		responsive: [
		{
			breakpoint: 768,
			settings: "unslick"
		}
		]
	});
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		asNavFor: '.slider__map',
		prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.svg" alt="">',
		responsive: [
		{
			breakpoint: 1210,
			settings: {
				slidesToShow: 3,
			}
		},
		{	breakpoint: 960,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			}
		},
		{	breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		},
		{	breakpoint: 401,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		}
		]
	});
	$('.slider__map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
		{	breakpoint: 1103,
			settings: {
				slidesToShow: 3,
				centerMode: true,
			}
		},
		{	breakpoint: 960,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			}
		},
		{	breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		}
		]
	});
	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.svg" alt="">'
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.quantity-button').on('click', function(event) {
		event.preventDefault();
		let summ = ($('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) * $('.summ').data('guests')-1);

		$('.summ').html('$'+ summ);
	});

	let summ = ($('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) * $('.summ').data('guests')-1);

	$('.summ').html('$'+ summ);

	$('.surboard-box__circle').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	$('.menu-btn').on('click', function(event) {
		event.preventDefault();
		$('.menu').toggleClass('active');
	});
	// new WOW().init();
	AOS.init({});
});