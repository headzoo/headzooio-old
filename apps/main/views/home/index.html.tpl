{% extends "layout.html.tpl" %}
{% block content %}
    <section>
        <h1 class="tagline">
            Hi, I'm Sean. A funkadelic coding monk, pragmatic full stack web developer, and U.S. Marine.
        </h1>
        <div class="posts">
            {% set summary = true %}
            {% for post in posts %}
                {% include "post.html.tpl" %}
            {% endfor %}
        </div>
    </section>
{% endblock %}