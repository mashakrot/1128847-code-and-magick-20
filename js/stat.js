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
var MAX_BAR_HEIGHT = 150;
var CLOUD_COLOR = '#ffffff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, gap) {
  ctx.fillText(text, CLOUD_X + EXTERNAL_GAP, CLOUD_Y + EXTERNAL_GAP + gap);
};

var getMaxElement = function (arr) {
  var maxElement = Math.max.apply(null, arr);
  return maxElement;
};

var gettingRandomNumber = function () {
  var randomNumber = (Math.floor(Math.random() * 100) + 1);
  var colorSaturation = 'hsl(240,' + randomNumber + '%, 50%)';
  return colorSaturation;
};

var drawSeparateColumn = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

var drawHistogram = function (ctx, arr, times) {
  var maxTime = getMaxElement(times);

  arr.forEach(function (item, i, players) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var columnX = CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i;
    var columnY = CLOUD_Y + 80 + (MAX_BAR_HEIGHT - barHeight);
    var columnTextY = CLOUD_Y + 80 + MAX_BAR_HEIGHT + FONT_GAP;

    ctx.fillText(Math.ceil(times[i]), CLOUD_X + EXTERNAL_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 70 + (MAX_BAR_HEIGHT - barHeight));

    // теперь вроде работает только ESLint возмущается
    players[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = gettingRandomNumber();

    drawSeparateColumn(ctx, columnX, columnY, BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], columnX, columnTextY);
  });
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  renderText(ctx, 'Ура вы победили!', 0);
  renderText(ctx, 'Список результатов:', FONT_GAP);

  drawHistogram(ctx, players, times);
};
