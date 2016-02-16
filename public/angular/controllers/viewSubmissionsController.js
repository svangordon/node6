angular.module('app')
	.controller('viewSubmissionsController', ['$scope', '$sce', 'submissionsFactory', function (scope, sce, submissions) {
		submissions.getVideos()
			.then(function(data) {
				scope.videos = data
		})

		scope.trustUrl = function (url, videoId) {
			if (url === scope.videos[videoId].url) {
				return sce.trustAsResourceUrl(url)
			}
		}

	}])