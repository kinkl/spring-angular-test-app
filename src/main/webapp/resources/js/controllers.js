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

    $scope.updateCurrentSmartphone = function(smartphoneId) {
        $scope.concreteSmartphone = Smartphone.get({smartphoneId: smartphoneId});
    };

    $scope.updateCurrentSmartphone('n9');

    $scope.newSmartphoneId = '';
    $scope.newSmartphoneName = '';
    $scope.newSmartphoneDescription = '';
    $scope.addNewSmartphone = function() {
        var newSmartphone = {
            id: $scope.newSmartphoneId,
            name: $scope.newSmartphoneName,
            description: $scope.newSmartphoneDescription
        };
        Smartphone.save(newSmartphone, function() {
            $scope.fetchAllSmartphones();
            $scope.updateCurrentSmartphone(newSmartphone.id);
        });

    }
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);
