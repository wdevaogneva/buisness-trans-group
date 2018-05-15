$(document).ready(function(){
	//инициация анимационного файла WOW
		new WOW().init();

	// Маска ввода номера телефона (плагин maskedinput)
		$("#number").mask("+7 (999) 999-99-99");
		$("#number2").mask("+7 (999) 999-99-99");
		$("#number3").mask("+7 (999) 999-99-99");

	//раскрывающееся мобильное меню

	let link = $('.menu-mobil-link'),
			link_active = $('.menu-mobil-link_active'),
			menu = $('.menu-header');

	link.click(function(){
		//добавляем классы
		link.toggleClass('menu-mobil-link_active');
		menu.toggleClass('menu-header_mobil');
	});

	link_active.click(function(){
		//удаляем классы
		link.removeClass('menu-mobile-link_active');
		menu.removeClass('menu-header_mobil');
	});

	// раскрытие "Поиска"
	let btnFind = $('.button-find'),
			btnFind_active = $('.button-find_active'),
			findForm = $('.menu-find__form');

	btnFind.click(function(){
		//добавляем классы
		btnFind.toggleClass('button-find_active');
		findForm.toggleClass('menu-find__form_active');
	});

	btnFind_active.click(function(){
		//удаляем классы
		btnFind.removeClass('button-find_active');
		findForm.removeClass('menu-find__form_active');
	});

	//отправка почты
 	$('#main-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.overlay-thx').fadeIn();
	
			$(this).find('.main-form__input').val('');
			$('#main-form').trigger('reset');
		});
		return false;
	});	


	//главный слайдер
	$('.main-slider').slick({
		dots: true,
		dotsClass: 'slider-dots',
		arrows: true,
		slidesToShow: 1,
	 	slidesToScroll: 1,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right"></div>',
	 	autoplay: true,
	  autoplaySpeed: 5000,
	  responsive: [
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
	});


	// слайдер экспорт-импорт
	$('.exp-imp-slider').slick({
		dots: false,
		fade: true,
		arrows: true,
		slidesToShow: 1,
	 	slidesToScroll: 1,
	 	prevArrow: '<div class="slider-arrow slider-arrow_exp slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow_exp slider-arrow__right"></div>',
	 	autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
	});

	// слайдер со страницы новостей
	$('.new-direct-slider__top').slick({
	 	arrows: false,
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	fade: true,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left slider-arrow__left_news"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right slider-arrow__right_news"></div>',
	 	asNavFor: '.new-direct-slider__bottom',
	 	autoplay: true,
	  autoplaySpeed: 4000,
	 	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	      }
	    }
	  ]

	});


	$('.new-direct-slider__bottom').slick({
	 	arrows: true,
	 	slidesToShow: 4,
	 	slidesToScroll: 1,
	 	focusOnSelect: true,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left_news slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right_news slider-arrow__right"></div>',
	 	asNavFor: '.new-direct-slider__top',
	 	responsive: [
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	 
	  ]

 		});

	//открытие,закрытие и отправка на почту из мод.окна Быстрая заявка
	$('.button-main').on("click", function(){
		$('.overlay-fast').show();
	});

	$('.popup-close').on("click", function(){
		$('.overlay-fast').hide();
	});	

	$(document).mouseup(function (e) {
	    var popup = $('.popup');
	    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	        $('.overlay-fast').fadeOut();
	    }
	});

	$('#main-form-fast').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart-fast.php",
			data: $(this).serialize()
		}).done(function() {
			$('.overlay-thx').fadeIn();

			$(this).find('.main-form__input').val('');
			$('#main-form-fast').trigger('reset');
		});
		return false;
	});	

	//открытие,закрытие и отправка на почту из мод.окна Заказать звонок
	$('.button-o-header').on("click", function(){
		$('.overlay-call').show();
	});

	$('.popup-close').on("click", function(){
		$('.overlay-call').hide();
	});	

	$(document).mouseup(function (e) {
	    var popup = $('.popup-call');
	    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	        $('.overlay-call').fadeOut();
	    }
	});

	$('#main-form-call').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart-call.php",
			data: $(this).serialize()
		}).done(function() {
			$('.overlay-thx').fadeIn();

			$(this).find('.main-form__input').val('');
			$('#main-form-call').trigger('reset');
		});
		return false;
	});	


	// Закрытие окна «спасибо»
	$('.popup-close-thx').click(function() { // по клику на крестик
		$('.overlay-thx').fadeOut();
	});

	$(document).mouseup(function (e) { // по клику вне попапа
	    var popup = $('.popup-thx');
	    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	        $('.overlay-thx').fadeOut();
	    }
	});


	//отправка отзыва + благодарность за отзыв
	   
 	$('#feedback-form').submit(function() {
 		$.ajax({
 			type: "POST",
 			url: "mailer/smart-feedback.php",
 			data: $(this).serialize()
 		}).done(function() {
 			$('.overlay_feedback-thx').fadeIn();
 			$(this).find('.feedback-form__input').val('');
 			$('#feedback-form').trigger('reset');
 		});
 		return false;
 	});	
	

});

//прелоадер
$(window).on('load', function () {
	$('#my-preloader').delay(500).fadeOut('slow');
});





