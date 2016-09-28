<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            {% if title|default %}{{ title }} - {% endif %}Sean Hickey
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="icon" href="/favicon.ico" type="images/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/app{% if env == "production" %}.min{% endif %}.css">
    </head>
    <body>
        <div class="container">
            <div id="main">
                {% include "nav.html.tpl" %}
                <div id="content">
                    {% block content %}{% endblock %}
                </div>
                {% include "footer.html.tpl" %}
            </div>
        </div>
    </body>
</html>