
jQuery(document).ready(function(){ 
	$('input, textarea').placeholder();
  
  $(".number_input").mask("+7 9999999999");
  
  /*$("#top_bar").headroom({
    "offset": 145
  });*/
  
  $('#main-menu').smartmenus({
    /*subIndicators: false,*/
    subIndicatorsText: '',
    mainMenuSubOffsetX: -1,
    subMenusSubOffsetX: 10,
    subMenusSubOffsetY: 0
  });
  
  $('#menu-button').click(function() {
    var $this = $(this),
        $menu = $('#main-menu');
    if (!$this.hasClass('collapsed')) {
      $menu.addClass('collapsed');
      $this.addClass('collapsed');
    } else {
      $menu.removeClass('collapsed');
      $this.removeClass('collapsed');
    }
    return false;
  }).click();
  
  /*$('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });*/
  
  $('.flexslider li a').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});
  
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    animationLoop: false,
    slideshow: false,
    prevText: '',
    nextText: '',
    smoothHeight:true
  });
    $('#main-menu a.scroll').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
  $(".popup_trigger_callback").click(function(e){
    e.preventDefault();
    var name = $(this).attr("name");
    var title = $(this).html();
    var btn_origin = $("#popup_callback input.btn_origin");	
		$(".overlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 0.2*$(window).height());	
    if (name != 'btn_portfolio' )
      { $("#popup_callback").find('.title').html(title); }
    else $("#popup_callback").find('.title').html('Получить качественный лендинг');
    
		$("#popup_callback").fadeIn();
		$('input, textarea').placeholder();	
    btn_origin.val(name);	
	});
	$(".popup_trigger_callback-calc").click(function(e){
    e.preventDefault();
    var name = $(this).attr("name");
    
    var btn_origin = $("#popup_callback input.btn_origin");	
		$(".overlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 0.2*$(window).height());	
    
    
		$("#popup_callback-calc").fadeIn();
		$('input, textarea').placeholder();	
    btn_origin.val(name);	
	});
  
  $(".popup_trigger_privacy").click(function(e){
    e.preventDefault();
    var title = $(this).html();
		$(".overlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 0.05*$(window).height());	
    $("#popup_privacy").find('.title').html(title);
		$("#popup_privacy").fadeIn();
	});
	
	$(".popup_close").click(function(){
		$(this).parent().fadeOut();
		$(".overlay").fadeOut();
	});

	$(".overlay").click(function(){
		$(".overlay, .popup").fadeOut();
	});
  
  $(document).on( "click", ".btn_close", function(e) {
    e.preventDefault();
    $(".overlay, .popup").fadeOut();
  });
  
});
$(window).scroll(function () {
	menuTop();
});
function menuTop(){
if ( $(this).scrollTop() > 180 && !$('#top_bar').hasClass('open') ) {
		$('#top_bar').addClass('fix-header');
		
		
	} else if ( $(this).scrollTop() <= 160 ) {
		$('#top_bar').removeClass('fix-header');
		
	}
}
