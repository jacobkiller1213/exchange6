document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document.querySelector('.main-menu-btn')
	const body = document.querySelector('body')

	menuBtn.addEventListener('click', () => {
		body.classList.toggle('menu-open')
	})

	// js-select
	const selects = document.querySelectorAll('.js-select')

	selects.forEach(function (select) {
		const btn = select.querySelector('.js-select-btn')
		const modal = select.querySelector('.js-select-modal')

		btn.addEventListener('click', function (e) {
			e.preventDefault()
			// add class select is-open
			select.classList.toggle('is-open')
		})

		document.addEventListener('click', function (e) {
			if (!select.contains(e.target)) {
				select.classList.remove('is-open')
			}
		}	)
	})

	//Accordion
	const accordions = document.querySelectorAll('.js-accordion')

	accordions.forEach(function (accordion) {
		const btns = accordion.querySelectorAll('.js-accordion-item__btn')
		const contents = accordion.querySelectorAll('.js-accordion-item__content')

		btns.forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault()
				const parent = this.closest('.js-accordion-item')
				contents.forEach(function (content) {
					if (content !== btn.nextElementSibling) {
						content.style.maxHeight = null
						content.parentElement.classList.remove('active')
					}
				})

				const content = this.nextElementSibling
				if (content.style.maxHeight) {
					content.style.maxHeight = null
					parent.classList.remove('active')
				} else {
					content.style.maxHeight = content.scrollHeight + 'px'
					parent.classList.add('active')
				}
			})
		})
	})

	//show more home reserve
	const showMoreReserve = document.querySelectorAll('.show-more-reserve');
	const homeReserveItems = document.querySelectorAll('.home-reserve .reserve-item.to-hide');

	showMoreReserve.forEach((link)=>{
		link.addEventListener('click', function (e) {
			e.preventDefault();

			if (e.target.text === e.target.dataset.hideText) {
				showMoreReserve.forEach(v=>{
					v.text = e.target.dataset.showText
				})
			} else {
				showMoreReserve.forEach(v=>{
					v.text = e.target.dataset.hideText
				})
			}

			homeReserveItems.forEach((v)=>{
				v.classList.toggle('hidden')
			})
		})
	})

})

jQuery(function($){

	return

/* fix div */
	function fix_div(){
		var hei = parseInt($('html').css('marginTop'));
		var npos = $(window).scrollTop();
		var wid = $(window).width();
		
		$('.fix_div').each(function(){
			var one = parseInt($(this).offset().top) - hei;
			var to_fix = $(this).attr('fix-id');
			var plus_fix = parseInt($(this).attr('fix-top'));
			if(wid >= 310){
				if(npos > one){
					$('#'+to_fix).css({'position': 'fixed', 'top': (hei+plus_fix)}).addClass('fix_elem');
				} else {
					$('#'+to_fix).css({'position':'absolute', 'top': '0px'}).removeClass('fix_elem');
				}				
			} else {
				$('#'+to_fix).css({'position':'absolute', 'top': '0px'}).removeClass('fix_elem');
			}	
		});
	}

	$(window).on('scroll', function(){
	    fix_div();
	});
	$(window).on('resize', function(){
		fix_div();
	});
	$(document).ready(function(){
		fix_div();
	});
	fix_div();
/* end fix div */

/* social link */
	$('.social_link').on('click', function(){
		var link_url = $(this).attr('href');
		window.open(link_url,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		
		return false;
	});
/* end social link */

/* lang */
	$('.langlist_title').on('click', function(){
		$('.langlist_ul').toggle();
	});
	
    $(document).on('click', function(event) {
        if ($(event.target).closest(".langlist_title, .langlist_ul").length) return;
		$('.langlist_ul').hide();
    });		
/* end lang */

	$('.topbar_icon_tab').on('click',function(){
		$('.topbar_icon_tabul').addClass('open');
	});
	
    $(document).on('click', function(event) {
		if($(event.target).closest(".topbar_icon_tab, .topbar_icon_tabul").length) return;
		$('.topbar_icon_tabul').removeClass('open');
    });
	
	function contacts_menu(){
		$('.topbar_icon_wrap').removeClass('adaptive');
		var hei_start = $('.topbar').height();
		$('.topbar_icon').show();
		var hei_now = $('.topbar_contain').height();
		if(hei_now > hei_start){
			$('.topbar_icon_wrap').addClass('adaptive');
		} 
	}

	$(window).on('scroll', function(){
		contacts_menu();
	});
	$(window).on('resize', function(){
		contacts_menu();
	});
	$(document).ready(function(){
		contacts_menu();
	});
	contacts_menu();

	$('.js_menu li').hover(function(){
	    $(this).find('ul:first').show('drop');
	}, function(){
	    $(this).find('ul:first').stop(true,true).hide();
	});	
	
	$('.js_menu li a').on('click', function(){
		var href = $(this).attr('href');
		if(href == '#'){
			return false;
		}
	});
	
	$('.sub-menu').append('<div class="ugmenu"></div>');

	var content_menu = $('.js_menu').html();
	$('.mobile_menu_inner').html(content_menu);
	
	$('.topmenu_ico').on('click', function(){
		$('.mobile_menu_abs, .mobile_menu').show();
	});
	$('.mobile_menu_close').on('click', function(){
		$('.mobile_menu_abs, .mobile_menu').hide();
	});
	
	$('table').each(function(){ 
	    $(this).find('th:first').addClass('th1');
		$(this).find('th:last').addClass('th2');
	    $(this).find('tr:last').find('td:first').addClass('td1');
		$(this).find('tr:last').find('td:last').addClass('td2');	
	});		
	
	$(document).on('click', '.js_shwohide_items', function(){
		var par = $(this).parents('.js_shwohide_wrap');
		var title_no = $(this).attr('data-no');
		var title_yes = $(this).attr('data-yes');
		if($(this).hasClass('active')){
			par.find('.js_shwohide_item.hide_item').hide();
			$(this).html(title_no);			
		} else {
			par.find('.js_shwohide_item.hide_item').show();
			$(this).html(title_yes);
		}
		$(this).toggleClass('active');
		
		return false;
	});	
	
	$(document).JcheckboxInit();
	$(document).Jcheckbox();
	
	$(document).Jselect('init', {trigger: '.js_my_sel', class_ico: 'currency_logo'});
	
	$(document).AdaptiveTable();
});