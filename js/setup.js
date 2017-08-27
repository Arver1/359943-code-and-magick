'use strict';
var template;
var characters = [];
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
  var element = document.querySelector(className);
  if (element.classListcontains('.hidden')) {
    element.classList.remove('.hidden');
  }
};
var getRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max - min + 1);
  rand = Math.floor(rand);
  return rand;
};
var createJsObjects = function (number) {
  for (var i = 0; i < number; i++) {
    characters[i] = {
      name: firstNames[getRandomNumber(0, firstNames.length - 1)] + '' + lastNames[getRandomNumber(0, lastNames.length - 1)],
      coatColor: coatColors[getRandomNumber(0, coatColors.length - 1)],
      eyesColor: eyesColors[getRandomNumber(0, eyesColors.length - 1)]
    };
  }
};
var createDOMElement = function (block) {
  var element = template.content.cloneNode(true);
  var div = document.querySelector(block);
  for (var i = 0; i < characters.length; i++) {
    element.querySelector('.setup-similar-label').textContent = characters[i].name;
    element.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
    element.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;
    element.cloneNode(true);
    div.append(element);
  }
};
showElement('.setup');
createJsObjects(4);
template = document.getElementbyId('#similar-wizard-template');
createDOMElement('.setup-similar-list');
showElement('.setup-similar');


