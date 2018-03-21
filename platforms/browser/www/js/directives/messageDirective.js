myApp.directive('myMessage',['ModalService','ApiPostFactory','UrlService',
    function(ModalService,ApiPostFactory,UrlService){

        return {
        templateUrl:'html/modals/messageModal.html',
        restrict: 'E',
        transclude: true,
        controller: function($scope){

            var self = this;
            self.forceHide = false;
            $scope.reportError = true;

            self.close = function(){

                ModalService.header = null;
                ModalService.message = null;
                ModalService.messages = [];
                ModalService.sendError = false;
                ModalService.showDialog = false;
                self.forceHide = false;
            };

            self.refresh = function(){

                $scope.header = ModalService.header;
                $scope.message = ModalService.message;
                $scope.messages = ModalService.messages;
                $scope.reportError = ModalService.sendError;
            };

            $scope.sendError = function(){

                self.forceHide = true;

                ApiPostFactory(UrlService.baseUrl+'',
                    {
                        caption: $scope.message,
                        details: $scope.messages

                    }).then(function(response){

                    if(response.error == true){
                        window.plugins.toast.showWithOptions(
                            {
                                message: "failed to send error report",
                                duration: "long", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "center",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                            //onSuccess, // optional
                            //onError    // optional
                        );
                    }

                    else{
                        window.plugins.toast.showWithOptions(
                            {
                                message: "hey there",
                                duration: "long", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "center",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                            //onSuccess, // optional
                            //onError    // optional
                        );
                    }

                });
            };
        },
        controllerAs: "myCtrl",
        replace: true,
        scope: true,
        link: function(scope, element, attrs, myCtrl){

            scope.$watch(myCtrl.forceHide, function(value){

                if(value == true){
                    attrs.visible = false;
                }
            });

            scope.$watch(attrs.visible, function(value){
                if(value == true){

                    myCtrl.refresh();
                    $(element).modal('show');
                }
                else if(value == false){

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
