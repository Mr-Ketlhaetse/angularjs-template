myApp.factory('ModalFactory',['ModalService', function(ModalService)
{
    var serverAlert = function(header, message, messages, sendError){

        ModalService.header = header != null && typeof header != "undefined" ? header : "Connection error";
        ModalService.message = message != null && typeof message != "undefined" ? message : "Failed to connect to the server.";
        ModalService.messages = messages != null && typeof messages != "undefined" ? messages : [
            "Please check that you have a connection to the internet and try again",
            "You may briefly disconnect from the network and reconnect after a few seconds",
            "If problem persists press 'send info' button below to notify the administrator"];

        ModalService.sendError = sendError != null && typeof sendError != "undefined" ? sendError : false;
        ModalService.showDialog = true;
    };



    var failureAlert = function(header, message, messages){

        ModalService.header = header != null && typeof header != "undefined" ? header : "Failed";
        ModalService.message = message != null && typeof message != "undefined" ? message : "This process could not complete successfully";
        ModalService.messages = messages != null && typeof messages != "undefined" ? messages : ["Please make sure that you have provided all the information needed to complete this process",
            "Make sure that all the information provided is correct before proceeding"];
        ModalService.showDialog = true;

    };

    var successAlert = function(message){

        ModalService.header = header != null && typeof header != "undefined" ? header : "Done";
        ModalService.message = message != null && typeof message != "undefined" ? message : "Successfully completed";
        ModalService.messages = messages != null && typeof messages != "undefined" ? messages : [];
        ModalService.showDialog = true;
    };

    return{

        serverError: serverAlert,
        failed: failureAlert,
        success: successAlert
    }
}]);