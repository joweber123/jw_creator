$(window).load(function() {
	$(".loader, .loader-text").fadeOut(1);

  $(".whole-page").fadeIn("slow");
});

$(window).on("orientationchange",function() {
  location.reload();
});
