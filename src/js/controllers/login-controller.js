app.controller('LoginController', function($state, UserManagement, localStorageService) {

	this.userInput = {};
	this.userLogin = function(name, password) {
		this.userInput = {
			name: name,
			password: password
		};

		localStorageService.set('login-data', this.userInput);
		UserManagement.userCheck(this.userInput); // checks if user is in local storage
	}; // USER LOGIN FUNCTION

	this.isStupid = function() { // displays logged in name on screen
		this.meLoggedIn = localStorageService.get('login-data');
		return this.meLoggedIn.name;
	};
});
