$(window).load(function(){
  $('#carousel').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: false,
	slideshow: false,
	itemWidth: 110,
	itemMargin: 2,
	asNavFor: '#slider'
  });

  $('#slider').flexslider({
	animation: "fade",
	controlNav: false,
	animationLoop: true,
	slideshow: true,
	sync: "#carousel",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
  
  $("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
  });
});
