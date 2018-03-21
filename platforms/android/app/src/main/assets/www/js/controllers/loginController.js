myApp.controller('LoginController', function(
	$scope,
	UrlService, 
	ModalFactory

	){	

	$scope.login = function(){
		ModalFactory.notify("Function not available at the moment");
	}
});