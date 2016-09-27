{% extends "layout.html.tpl" %}
{% block content %}
    <section class="page inner-content">
        <h1 class="page-title">Posts</h1>
        
        <ul class="post-list">
            {% for post in posts %}
               <li>
                   <h2 class="post-title small">
                       <a href="/posts/{{ post.permalink }}">{{ post.title }}</a>
                   </h2>
                   <div class="post-date">
                       <time>{{ post.published_at|moment_format("MMMM Do YYYY") }}</time>
                   </div>
               </li> 
            {% endfor %}
        </ul>
    </section>
{% endblock %}