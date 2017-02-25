app.service('StorageService', function(localStorageService) {


	function set(name, data) {
		localStorageService.set(name, data);
	}

	function get(name) {
		return localStorageService.get(name) || [];

	}

	return {
		set: set,
		get: get
	};
});


// access LocalStorageModule from here ^^  (is in app.js module array)
