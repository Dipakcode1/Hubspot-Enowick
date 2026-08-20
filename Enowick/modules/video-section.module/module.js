// Video Section Module JS
(function() {
  // Magnific popup integration if available
  if (typeof jQuery !== 'undefined' && jQuery.fn.magnificPopup) {
    jQuery('.popup-video').magnificPopup({
      type: 'iframe'
    });
  }
})();
