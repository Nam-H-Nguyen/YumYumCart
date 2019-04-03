$(document).ready(function () {
  // Scrolling down past the main viewport will show sticky navigation
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // When btn pressed, scroll to certain sections
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 500);
  });

  // Navigation link scrolls. CSS Snippet Tricks: Smooth Scrolling and Accessibility
  // Find all the a links starting with #, click it and if element exists, scrolls to it
  $(function () {
  $('a[href*="#"]:not([href="#"])').click( function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 1000);
        return false;
      }
    }
    });
  });

  // Animations on scrolls
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeInUpBig');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUpBig');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated bounceInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated rubberBand');
  }, {
    offset: '50%'
  });

  // Mobile navigation
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    // Open and close a box .200 seconds
    nav.slideToggle(200);
    if (icon.hasClass('ion-ios-menu')) {
      icon.addClass('ion-ios-close');
      icon.removeClass('ion-ios-menu');
    } else {
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close');
    }
  });
});
