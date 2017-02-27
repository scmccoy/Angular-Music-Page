app.controller('SongsController', function($state, $q, songDatabase, localStorageService) {
	console.log('in SongsController');

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

		console.log('the count --> ', this.songCount);

		console.log('allSongs --> ', this.allSongs);
		console.log('Response: ', response);
	}).catch((error) => {
		console.log(error);
	});
});
