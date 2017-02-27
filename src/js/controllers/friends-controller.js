app.controller('FriendsController', function($state, $q, songDatabase, localStorageService) {
	console.log('in FriendsController');

	this.numOfFriendsTracker = 3; // ... not set up so using a static #. was going to make a json file of friends
	localStorageService.set('friend-data', this.numOfFriendsTracker); // gets in HomeController 

	$q.when(songDatabase.get()).then((response) => {
		this.allSongs = response.data.songs;

		function getRandomInt(min, max) {
			this.ranDumb = Math.floor(Math.random() * (max - min + 1)) + min;
			return this.ranDumb;
		}

		// for (let i = 0; i < 3; i++) {
		// 	this.rare = [];
		// 	this.friendsRandomNumber = getRandomInt(1, 9);
		// 	this.rare.push(this.friendsRandomNumber);
		// }

		this.favAlbum = function() {
			this.favRandom = getRandomInt(1, 9);
			this.favAlbumIs = this.allSongs[this.favRandom];
			console.log('fav ', this.favAlbumIs);
			return this.favAlbumIs.artist;
		};

	}).catch((error) => {
		console.log(error);
	});

});
