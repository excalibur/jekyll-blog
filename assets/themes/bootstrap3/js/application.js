$(document).ready(function() {
  'use strict';
  $("html").niceScroll();
  return $('.disabled a').click(function() {
    return false;
  });
});
