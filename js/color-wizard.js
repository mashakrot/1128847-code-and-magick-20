'use strict';

(function () {
  var getRandomElement = window.math.getRandomElement;

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var onCoatChange = function (color) {};
  var onEyesChange = function (color) {};
  // Здесь Eslint возмущается и я не знаю что с этим можно сделать..

  var wizard = {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange
  };

  var onCoatClick = function () {
    var coatColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');

    var color = getRandomElement(window.constants.WIZARDS_COAT_COLORS);
    wizard.onCoatChange(color);

    wizardCoat.style = 'fill: ' + color;
    coatColorInput.value = color;
  };

  var onEyesClick = function () {
    var eyesColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');

    var color = getRandomElement(window.constants.WIZARDS_EYES_COLORS);
    wizard.onEyesChange(color);

    wizardEyes.style = 'fill: ' + color;
    eyesColorInput.value = color;
  };

  var onFireballClick = function () {
    var fireballColorInput = wizardFireball.querySelector('input');

    var color = getRandomElement(window.constants.FIREBALL_COLOR);
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

  window.wizard = wizard;
})();
