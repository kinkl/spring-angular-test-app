var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices', 'phonecatAnimations']);

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

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 'Phone', function($scope, $http, Phone) {
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';

    $scope.myPhone = 'no info';

    $scope.fetchInfoAboutMyPhone = function() {
        $scope.myPhone = 'fetching...';
        $http.get('/my_phone').success(function(data, status, headers, config) {
            $scope.myPhone = data.name;
        }).error(function(data, status, headers, config) {
            console.log('error!!!');
        });
    };
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    /*$http.get('/resources/json/' + $routeParams.phoneId + '.json').success(function(data) {
    });*/

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);
