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

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', 'Smartphone', function($scope, Phone, Smartphone) {
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';

    $scope.stubText = 'no info';

    $scope.fetchAllSmartphones = function() {
        $scope.stubText = 'fetching...';
        $scope.smartphones = Smartphone.query(function(smartphones) {
            $scope.stubText = 'Loaded ' + smartphones.length + ' records';
        });
    };

    $scope.concreteSmartphone = Smartphone.get({smartphoneId: 'NOKIA-N9'});
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);
