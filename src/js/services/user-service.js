app.service('UserManagement', function($state, localStorageService) {
	this.userInput = {};

	function userCheck(userInput) {

		let userDB = localStorageService.get('login-data');

		if (userDB.name === userInput.name) { // if input name is same as in local storage
			console.log('Match');
		} else {
			console.log('NO MATCH!');
		}
		localStorageService.set('login-data', userInput);
		$state.go('musicParent.songsCtrl', []); // switch screens to ...
	}
	return {
		userCheck: userCheck
	};
});
