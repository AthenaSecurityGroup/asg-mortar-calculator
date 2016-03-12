require('shelljs/make');

target.copyStatic = function () {
  cd(__dirname);
  mkdir('-p', 'dist/');
  cp('-R', 'public/', 'dist/');
};
