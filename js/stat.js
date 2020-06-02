'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var EXTERNAL_GAP = 30;
var FONT_GAP = 18;
var COLUMN_GAP = 80;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var CLOUD_COLOR = '#ffffff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, gap) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, CLOUD_X + EXTERNAL_GAP, CLOUD_Y + EXTERNAL_GAP + gap);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getBlueColor = function () {
  var randomNumber = (Math.floor(Math.random() * 100) + 1);
  return 'hsl(240,' + randomNumber + '%, 50%)';
};

var drawColumn = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

var drawHistogram = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  players.forEach(function (player, i) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var columnX = CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i;
    var columnY = CLOUD_Y + COLUMN_GAP + (MAX_BAR_HEIGHT - barHeight);
    var columnTextY = CLOUD_Y + COLUMN_GAP + MAX_BAR_HEIGHT + FONT_GAP;

    ctx.fillText(Math.ceil(times[i]), columnX, columnY - 10);

    ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : getBlueColor();

    drawColumn(ctx, columnX, columnY, BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(player, columnX, columnTextY);
  });
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  renderText(ctx, 'Ура вы победили!', 0);
  renderText(ctx, 'Список результатов:', FONT_GAP);

  drawHistogram(ctx, players, times);
};
