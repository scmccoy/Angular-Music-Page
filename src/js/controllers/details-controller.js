app.controller('DetailsController', function($q, $stateParams, $state, songDatabase) {
	console.log('in Details Controller');

	// const songId = $stateParams.id;
	//
	// $q.when(songDatabase.get()).then((response) => {
	// 	console.log('in Details response --> ', response);
	//
	// 	const allSongs = response.data.songs;
	// 	allSongs.forEach((song) => {
	// 		if (song.songId === songId) {
	// 			this.song = song;
	// 			console.log('this.song in for each --> ', this.song);
	// 		}
	// 	});
	// 	console.log('allSongs --> ', this.allSongs);
	// 	console.log('Response: ', response);
	// }).catch((error) => {
	// 	console.log(error);
	// });
});
