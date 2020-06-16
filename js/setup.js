'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = document.querySelector('.setup-user-name');

  var openSetup = function () {
    setup.style.top = window.constants.SETUP_TOP + 'px';
    setup.style.left = window.constants.SETUP_LEFT + '%';
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
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');

    setupOpen.addEventListener('click', openSetup);

    setupOpen.addEventListener('keydown', onIconEnterPress);

    setupClose.addEventListener('click', closeSetup);

    setupClose.addEventListener('keydown', onPopupEnterPress);

    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };

  showSetupWindow();
})();
