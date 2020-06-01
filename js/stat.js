'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var EXTERNAL_GAP = 30;
var FONT_GAP = 18;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var maxBarHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + EXTERNAL_GAP, CLOUD_Y + EXTERNAL_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + EXTERNAL_GAP, CLOUD_Y + EXTERNAL_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (maxBarHeight * times[i]) / maxTime;
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 70 + (maxBarHeight - barHeight));

    // ctx.fillStyle = 'hsl(240, 100%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 80 + (maxBarHeight - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 80 + maxBarHeight + FONT_GAP);
  }
};
