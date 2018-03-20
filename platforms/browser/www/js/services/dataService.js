myApp.service('DataService', function()
{
   var self = this;

    self.environment    = "dev";
    self.stores         = [];
    self.selectedStore  = null;
    self.selectedClient = null;
    self.myLocation     = {};
    self.clients        = [];
    self.questionnaire  = null;
});