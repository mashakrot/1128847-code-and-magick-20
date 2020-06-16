'use strict';

(function () {
  window.math = {
    getRandomElement: function (elements) {
      return elements[Math.floor(Math.random() * elements.length)];
    },

    getMaxElement: function (arr) {
      return Math.max.apply(null, arr);
    },

    getBlueColorWithRandomSaturation: function () {
      var randomNumber = (Math.floor(Math.random() * 100) + 1);
      return 'hsl(240,' + randomNumber + '%, 50%)';
    }
  };
})();
