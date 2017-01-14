$(function(){

    var $navContainer = $('.nav-container'),
        $navLogo = $navContainer.find('.nav-logo'),
        $navElements = $navContainer.find('.nav-element'),
        $ribbon = $navContainer.find('.ribbon'),
        $heroTitle = ('.hero-title'),
        tl = new TimelineMax();

      tl
        .from($navContainer, .5, {y:20, scale: 1.02,autoAlpha: 0, ease: Power0.easeOut})
        .to($ribbon,1, {width: '100%', ease: Power3.easeIn},.3)
        .set($ribbon,{left:0})
        .to($ribbon,1, {width: '20', ease: Power3.easeIn},1.7)
        .from($navLogo, .5, {y:10, autoAlpha: 0, ease: Power0.easeOut}, 2.5)
        .staggerFrom($navElements, .5, {y:10, autoAlpha: 0, ease: Power0.easeOut}, .2)
        .from($heroTitle,1, {y:20, autoAlpha:0, ease: Power3.easeIn})



    //Nav Animation
    var $navElement = $('.nav-element');

    $navElement.on("click", function(){
      $(this).addClass('current-nav');
      $(this).siblings().removeClass('current-nav');

      });


    // Quote Section Animation
    var $quoteBackground = $('.quote-wrapper'),
        $airQuote = $quoteBackground.find('.airquote'),
        $quote = $quoteBackground.find('.quote'),
        $quoteAuthor = $quoteBackground.find('.author'),
        controller = new ScrollMagic.Controller();


        tl
        .from($quoteBackground,1, {width:'0%', ease: Power3.easeIn})
        .from($airQuote, 2, {autoAlpha:0, y:30, ease:Power4.easeOut})
        .from($quote, 2, {autoAlpha:0, y:30, ease:Power4.easeOut}, '-=1.5')
        .from($quoteAuthor, 2, {autoAlpha:0, y:30, ease:Power4.easeOut}, '-=1.6')



    var scene = new ScrollMagic.Scene({
            triggerElement: '.quote-wrapper',
            //duration: 5000
            triggerHook: 0.7,
            reverse: false
        })
        .setClassToggle('.quote-wrapper', 'scaleup')
        //.setTween(quoteTween)
        .addTo(controller);
});
