angular.module('tumblrApi', [])
	.factory('Tumblr', function($http) {
		return {
			get: function() {
				return $http.jsonp('https://api.tumblr.com/v2/tagged?tag=gif&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=JSON_CALLBACK');
			}
		}
	})