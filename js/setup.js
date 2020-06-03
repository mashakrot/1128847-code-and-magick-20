'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var arrayRandElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var createOneWizard = function (i) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragmentSimilarWizard.appendChild(wizardElement);
};

var wizards = [
  {
    name: WIZARDS_NAMES[arrayRandElement(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[arrayRandElement(WIZARDS_SURNAMES)],
    coatColor: WIZARDS_COAT_COLOR[arrayRandElement(WIZARDS_COAT_COLOR)],
    eyesColor: WIZARDS_EYES_COLOR[arrayRandElement(WIZARDS_EYES_COLOR)]
  },
  {
    name: WIZARDS_NAMES[arrayRandElement(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[arrayRandElement(WIZARDS_SURNAMES)],
    coatColor: WIZARDS_COAT_COLOR[arrayRandElement(WIZARDS_COAT_COLOR)],
    eyesColor: WIZARDS_EYES_COLOR[arrayRandElement(WIZARDS_EYES_COLOR)]
  },
  {
    name: WIZARDS_NAMES[arrayRandElement(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[arrayRandElement(WIZARDS_SURNAMES)],
    coatColor: WIZARDS_COAT_COLOR[arrayRandElement(WIZARDS_COAT_COLOR)],
    eyesColor: WIZARDS_EYES_COLOR[arrayRandElement(WIZARDS_EYES_COLOR)]
  },
  {
    name: WIZARDS_NAMES[arrayRandElement(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[arrayRandElement(WIZARDS_SURNAMES)],
    coatColor: WIZARDS_COAT_COLOR[arrayRandElement(WIZARDS_COAT_COLOR)],
    eyesColor: WIZARDS_EYES_COLOR[arrayRandElement(WIZARDS_EYES_COLOR)]
  }
];

var fragmentSimilarWizard = document.createDocumentFragment();

wizards.forEach(function (wizard, i) {
  createOneWizard(i);
});

similarListElement.appendChild(fragmentSimilarWizard);
