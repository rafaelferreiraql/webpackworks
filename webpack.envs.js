const common = require('./webpack.common.js');

let dev = Object.assign({},common);
let prod = Object.assign({},common);

dev.devServer = {
    historyApiFallback: {
        index: "/test.html",
    },
    //stats: 'errors-only',
    host: process.env.HOST,
    port: 3000,
},

module.exports.dev = dev;
module.exports.prod = prod;
