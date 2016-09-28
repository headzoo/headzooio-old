{% extends "layout.html.tpl" %}
{% block content %}
    <section>
        <h1 class="tagline">
            Hi, I'm Sean. A pragmatic minimalist and funkadelic full stack coding monk.
        </h1>
        <div class="posts">
            {% set summary = true %}
            {% for post in posts %}
                {% include "post.html.tpl" %}
            {% endfor %}
        </div>
        {% include "pagination.html.tpl" %}
    </section>
{% endblock %}