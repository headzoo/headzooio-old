'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        './src/demo.js'
    ],
    output: {
        path: './',
        filename: 'demo.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                include: __dirname,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};