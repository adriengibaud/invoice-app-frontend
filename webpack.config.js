const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}
module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: srcPath('app/components'),
      utils: srcPath('app/utils'),
      interface: srcPath('app/shared/interfaces'),
    },
  },
};
