const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const args = require('yargs').argv;
const path = require('path');

const ENV = process.env.NODE_ENV;

let pluginList = [
    new HtmlWebpackPlugin({template: './server/templates/base_template.html', filename: '../../templates/base.html'})
];
if (args.watch) {
    pluginList.push(new DashboardPlugin());
}
if (args.analyze) {
    pluginList.push(new BundleAnalyzerPlugin());
}

module.exports = {
    entry: {
        mediasite: './client/mediasite.js'
    },
    output: {
        path: path.resolve(__dirname, 'server/static/js/'),
        filename: '[name].js',
        publicPath: '/static/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                          ['es2015', { 'modules': false } ],
                          'react'
                      ],
                      plugins: ['transform-class-properties', 'syntax-dynamic-import']
                    }
                },
            }, {
                test: /\.json$/,
                use: 'json'
            }, {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ]
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
