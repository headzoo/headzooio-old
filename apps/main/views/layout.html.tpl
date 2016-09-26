<!DOCTYPE html>
<html lang="en">
    <head>
        <title>headzoo.io</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="icon" href="/favicon.ico" type="images/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/bootstrap{% if env == "production" %}.min{% endif %}.css">
        <link rel="stylesheet" href="/css/app{% if env == "production" %}.min{% endif %}.css">
    </head>
    <body>
        <div id="mount"></div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="/scripts/app{% if env == "production" %}.min{% endif %}.js"></script>
    </body>
</html>