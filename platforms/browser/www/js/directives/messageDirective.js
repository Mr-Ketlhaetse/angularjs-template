myApp.directive('myMessage',['ModalService',function(ModalService){
    return {
        templateUrl:'html/modals/messageModal.html',
        restrict: 'E',
        replace: true,
        scope: false,
        transclude: false,
        controller: function($scope){

            this.close = function(){
                ModalService.header = null;
                ModalService.message = null;
                ModalService.messages = [];
                ModalService.showDialog = false;
            };

            this.refresh = function(){
                $scope.header = ModalService.header;
                $scope.message = ModalService.message;
                $scope.messages = ModalService.messages;
            };
        },
        controllerAs: "myCtrl",
        link: function(scope, element, attrs, myCtrl){

            scope.$watch(attrs.visible, function(value){
                if(value == true){

                    myCtrl.refresh();
                    $(element).modal('show');
                }
                else{

                    $(element).modal('hide');
                    myCtrl.close();
                }
            });

            $(element).on('shown.bs.modal', function(){
                if(!scope.$$phase){

                    scope.$apply(function () {
                        scope.$parent[attrs.visible] = true;
                    });
                }
            });

            $(element).on('hidden.bs.modal', function(){
                if(!scope.$$phase){

                    scope.$apply(function(){

                        scope.$parent[attrs.visible] = false;

                    });
                }
            });
        }
    }

}]);
