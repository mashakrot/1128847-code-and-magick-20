'use strict';

(function () {
  var FILE_TYPES = window.constants.FILE_TYPES;

  var fileChooser = document.querySelector('.upload input[type=file');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matces = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matces) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
