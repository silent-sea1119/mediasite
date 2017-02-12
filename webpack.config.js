const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const args = require('yargs').argv;

const ENV = process.env.NODE_ENV;

let pluginList = [
    // new webpack.ProvidePlugin({'Promise': 'es6-promise', 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // Specify the common bundle's name.
    }),
    new HtmlWebpackPlugin({template: './src/templates/base_template.html', filename: '../../templates/base.html'})
];
if (args.watch) {
    pluginList.push(new DashboardPlugin());
}

module.exports = {
    entry: {
        mediasite: './client/mediasite.js',
        vendor: './client/vendor.js'
    },
    output: {
        path: 'src/static/js/',
        filename: '[name].js',
        publicPath: '/static/js/'
    },
    resolve: {
      // alias: {
      //   'react': 'preact-compat',
      //   'react-dom': 'preact-compat'
      // },
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
                      plugins: ['transform-class-properties']
                    }
                }
            }, {
                test: /\.json$/,
                use: 'json'
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
