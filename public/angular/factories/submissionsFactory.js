angular.module('app')
	.factory('submissionsFactory', ['$http', function (http) {
		return {
			getVideos : function () {
				return http.get('/submitted-videos')
					.then(function(response) {
						return response.data
					})
			}
		}
	}])