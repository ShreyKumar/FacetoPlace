'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        //set item and redirect
        window.auth = $scope.authentication;
        window.location.href = "/#!/birthday";
	}
]);