'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = window.constants.MAX_SIMILAR_WIZARD_COUNT;
  var LOAD_URL = window.constants.LOAD_URL;
  var SAVE_URL = window.constants.SAVE_URL;
  var load = window.backend.load;
  var userDialog = document.querySelector('.setup');
  var save = window.backend.save;

  var getWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var wizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      wizardsFragment.appendChild(getWizard(wizards[i]));
    }

    similarListElement.appendChild(wizardsFragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var submitHandler = function (evt) {
    save(SAVE_URL, new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  };

  load(LOAD_URL, successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', submitHandler);
})();
