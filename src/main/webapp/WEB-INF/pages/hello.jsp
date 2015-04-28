<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html ng-app="phonecatApp">
<head>
    <link rel="stylesheet" href="/resources/css/bootstrap.css"/>
    <script src="/resources/js/angular.js"></script>
    <script src="/resources/js/angular-route.js"></script>
    <script src="/resources/js/controllers.js"></script>
    <script src="/resources/js/filters.js"></script>
    <title ng-bind-template="Cell Phones: {{query}}">Cell Phones</title>
    <%--<title>Cell Phones: {{query}}</title>--%>
</head>
<body>
    <ul>
        <li>{{"lower case string" | uppercase}}</li>
        <li>{{ {foo: "bar", baz: 23} | json}}</li>
        <li>{{ 1304375948024 | date}}</li>
        <li>{{ 1304375948024 | date:"dd/MM/yyyy @ h:mma"}}</li>
    </ul>
	<%--<h2>${message}</h2>
    <img src="/resources/images/a_lot_of_fun.jpg"/>
    <h3>Adding some math</h3>
    <p>one plus two equals <b>{{1 + 2}}</b></p>
    <h3>Cellphone List</h3>--%>
    <div ng-view></div>

</body>
</html>