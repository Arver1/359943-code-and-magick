'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var openPopup = function () {
    setup.style.top = window.defaultSetupCoord.y;
    setup.style.left = window.defaultSetupCoord.x;
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };
  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);
  setupWizardForm.addEventListener('submitd', closePopup);
  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });
})();


