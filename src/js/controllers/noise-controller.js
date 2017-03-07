app.controller('NoiseController', function($stateParams, $state, $q, songDatabase) {

	const songId = $stateParams.id; // grab the id from our state

	$q.when(songDatabase.get('./src/js/data/music.json')).then((response) => {
		const allSongs = response.data.songs;
		allSongs.forEach((song) => {
			if (song.id === songId) {
				this.selectedSong = song;
			}
		});
		console.log('Success');
	}).catch((error) => {
		console.log(error);
	});
});
