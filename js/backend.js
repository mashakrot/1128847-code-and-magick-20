'use strict';

(function () {
  var TIMEOUT_IN_MS = window.constants.TIMEOUT_IN_MS;
  var LOAD_URL = window.constants.LOAD_URL;
  var SAVE_URL = window.constants.SAVE_URL;

  var requestHttp = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT_IN_MS;
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    requestHttp(xhr, onLoad, onError);

    xhr.open('GET', LOAD_URL);
    xhr.send();

  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    requestHttp(xhr, onLoad, onError);

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
