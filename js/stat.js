'use strict';
(function () {
  var HEIGHT_HISTOGRAMME = 150;
  var HEIGHT_TEXT = 16;
  var INDENT_TEXT = 10;
  var INDENT_HISTOGRAMME_X = 100 + (420 - (40 * 4 + 50 * 3)) / 2;
  var INDENT_HISTOGRAMME_Y = 10 + 270 - 150;
  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';
    ctx.fillText('Ура вы победили!', 250, 30);
    ctx.fillText('Список результатов:', 240, 48);
    var max;
    for (var i = 0; i < times.length; i++) {
      times[i] = Math.round(times[i]);
      if (i === 0) {
        max = times[0];
        continue;
      }
      if (max < times[i]) {
        max = times[i];
      }
    }
    var indentTextY;
    var indentRectY;
    var part = (HEIGHT_HISTOGRAMME - HEIGHT_TEXT * 2 - INDENT_TEXT * 4) / max;
    for (i = 0; i < times.length; i++) {
      ctx.fillStyle = '#000';
      indentTextY = INDENT_HISTOGRAMME_Y + HEIGHT_HISTOGRAMME - HEIGHT_TEXT - INDENT_TEXT * 3 - times[i] * part;
      ctx.fillText(times[i], INDENT_HISTOGRAMME_X + 90 * i, indentTextY);
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random();
      indentRectY = indentTextY + INDENT_TEXT;
      ctx.fillRect(INDENT_HISTOGRAMME_X + 90 * i, indentRectY, 40, times[i] * part);
      indentTextY = indentRectY + times[i] * part + INDENT_TEXT + HEIGHT_TEXT;
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], INDENT_HISTOGRAMME_X + 90 * i, indentTextY);
    }
  };
})();

