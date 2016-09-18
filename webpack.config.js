const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

let pluginList = [
    new webpack.ProvidePlugin({
        'Promise': 'es6-promise',
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
];
if (process.env.NODE_ENV !== 'production') {
    pluginList.push(new DashboardPlugin());
}

module.exports = {
    entry: './src/static/js/app/mediasite.js',
    output: {
        filename: 'src/static/js/mediasite.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: pluginList,
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    },
    externals: {
        jquery: 'jQuery'
    }
};
