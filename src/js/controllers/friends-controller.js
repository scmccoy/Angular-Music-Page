app.controller('FriendsController', function($state, $q, songDatabase, localStorageService) {

	this.numOfFriendsTracker = 3; // ... not set up so using a static #. was going to make a json file of friends
	localStorageService.set('friend-data', this.numOfFriendsTracker); // gets in HomeController

	$q.when(songDatabase.get()).then((response) => {
		this.allSongs = response.data.songs;
		this.rare = [];
		this.favAlbumName = [];

		function getRandomInt(min, max) {
			this.ranDumb = Math.floor(Math.random() * (max - min + 1)) + min;
			return this.ranDumb;
		}

		for (let i = 0; i < 3; i++) {
			let thisRandomNum = getRandomInt(1, 8);
			this.rare.push(thisRandomNum);
			this.favAlbumIs = this.allSongs[thisRandomNum].artist;
			this.favAlbumName.push(this.favAlbumIs);
		}
		console.log('Success');
	}).catch((error) => {
		console.log(error);
	});
});
