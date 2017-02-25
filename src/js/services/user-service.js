app.service('UserManagement', function(localStorageService) {
	let userInput = {};
	let loginStorage = [];
	let currentTime = Date.now();

	function userCheck(userInput) {
		console.log('in UserManagement');

		let userDB = localStorageService.get('login-data');
		if ((userDB.name === userInput.name) && (userDB.password === userInput.password)) {
			console.log('Match');
			return {
				name: userDB.name,
				time: currentTime,
				loggedIn: true
			};
		} else {
			console.log('NO MATCH!');
			return {
				name: 'Guest',
				loggedIn: false
			};
		}

		localStorageService.set('login-data', userInput);
		loginStorage.push(userInput);
	}

	return {
		userCheck: userCheck
	};
});