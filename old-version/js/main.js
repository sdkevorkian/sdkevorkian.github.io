  $(document).ready(function() {

      AOS.init();

      // pushpin nav
      $('#pin-this-nav').pushpin({
          // when you scroll past the offset of the nav from the top, then fix nav bar
          top: $('#pin-this-nav').offset().top
      });


      // smooth scroll
      $("a").on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
              // Store hash (ID tag to navigate to)
              var hash = this.hash;
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                  scrollTop: $(hash).offset().top - 30
              }, 1000, function() {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              });
          }
      });

      //active section lit up in navbar
      $(window).on("scroll", function() {
          var currentPos = $(window).scrollTop();

          $('nav li a').each(function() {
              var sectionLink = $(this);
              // capture the height of the navbar
              var navHeight = $('.nav-wrapper').outerHeight() + 1;
              var section = $(sectionLink.attr('href'));

              // subtract the navbar height from the top of the section
              if (section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
                  sectionLink.parent().addClass('active');
                  sectionLink.parent().siblings().removeClass('active');
              } else {
                  sectionLink.parent().removeClass('active');
              }
          });
      });
  });
