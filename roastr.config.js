'use strict';

module.exports = {
    assets: {
        sources: ['images', 'react-headzoo-emoji', 'favicon.ico']
    },
    livereload: true,
    css: {
        output: 'app.css',
        autoprefixer: {
            browsers: ['last 2 versions'],
            cascade: false
        }
    },
    webpack: require('./webpack.config.js')
};