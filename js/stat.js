'use strict';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT);
};

var renderText = function (ctx, text, gap) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, window.constants.CLOUD_X + window.constants.EXTERNAL_GAP, window.constants.CLOUD_Y + window.constants.EXTERNAL_GAP + gap);
};

var drawColumn = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

var drawHistogram = function (ctx, players, times) {
  var maxTime = window.math.getMaxElement(times);

  players.forEach(function (player, i) {
    var barHeight = (window.constants.MAX_BAR_HEIGHT * times[i]) / maxTime;
    var columnX = window.constants.CLOUD_X + window.constants.EXTERNAL_GAP + (window.constants.BAR_GAP + window.constants.BAR_WIDTH) * i;
    var columnY = window.constants.CLOUD_Y + window.constants.COLUMN_GAP + (window.constants.MAX_BAR_HEIGHT - barHeight);
    var columnTextY = window.constants.CLOUD_Y + window.constants.COLUMN_GAP + window.constants.MAX_BAR_HEIGHT + window.constants.FONT_GAP;

    ctx.fillText(Math.ceil(times[i]), columnX, columnY - 10);

    ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : window.mathgetBlueColorWithRandomSaturation();

    drawColumn(ctx, columnX, columnY, window.constants.BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(player, columnX, columnTextY);
  });
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, window.constants.CLOUD_X + window.constants.SHADOW_GAP, window.constants.CLOUD_Y + window.constants.SHADOW_GAP, window.constants.SHADOW_COLOR);
  renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, window.constants.CLOUD_COLOR);

  renderText(ctx, 'Ура вы победили!', 0);
  renderText(ctx, 'Список результатов:', window.constants.FONT_GAP);

  drawHistogram(ctx, players, times);
};
