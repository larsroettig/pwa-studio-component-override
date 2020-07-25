const componentOverrideMapping = require('./componentOverrideMapping');
const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');

module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags[targets.name] = {esModules: true};
    });
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
       new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
}