<html ng-app="phonecatApp">
<head>
    <link rel="stylesheet" href="/resources/css/bootstrap.css"/>
    <script src="/resources/js/angular.js"></script>
    <script src="/resources/js/controllers.js"></script>
</head>
<body ng-controller="PhoneListCtrl">
	<h2>${message}</h2>
    <img src="/resources/images/a_lot_of_fun.jpg"/>
    <h3>Adding some math</h3>
    <p>one plus two equals <b>{{1 + 2}}</b></p>
    <h3>Cellphone List</h3>
    <ul>
        <li ng-repeat="phone in phones">
            <span>{{phone.name}}</span>
            <p>{{phone.snippet}}</p>
        </li>
    </ul>
    <p>Total number of phones: {{phones.length}}</p>
</body>
</html>