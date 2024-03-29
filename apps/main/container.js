'use strict';

const roastr    = require('roastr');
const moment    = require('moment');
const container = roastr.container;

container.factory('mailer', function() {
    let nodemailer = require('nodemailer');
    let config     = container.get('config.nodemailer');
    
    return nodemailer.createTransport(config);
});

container.set('template.html', ['template.filter'], function(html, summary) {
    html = html.trim();
    html = html.replace(/\n\r?/g, "\n");
    html = html.replace('<!--more-->', '<div id="read-more"></div>');
    
    if (summary) {
        if (html.indexOf('<div id="read-more"></div>') !== -1) {
            html = html.split('<div id="read-more"></div>')[0];
        }
    }
    
    let lines = html.split(/\n/g);
    html = lines.map(function(line) {
        line = line.trim();
        if (line.indexOf('<') !== 0) {
            line = `<p>${line}</p>`;
        }
        return line;
    }).join("\n");
    
    return html;
});

container.set('template.moment_format', ['template.filter'], function(date, format) {
    return moment(date).format(format);
});

module.exports = container;