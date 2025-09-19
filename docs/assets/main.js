/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/******/(function () {
  // webpackBootstrap
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
  (function () {
    // Reading progress bar on top of every post
    var progressBar = document.getElementById("progress-bar");
    var setProgressBar = function setProgressBar() {
      var scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
      var progressWidth = scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight) * 100;
      progressBar.style.width = progressWidth + "%";
    };
    if (progressBar) {
      window.addEventListener("scroll", setProgressBar);
    }
  })();

  /* 
  * Hanging Punctuation from https://webdesign.tutsplus.com/getting-the-hang-of-hanging-punctuation--cms-19890a
  * This function takes a DOM element, 
  * searches each of its direct descendants, 
  * and, if the element begins with hangable punctuation, 
  * the appropriate HTML class is applied to the element. 
  * 
  * Then the parent DOM element gets a class to activate 
  * the child classes we applied. 
  */
  function hangPunctuation(container) {
    // Punctuation marks that qualify to be hung 
    var marks = {
      "\u201C": 'medium',
      // “ - ldquo - left smart double quote 
      "\u2018": 'small',
      // ‘ - lsquo - left smart single quote 
      "\"": 'medium',
      // " - ldquo - left dumb double quote 
      "'": 'small',
      // ' - lsquo - left dumb single quote 
      "\xAB": 'large',
      // « - laquo - left double angle quote 
      "\u2039": 'medium',
      // ‹ - lsaquo - left single angle quote 
      "\u201E": 'medium',
      // „ - bdquo - left smart double low quote 
      "\u201A": 'small',
      // ‚ - sbquo - left smart single low quote 
      "(": 'medium',
      // ( - left parenthesis
      "#": 'large' // # - number sign aka hashtag
    };

    // Loop over all direct descendants of the container 
    // If it's a blockquote, loop over its direct descendants 
    for (i = 0; i < container.children.length; i++) {
      var el = container.children[i];
      if (el.tagName === 'BLOCKQUOTE') {
        for (var k = 0; k < el.children.length; k++) {
          hangIfEligible(el.children[k]);
        }
        ;
      } else {
        hangIfEligible(el);
      }
    }
    // Check to see if the passed-in element 
    // begins with one of the qualifying punctuation types 
    // If it does, apply the appropriate class depending on the tag type 
    function hangIfEligible(el) {
      var text = el.innerText || el.textContent;
      var htmlClass = 'indent-';
      for (var mark in marks) {
        if (text.indexOf(mark) === 0) {
          if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5') htmlClass += 'header-';
          el.classList.add(htmlClass + marks[mark]);
        }
      }
    }
  }
  window.onload = function () {
    var container = document.querySelector('.post__content');
    hangPunctuation(container);
    container.classList.add('hang-punctuation');
  };

  // Active state when TOC header is scrolled to, from https://stackoverflow.com/questions/65954297/highlighting-item-in-table-of-contents-when-section-is-active-on-page-as-scrolli
  var anchors = document.querySelectorAll('h2');
  var links = document.querySelectorAll('aside > nav > ol > li > a');
  window.addEventListener('scroll', function (event) {
    if (typeof anchors != 'undefined' && anchors != null && typeof links != 'undefined' && links != null) {
      var scrollTop = window.scrollY;

      // highlight the last scrolled-to: set everything inactive first
      links.forEach(function (link, index) {
        link.classList.remove("active");
      });

      // then iterate backwards, on the first match highlight it and break
      for (var i = anchors.length - 1; i >= 0; i--) {
        if (scrollTop > anchors[i].offsetTop - 75) {
          links[i].classList.add('active');
          break;
        }
      }
    }
  });

  // Add CSS class to body if font size or zoom set to large
  function getComputedFontSize() {
    var para = document.querySelector('p');
    var compStyles = window.getComputedStyle(para);
    var fontSize = compStyles.getPropertyValue('font-size');
    var fontNum = parseInt(fontSize.split('px')[0]);
    if (fontNum >= 24.5) {
      document.body.classList.add('font-large');
    }
  }
  ;
  getComputedFontSize();

  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (function () {
    "use strict";

    // extracted by mini-css-extract-plugin
  })();

  /******/
})();
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;