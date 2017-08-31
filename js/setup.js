'use strict';
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


