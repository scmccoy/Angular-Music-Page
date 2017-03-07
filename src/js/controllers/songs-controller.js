app.controller('SongsController', function($state, $q, songDatabase, localStorageService) {

	this.orderByField = 'artist';
	this.reverseSort = false;

	this.details = false;
	this.showDetails = function() {
		if (this.details === false) {
			this.details = true;
		} else {
			this.details = false;
		}
	};

	$q.when(songDatabase.get()).then((response) => {
		this.allSongs = response.data.songs;
		this.songCount = this.allSongs.length;
		localStorageService.set('song-count', this.songCount);
		console.log('Success');
	}).catch((error) => {
		console.log(error);
	});
});
