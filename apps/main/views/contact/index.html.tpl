{% extends "layout.html.tpl" %}
{% block content %}
    <section class="inner-content">
        <h1>Contact</h1>
        <p>
            Drop me a line and I'll try to respond as soon as possible.
        </p>
        <form method="post">
            {% if alert != '' %}
                <div class="alert alert-{{ alert_type }}" role="alert">
                    {{ alert }}
                </div>
            {% endif %}
            
            <div class="form-group{% if errors.email != '' %} has-danger{% endif %}">
                <label for="contact-email">Your email address</label>
                <input type="email" name="email" class="form-control" id="contact-email" value="{{ values.email }}">
                {% if errors.email != '' %}
                    <div class="form-control-feedback">{{ errors.email }}</div>
                {% endif %}
            </div>
            <div class="form-group{% if errors.subject != '' %} has-danger{% endif %}">
                <label for="contact-subject">Subject</label>
                <input type="text" name="subject" class="form-control" id="contact-subject" value="{{ values.subject }}">
                {% if errors.subject != '' %}
                    <div class="form-control-feedback">{{ errors.subject }}</div>
                {% endif %}
            </div>
            <div class="form-group{% if errors.message != '' %} has-danger{% endif %}">
                <label for="contact-message">Message</label>
                <textarea name="message" class="form-control" id="contact-message" style="height: 10rem;">{{ values.message }}</textarea>
                {% if errors.message != '' %}
                    <div class="form-control-feedback">{{ errors.message }}</div>
                {% endif %}
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </section>
{% endblock %}