{% extends "layout.html.tpl" %}
{% block content %}
    <section>
        <h1 class="tagline inner-content">
            <img src="/images/avatar-tiny.png" class="avatar" />
            Hi, I'm Sean. A funkadelic coding monk on the path to engineering nirvana. Full stack web developer and U.S. Marine.
        </h1>
        <div class="posts inner-content">
            {% set summary = true %}
            {% for post in posts %}
                {% include "post.html.tpl" %}
            {% endfor %}
        </div>
    </section>
{% endblock %}