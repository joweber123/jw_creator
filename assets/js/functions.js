$(window).load(function() {
	$(".loader").fadeOut(1);
  $(".whole-page").fadeIn("slow");
});

$(window).on("orientationchange",function() {
  location.reload();
});
