'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var showElement = function (className) {
  document.querySelector(className).classList.remove('hidden');
};
var getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
};
var createCharacters = function (charactersQuantity) {
  var characters = [];
  for (var i = 0; i < charactersQuantity; i++) {
    characters[i] = {
      name: firstNames[getRandomNumber(0, firstNames.length - 1)] + ' ' + lastNames[getRandomNumber(0, lastNames.length - 1)],
      coatColor: coatColors[getRandomNumber(0, coatColors.length - 1)],
      eyesColor: eyesColors[getRandomNumber(0, eyesColors.length - 1)]
    };
  }
  return characters;
};
var appendCharacters = function (container, characters, containerTemplateId) {
  var template = document.getElementById(containerTemplateId).content;
  var div = document.querySelector(container);
  for (var i = 0; i < characters.length; i++) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = characters[i].name;
    element.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
    element.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;
    div.appendChild(element);
  }
};
showElement('.setup');
var characters = createCharacters(4);
showElement('.setup-similar');
appendCharacters('.setup-similar-list', characters, 'similar-wizard-template');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupSubmit = setup.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var openPopup = function () {
  setup.classList.remove('hidden');
};
var closePopup = function () {
  setup.classList.add('hidden');
};
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();

  }
};
setup.addEventListener('keydown', onPopupEscPress);
setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
/*

setupSubmit.addEventListener('click', closePopup);
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.add('hidden');
  }
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.add('hidden');
  }
});
*/
wizardCoat.addEventListener('click', function () {
  wizardCoat.style = 'fill: ' + coatColors[getRandomNumber(0, coatColors.length - 1)];
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style = 'fill: ' + eyesColors[getRandomNumber(0, eyesColors.length - 1)];
});
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = fireballColors[getRandomNumber(0, fireballColors.length - 1)];
  debugger;
});


