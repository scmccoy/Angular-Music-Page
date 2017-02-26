app.service('songDatabase', songDatabaseService);

function songDatabaseService($http) {
	function getAllSongs() {

		return $http({
			method: 'GET',
			url: './src/js/data/music.json' // data file provided
		});
	}
	return {
		get: getAllSongs
	};
}
