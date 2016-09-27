<article class="post">
    <div class="post-head">
        <h2 class="post-title">
            <a href="/posts/{{ post.permalink }}">{{ post.title }}</a>
        </h2>
        <div class="post-date">
            <span class="fa fa-clock-o"></span>
            <time>{{ post.published_at }}</time>
        </div>
    </div>
    <div class="post-content">
        {{ post.content|safe }}
    </div>
    {% if summary|default %}
        <a href="/posts/{{ post.permalink }}#read-more">Read More <span class="fa fa-angle-right"></span></a>
    {% endif %}
</article>