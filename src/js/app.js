// connect app to html index
const app = angular.module('musicApp', ['ui.router', 'LocalStorageModule']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/'); // if url does not exist
	//..  use parent
	$urlRouterProvider.when('/', '/' + 'login');

	$stateProvider.state('musicParent', {
		url: '/', // base parent
		abstract: true, // will contain other templates inside of this state. Not a template itself
		template: '<ui-view></ui-view>' // placed the tags into the index where all the templates will appear
		// you can make multiple views by using 'names in ui-view tag '
	}).state('musicParent.logCtrl', {
		url: 'login',
		controller: 'LoginController as logCtrl',
		templateUrl: './templates/login.html'
	}).state('musicParent.homeCtrl', {
		url: 'home',
		controller: 'HomeController as homeCtrl',
		templateUrl: './templates/home.html'
	}).state('musicParent.songsCtrl', {
		url: 'songs',
		controller: 'SongsController as songsCtrl',
		templateUrl: './templates/songs.html'
	}).state('musicParent.friendsCtrl', {
		url: 'friends',
		controller: 'FriendsController as friendsCtrl',
		templateUrl: './templates/friends.html'
	});
});
