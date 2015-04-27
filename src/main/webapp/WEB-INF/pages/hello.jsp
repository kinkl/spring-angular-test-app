<html ng-app="phonecatApp" ng-controller="PhoneListCtrl">
<head>
    <link rel="stylesheet" href="/resources/css/bootstrap.css"/>
    <script src="/resources/js/angular.js"></script>
    <script src="/resources/js/controllers.js"></script>
    <title ng-bind-template="Cell Phones: {{query}}">Cell Phones</title>
    <%--<title>Cell Phones: {{query}}</title>--%>
</head>
<body>
	<h2>${message}</h2>
    <img src="/resources/images/a_lot_of_fun.jpg"/>
    <h3>Adding some math</h3>
    <p>one plus two equals <b>{{1 + 2}}</b></p>
    <h3>Cellphone List</h3>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                Search: <input ng-model="query"/>
            </div>
            <div class="col-md-10">
                <ul class="phones">
                    <li ng-repeat="phone in phones | filter:query">
                        {{phone.name}}
                        <p>{{phone.snippet}}</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <p>Total number of phones: {{phones.length}}</p>
</body>
</html>