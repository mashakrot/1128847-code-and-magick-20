'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;

var showSetupWindow = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var generateWizards = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizardName = getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES);
    var wizardCoatColor = getRandomElement(WIZARDS_COAT_COLORS);
    var wizardEyesColor = getRandomElement(WIZARDS_EYES_COLORS);
    var item = {
      name: wizardName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyesColor
    };
    wizards.push(item);
  }
  return wizards;
};

var getWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsFragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    wizardsFragment.appendChild(getWizard(wizard));
  });

  similarListElement.appendChild(wizardsFragment);
};

showSetupWindow();

var wizards = generateWizards(NUMBER_OF_WIZARDS);

renderWizards(wizards);
