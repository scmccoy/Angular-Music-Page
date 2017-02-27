app.controller('HomeController', function($state, localStorageService) {
	console.log('in HomeController');

	this.currentSongCount = localStorageService.get('song-count'); // set in SongsController
	console.log('num of songs --> ', this.currentSongCount);

	this.friendTracker = localStorageService.get('friend-data'); // set in FriendsController
	console.log('this.friendTracker', this.friendTracker);
});
