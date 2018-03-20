myApp.controller('IndexController', function($scope, $location, $timeout, ModalFactory,ModalService)
{
    $scope.showModal = false;


    $scope.$watch(function(){
        return ModalService.showDialog;
    }, function(value){
        $scope.showModal = value;
        console.log("It's happening");
    });


});