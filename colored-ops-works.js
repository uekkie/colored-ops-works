// header, footerの色を変える
(function() {
  'use strict';

  var account = document.querySelector('#nav-usernameMenu .nav-elt-label,[data-testid="awsc-nav-account-menu-button"]').textContent;
  var background;
  if (/-prod/.test(account)) {
    background = '#d01246';
  } else if (/-stg/.test(account)) {
    background = '#298a08';
  }

  var selectors = ["#nav-menubar", "#nav-menu-right", "#console-nav-footer #awsc-nav-footer-content", '[data-testid="awsc-nav-header"] nav'];
  selectors.forEach(function(s) {
    var content = document.querySelector(s)
    if (content) {
      content.style.background = background;
    }
  })

  var selectors = document.querySelectorAll(".nav-menu");
  for (var i = 0; i < selectors.length; i++) {
    selectors[i].style.background = background;
  }
})();