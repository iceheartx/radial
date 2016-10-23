const {Assets, Foreman, Lint, Jasmine} = require('pui-react-tools');

Assets.install({
  assets: {
    sass: true,
    html: false
  },
  useAssetsServer: true
});
Foreman.install();
Lint.install();
Jasmine.install();
