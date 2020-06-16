'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var onCoatClick = function () {
    var coatColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');

    var color = window.getRandomElement(window.constants.WIZARDS_COAT_COLORS);
    wizardCoat.style = 'fill: ' + color;
    coatColorInput.value = color;
  };

  var onEyesClick = function () {
    var eyesColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');

    var color = window.getRandomElement(window.constants.WIZARDS_EYES_COLORS);
    wizardEyes.style = 'fill: ' + color;
    eyesColorInput.value = color;
  };

  var onFireballClick = function () {
    var fireballColorInput = wizardFireball.querySelector('input');

    var color = window.getRandomElement(window.constants.FIREBALL_COLOR);
    wizardFireball.style = 'background: ' + color;
    fireballColorInput.value = color;
  };

  var hangUpCoatColorHandler = function () {
    wizardCoat.addEventListener('click', onCoatClick);
  };

  var hangUpEyesColorHandler = function () {
    wizardEyes.addEventListener('click', onEyesClick);
  };

  var hangUpFireballColorHandler = function () {
    wizardFireball.addEventListener('click', onFireballClick);
  };

  hangUpCoatColorHandler();
  hangUpEyesColorHandler();
  hangUpFireballColorHandler();
  // Или может стоило разделить этот модуль на несколько модулей?
})();
