{% set summary = summary|default %}
<article class="post">
    <div class="post-head">
        <h2 class="post-title">
            <a href="/posts/{{ post.permalink }}">{{ post.title }}</a>
        </h2>
        <div class="post-date">
            <span class="fa fa-clock-o"></span>
            <time>{{ post.published_at|moment_from_now }}</time>
        </div>
    </div>
    <div class="post-content">
        {{ post.content|html(summary)|safe }}
    </div>
    {% if summary %}
        <a href="/posts/{{ post.permalink }}#read-more">Read More <span class="fa fa-angle-right"></span></a>
    {% endif %}
</article>