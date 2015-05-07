var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function($resource) {
        return $resource('/resources/json/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }
]);

phonecatServices.factory('Smartphone', ['$resource',
    function($resource) {
        return $resource('/smartphones/:smartphoneId', {}, {
            query: {method:'GET', isArray:true}
        });
    }
]);

phonecatServices.factory('responseObserver', function($q, $location) {
    return {
        'responseError': function(rejection) {
            if (rejection.status === 403) {
                $location.path('/403');
            }
            return $q.reject(rejection);
        }
    };
});
