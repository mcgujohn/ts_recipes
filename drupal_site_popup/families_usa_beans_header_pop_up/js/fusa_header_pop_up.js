(function ($) {
  Drupal.behaviors.fusa_header_pop_up= {
    attach: function (context, settings) {
      // Define cookie name based on header_pop_up block being rendered
      var $cookie_name = $(".header_pop_up").attr("id");
      // If cookie is not already present, create it
      if ($.cookie($cookie_name) != 1) {
        // Create cookie that expires 30 days from now and is valid across entire site
        $.cookie($cookie_name, '1', { expires: 30, path: '/' });
      }
      // If cookie is present, hide header pop-up
      else {
        $('.header_pop_up').remove();
      }
    }
  }
}(jQuery));