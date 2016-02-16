angular.module('app')
	.factory('submissionsFactory', ['$http', function (http) {
		return {
			videos : http.get('/submitted-videos')
			.then(function(response) {
				return response.data
			})
		}
	}])