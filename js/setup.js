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

var openSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
    evt.preventDefault();
    closeSetup();
  }
};

var onIconEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    openSetup();
  }
};

var onPopupEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    closeSetup();
  }
};

var showSetupWindow = function () {
  setupOpen.addEventListener('click', openSetup);

  setupOpen.addEventListener('keydown', onIconEnterPress);

  setupClose.addEventListener('click', closeSetup);

  setupClose.addEventListener('keydown', onPopupEnterPress);

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

var changeCoatColor = function () {
  var coatColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');

  var color = getRandomElement(WIZARDS_COAT_COLORS);
  wizardCoat.style = 'fill: ' + color;
  coatColorInput.value = color;
};

var hangUpCoatColorHandler = function () {
  wizardCoat.addEventListener('click', changeCoatColor);
};

var changeEyesColor = function () {
  var eyesColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');

  var color = getRandomElement(WIZARDS_EYES_COLORS);
  wizardEyes.style = 'fill: ' + color;
  eyesColorInput.value = color;
};

var hangUpEyesColorHandler = function () {
  wizardEyes.addEventListener('click', changeEyesColor);
};

var changeFireballColor = function () {
  var fireballColorInput = wizardFireball.querySelector('input');

  var color = getRandomElement(FIREBALL_COLOR);
  wizardFireball.style = 'background: ' + color;
  fireballColorInput.value = color;
};

var hangUpFireballColorHandler = function () {
  wizardFireball.addEventListener('click', changeFireballColor);
};

showSetupWindow();
var wizards = generateWizards(NUMBER_OF_WIZARDS);
renderWizards(wizards);

var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

hangUpCoatColorHandler();
hangUpFireballColorHandler();
hangUpEyesColorHandler();
