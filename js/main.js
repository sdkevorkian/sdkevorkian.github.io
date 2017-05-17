  $(document).ready(function() {
      $('#pin-this-nav').each(function() {
          var $this = $(this);
          var $target = $('#' + $(this).attr('data-target'));
          $this.pushpin({
              top: $target.offset().top + $target.outerHeight() + 18
          });
      });
  });
