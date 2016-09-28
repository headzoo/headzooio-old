'use strict';

const _ = require('lodash');

module.exports = function(express, container) {
    
    express.get('/contact', function(req, res) {
        let errors = {
            email   : '',
            subject : '',
            message : ''
        };
        let values = {
            email   : '',
            subject : '',
            message : ''
        };
        
        res.render('contact/index', {
            active: 'contact',
            title: 'Contact',
            alert: '',
            alert_type: 'success',
            values: values,
            errors: errors
        });
    });
    
    express.post('/contact', function(req, res) {
        let errored  = false;
        let errors = {
            email   : '',
            subject : '',
            message : ''
        };
        let values = {
            email   : req.body.email,
            subject : req.body.subject,
            message : req.body.message
        };
        _.forOwn(values, function(v, k) {
            values[k] = v.trim();
        });
        
        if (values.email.length == 0) {
            errors.email = 'Required';
            errored = true;
        }
        if (values.subject.length == 0) {
            errors.subject = 'Required';
            errored = true;
        }
        if (values.message.length == 0) {
            errors.message = 'Required';
            errored = true;
        }
        if (errored) {
            return res.render('contact/index', {
                active     : 'contact',
                title      : 'Contact',
                alert      : 'Please fix the errors below.',
                alert_type : 'danger',
                values     : values,
                errors     : errors
            });
        }
        
        container.get('mailer').sendMail({
            from    : 'contact@headzoo.io',
            to      : 'sean@headzoo.io',
            replyTo : values.email,
            subject : values.subject,
            text    : values.message
        }, function(err) {
            console.log(err);
        });
        
        res.render('contact/index', {
            active     : 'contact',
            title      : 'Contact',
            alert      : 'Thank You!',
            alert_type : 'success',
            values     : values,
            errors     : errors
        });
    });
};