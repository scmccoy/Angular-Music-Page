app.controller('LoginController', function($state, UserManagement, localStorageService) {
	// console.log('in loginController');

	this.currentUser = null;
	this.userInput = {};

	this.userLogin = function(name, password) {
		//console.log('user', this.userInput); // logs current input
		// debugger;
		userInput = {
			name: name,
			password: password
		};
		console.log('after', this.userInput); // logs current input
		//console.log('after 2 ', userInput); // logs 0 , 0
		if ((UserManagement.userCheck(this.userInput.name) === undefined) || (UserManagement.userCheck(this.userInput.name) === 'Guest')) {
			this.currentUser.name = 'Guest';
			console.log('currentUser in undefined --> ', this.currentUser.name);
		} else {
			this.currentUser = UserManagement.userCheck(this.userInput.name);
			console.log('currentUser in else --> ', this.currentUser);
			console.log('currentUser in else --> ', this.currentUser.name);
		}

		// this.testStuff = userLogin(userInput.name);
	}; // USER LOGIN FUNCTION

	// this.currentUser = UserManagement.userCheck(this.userInput);


});
