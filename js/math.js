'use strict';

(function () {
  var getRandomElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  var getMaxElement = function (arr) {
    return Math.max.apply(null, arr);
  };

  var getBlueColorWithRandomSaturation = function () {
    var randomNumber = (Math.floor(Math.random() * 100) + 1);
    return 'hsl(240,' + randomNumber + '%, 50%)';
  };

  var shuffleArray = function (elements) {
    var clonedElements = elements.slice();
    for (var i = elements.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var l = clonedElements[i];
      clonedElements[i] = clonedElements[j];
      clonedElements[j] = l;
    }
    return clonedElements;
  };

  window.math = {
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement,
    getBlueColorWithRandomSaturation: getBlueColorWithRandomSaturation,
    shuffleArray: shuffleArray
  };
})();
