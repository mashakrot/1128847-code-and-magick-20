'use strict';

(function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizardName = window.math.getRandomElement(window.constants.WIZARDS_NAMES) + ' ' + window.math.getRandomElement(window.constants.WIZARDS_SURNAMES);
    var wizardCoatColor = window.math.getRandomElement(window.constants.WIZARDS_COAT_COLORS);
    var wizardEyesColor = window.math.getRandomElement(window.constants.WIZARDS_EYES_COLORS);
    var item = {
      name: wizardName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyesColor
    };
    wizards.push(item);
  }
  window.generateWizards = {
    wizards: wizards
  };

  return window.generateWizards.wizards;
})(window.constants.NUMBER_OF_WIZARDS);

var getWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

(function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsFragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    wizardsFragment.appendChild(getWizard(wizard));
  });

  similarListElement.appendChild(wizardsFragment);
})(window.generateWizards.wizards);
