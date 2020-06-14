'use strict';

window.math = {
  getRandomElement: function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  },

  getMaxElement: function (arr) {
    return Math.max.apply(null, arr);
  }
};
