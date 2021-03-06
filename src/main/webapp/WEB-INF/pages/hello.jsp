<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html ng-app="phonecatApp">
<head>
    <link rel="stylesheet" href="/resources/css/bootstrap.css"/>
    <link rel="stylesheet" href="/resources/css/app.css"/>
    <link rel="stylesheet" href="/resources/css/animations.css"/>
    <script src="/resources/js/jquery-2.1.3.js"></script>
    <script src="/resources/js/angular.js"></script>
    <script src="/resources/js/angular-route.js"></script>
    <script src="/resources/js/angular-resource.js"></script>
    <script src="/resources/js/angular-animate.js"></script>
    <script src="/resources/js/controllers.js"></script>
    <script src="/resources/js/filters.js"></script>
    <script src="/resources/js/services.js"></script>
    <script src="/resources/js/animations.js"></script>
    <title ng-bind-template="Cell Phones: {{query}}">Cell Phones</title>
    <%--<title>Cell Phones: {{query}}</title>--%>
</head>
<body>
    <a href="/j_spring_security_logout">LOG OUT!</a>
    <%--<ul>
        <li>{{"lower case string" | uppercase}}</li>
        <li>{{ {foo: "bar", baz: 23} | json}}</li>
        <li>{{ 1304375948024 | date}}</li>
        <li>{{ 1304375948024 | date:"dd/MM/yyyy @ h:mma"}}</li>
    </ul>--%>
	<%--<h2>${message}</h2>
    <img src="/resources/images/a_lot_of_fun.jpg"/>
    <h3>Adding some math</h3>
    <p>one plus two equals <b>{{1 + 2}}</b></p>
    <h3>Cellphone List</h3>--%>
    <div class="view-container">
        <div ng-view class="view-frame"></div>
    </div>

</body>
</html>