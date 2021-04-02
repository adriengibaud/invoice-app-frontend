const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}
module.exports = {
  resolve: {
    alias: {
      components: srcPath('app/components'),
      header: srcPath('app/components/header'),
    },
  },
};
