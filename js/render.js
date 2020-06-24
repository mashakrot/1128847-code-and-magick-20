'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = window.constants.MAX_SIMILAR_WIZARD_COUNT;
  var userDialog = document.querySelector('.setup');

  var getWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (data) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var wizardsFragment = document.createDocumentFragment();

    var takeNumber = data.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : data.length;

    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      wizardsFragment.appendChild(getWizard(data[i]));
    }
    similarListElement.appendChild(wizardsFragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.renderWizards = renderWizards;
})();
