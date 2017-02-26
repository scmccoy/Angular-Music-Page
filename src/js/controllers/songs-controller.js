app.controller('SongsController', function($state, $q, songDatabase) {
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
		console.log('allSongs --> ', this.allSongs);
		console.log('Response: ', response);
	}).catch((error) => {
		console.log(error);
	});
});
