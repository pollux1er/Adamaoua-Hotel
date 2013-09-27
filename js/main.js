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
    });
