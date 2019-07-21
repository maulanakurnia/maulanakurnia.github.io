var skillsDiv = jQuery('#skills');

jQuery(window).on('scroll', function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery('.progress-horizontal').each(function() {
      jQuery(this).find('.progress-horizontal__progress').animate({
        width: jQuery(this).attr('data-percent')
      }, 6000);
    });
  }
});
