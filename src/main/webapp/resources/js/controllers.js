var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {


    $scope.phones = [];
    $scope.phonesJson = '';

    $http.get('/resources/json/phones.json').success(function(data) {
        $scope.phones = data;
        $scope.phonesJson = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
}]);