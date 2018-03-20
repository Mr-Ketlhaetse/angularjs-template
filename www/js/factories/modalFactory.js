myApp.factory('ModalFactory',['ModalService', function(ModalService){
    var serverAlert = function(){

    };

    var errorAlert = function(messages){

    };

    var failureAlert = function(message){
        ModalService.header = "Trial";
        ModalService.message = "This is a test";
        ModalService.showDialog = true;
        console.log("something is not right");
    };

    var successAlert = function(message){

    };

    var notification = function(message){

        ModalService.header = "Hello";
        ModalService.message = message;
        ModalService.showDialog = true;
    };

    return{

        serverError: serverAlert,
        failed: failureAlert,
        errors: errorAlert,
        success: successAlert,
        notify: notifictaion
    }
    
}]);