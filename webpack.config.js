const config = require('./webpack.envs.js')

module.exports = function(env) {
    if(env === "production") return config.prod;
    else return config.dev;
}
