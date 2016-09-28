<nav class="navbar navbar-primary">
    <ul class="nav navbar-nav">
        <li class="nav-item{% if active|default == 'home' %} active{% endif %}">
            <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item{% if active|default == 'posts' %} active{% endif %}">
            <a class="nav-link" href="/posts">Posts</a>
        </li>
        <li class="nav-item{% if active|default == 'about' %} active{% endif %}">
            <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/WebSeanHickey">Twitter</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://github.com/headzoo">Github</a>
        </li>
        <li class="nav-item hidden-md-up{% if active|default == 'contact' %} active{% endif %}">
            <a class="nav-link" href="/contact">Contact</a>
        </li>
    </ul>
    <ul class="nav navbar-nav pull-xs-right hidden-sm-down">
        <li class="nav-item{% if active|default == 'contact' %} active{% endif %}">
            <a class="nav-link" href="/contact">Contact</a>
        </li>
    </ul>
</nav>