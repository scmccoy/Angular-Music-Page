'use strict';

angular.module('createShop').service('sendInventory', sendInventoryService);
// note: no array in module params

function sendInventoryService($http) {
	function getInventory() {

		return $http({
			method: 'GET',
			url: './src/js/data/inventory.json'
		});
	}
	return {
		get: getInventory
	};
}