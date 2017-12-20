$(window).load(function() {
	$(".loader, .loader-text").fadeOut(1);
  $(".whole-page").fadeIn("slow");
});

$(window).on("orientationchange",function() {
  location.reload();
});

$('.language-selector .language-selector-child').on('click',function(){
   var eq = $(this).index();
   $('.about-description').removeClass('show');
   $('.about-description').eq(eq).addClass('show');
	 $('.bio-more-child').removeClass('show');
   $('.bio-more-child').eq(eq).addClass('show');


});
$('.bio-more-button').on('click',function(){
   $('.bio-more-container').toggle(200);




});
