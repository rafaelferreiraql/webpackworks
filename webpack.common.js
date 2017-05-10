const path = require('path');
const Extract = require('extract-text-webpack-plugin');

const cssExtract = new Extract("styles.css");
const htmlExtract = new Extract("[name].html");

module.exports = {
    entry: {
        index: "./views/home.pug",
        webpack: "./views/webpack.pug",
        process: "./views/process.pug",
        tools: "./views/tools.pug",
        //test: "./test.pug",
        style: "./style/main.less",
    },
    output: {
        path: path.join(__dirname,"docs"),
        //publicPath: "/build/",
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: cssExtract.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','less-loader'],
                })
            },
            {
                test: /\.pug$/,
                use: htmlExtract.extract({
                    use: ['html-loader?attrs=false','pug-html-loader'],
                }),

            },
        ],
    },

    plugins: [ htmlExtract, cssExtract ],
}
