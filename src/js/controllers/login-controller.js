app.controller('LoginController', function($state, UserManagement, localStorageService) {
	// console.log('in loginController');

	this.userInput = {};
	// debugger;
	this.userLogin = function(name, password) {
		this.userInput = {
			name: name,
			password: password
		};
		// console.log('after', this.userInput); // logs current input
		UserManagement.userCheck(this.userInput); // checks if user is in local storage
	}; // USER LOGIN FUNCTION

	this.isStupid = function() { // displays logged in name on screen
		this.meLoggedIn = localStorageService.get('login-data');
		// console.log('test --> ', this.meLoggedIn.name);
		return this.meLoggedIn.name;
	};
});
