angular.module('app')
	.controller('viewSubmissionsController', ['$scope', 'submissionsFactory', function (scope, submissions) {
		submissions.getVideos()
			.then(function(data) {
				scope.videos = data
		})

		console.log(scope.videos)

	}])