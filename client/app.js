angular.module('puzzleTroll', [
  'ui.router', 
  'puzzleTroll.listModule', 
  'puzzleTroll.MessageModule', 
  'puzzleTroll.Util',
  'puzzleTroll.userModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'challengeList/listView.html'
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'messages/message.html'
      })
      .state('user', {
        url: '/:user',
        templateUrl: 'user/userView.html'
      })
      //putting here temporarily, will make more localized to each challenge later
      
	});
