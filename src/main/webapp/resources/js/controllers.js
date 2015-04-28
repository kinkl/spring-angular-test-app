var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: '/resources/partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: '/resources/partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.phones = [];
    $scope.phonesJson = '';

    $http.get('/resources/json/phones.json').success(function(data) {
        $scope.phones = data;
        $scope.phonesJson = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $scope.phoneId = $routeParams.phoneId;

    $http.get('/resources/json/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
    });
}]);