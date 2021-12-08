const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
};

module.exports = override(
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        localIdentName: "[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    //路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
);