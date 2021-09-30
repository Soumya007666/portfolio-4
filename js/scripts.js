// Active Links
$(".navbar-nav .nav-item .nav-link").click(function(){
$(".nav-item .nav-link").removeClass("active");
$(this).addClass("active");
});

// Navbar Color Change on Scroll
$(window).scroll(function(){
$('nav').toggleClass('scrolled', $(this).scrollTop() > 100)
});

// Highlight Link on Scroll
(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();