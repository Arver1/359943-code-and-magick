'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var uploadInSetup = setup.querySelector('.upload');
  var coatColors = window.characters.getCoatColors();
  var eyesColors = window.characters.getEyesColors();
  var fireballColors = window.characters.getFireballColors();
  var shopElement = setup.querySelector('.setup-artifacts-shop');
  var artifactsElement = setup.querySelector('.setup-artifacts');
  var artifactsElements = artifactsElement.querySelectorAll('setup-artifacts-cell');
  var draggedItem = null;
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
  uploadInSetup.addEventListener('mousedown', function (evt) {
    var onMouseMove = function (moveEvt) {
      var shiftX = moveEvt.clientX - startCoordinats.x;
      var shiftY = moveEvt.clientY - startCoordinats.y;
      setup.style.left = setup.offsetLeft + shiftX + 'px';
      setup.style.top = setup.offsetTop + shiftY + 'px';
      startCoordinats.x = moveEvt.clientX;
      startCoordinats.y = moveEvt.clientY;
    };
    var onMouseUp = function () {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });
  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });
  artifactsElement.addEventListener('drop', function (evt) {
    if (!evt.target.contains(draggedItem)) {
      evt.target.appendChild(draggedItem.cloneNode());
      evt.target.style.backgroundColor = '';
    }
  });
  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
  });
  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
  });
  window.defaultSetupCoord = {
    x: '50%',
    y: '100px'
  };
})();

