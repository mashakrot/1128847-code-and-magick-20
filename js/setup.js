'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;

var setup = document.querySelector('.setup');
var setupWizard = document.querySelector('.setup-wizard');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

var openPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSetup();
  }
  if (setupUserName === document.activeElement) {
    openSetup();
  }
};

var openSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', openPopupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', openPopupEscPress);
};

var showSetupWindow = function () {
  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closeSetup();
    }
  });

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

var chengeCoatColor = function () {
  var wizardCoat = setupWizard.querySelector('.wizard-coat');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style = 'fill: ' + getRandomElement(WIZARDS_COAT_COLORS);
  });
};

var chengeEyesColor = function () {
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style = 'fill: ' + getRandomElement(WIZARDS_EYES_COLORS);
  });
};

var chengeFireballColor = function () {
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = wizardFireball.querySelector('input');

  wizardFireball.addEventListener('click', function () {
    var color = getRandomElement(FIREBALL_COLOR);
    wizardFireball.style = 'background: ' + color;
    fireballColorInput.value = color;
  });
};

showSetupWindow();
var wizards = generateWizards(NUMBER_OF_WIZARDS);
renderWizards(wizards);

chengeCoatColor();
chengeEyesColor();
chengeFireballColor();
