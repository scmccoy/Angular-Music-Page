app.controller('NoiseController', function($stateParams, $state, $q, songDatabase) {
	console.log('in Noise Controller');

	const songId = $stateParams.id; // grab the id from our state
	console.log('songId var --> ', songId);
	$q.when(songDatabase.get('./src/js/data/music.json')).then((response) => {
		console.log('response in nctrl --|', response);
		const allSongs = response.data.songs;
		allSongs.forEach((song) => {
			if (song.id === songId) {
				this.selectedSong = song;
			}
		});
		console.log('selectedSong --> ', this.selectedSong);
	}).catch((error) => {
		console.log(error);
	});
});
