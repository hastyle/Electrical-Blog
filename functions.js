$(function(){

  var $MiddleCircle = $('.middle-circle-container'),
      $category = $('.category'),
      $SiteTitle = $('.site-title'),
      tl = new TimelineMax();

    tl.from($SiteTitle, 1, {x:50, autoAlpha:0, ease: Power2.easeOut});
    tl.from($MiddleCircle, 1, {scale:0, ease: Bounce.easeOut});
    tl.staggerFrom($category, 1, {y:50, autoAlpha:0, ease: Power2.easeOut}, 0.2);


});
