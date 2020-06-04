'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var showSetupWindow = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

showSetupWindow();

var similarListElement = document.querySelector('.setup-similar-list');

var getIndexOfRandomElement = function (elements) {
  return Math.floor(Math.random() * elements.length);
};

var getSimilarWizardsList = function (quantity) {
  var listOfWizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizardName = WIZARDS_NAMES[getIndexOfRandomElement(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[getIndexOfRandomElement(WIZARDS_SURNAMES)];
    var wizardCoatColor = WIZARDS_COAT_COLORS[getIndexOfRandomElement(WIZARDS_COAT_COLORS)];
    var wizardEyesColor = WIZARDS_EYES_COLORS[getIndexOfRandomElement(WIZARDS_EYES_COLORS)];
    var items = {
      name: wizardName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyesColor
    };
    listOfWizards[i] = items;
  }
  return listOfWizards;
};

var numberOfWizards = 4;
var wizards = getSimilarWizardsList(numberOfWizards);
// Это выглядит так словно я массив в массив записываю. Это странно..

var getWizardsProperties = function (elemant, fragment, template) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = elemant.name;
  wizardElement.querySelector('.wizard-coat').style.fill = elemant.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = elemant.eyesColor;
  fragment.appendChild(wizardElement);
};

var getSimilarWizards = function (wizardsList) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragmentSimilarWizard = document.createDocumentFragment();

  wizardsList.forEach(function (wizard) {
    getWizardsProperties(wizard, fragmentSimilarWizard, similarWizardTemplate);
  });

  similarListElement.appendChild(fragmentSimilarWizard);
};

getSimilarWizards(wizards);
