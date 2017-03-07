app.controller('HomeController', function($state, localStorageService) {

	this.currentSongCount = localStorageService.get('song-count'); // set in SongsController

	this.friendTracker = localStorageService.get('friend-data'); // set in FriendsController
});
