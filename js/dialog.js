'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColors = window.characters.getCoatColors();
  var eyesColors = window.characters.getEyesColors();
  var fireballColors = window.characters.getFireballColors();
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style = 'fill: ' + coatColors[window.util.getRandomNumber(0, coatColors.length - 1)];
  });
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style = 'fill: ' + eyesColors[window.util.getRandomNumber(0, eyesColors.length - 1)];
  });
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = fireballColors[window.util.getRandomNumber(0, fireballColors.length - 1)];
  });
  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.tooShort) {
      setupUserName.setCustomValidity('Имя персонажа не может содержать менее 2 смиволов');
    } else if (setupUserName.validity.tooLong) {
      setupUserName.setCustomValidity('максимальная длина имени персонажа — 25 символов');
    } else if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Обязательное поле');
    } else {
      setupUserName.setCustomValidity('');
    }
  });
  var characters = window.characters.createCharacters(4);
  window.characters.appendCharacters('.setup-similar-list', characters, 'similar-wizard-template');
})();

