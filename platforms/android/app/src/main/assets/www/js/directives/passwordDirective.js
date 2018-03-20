myApp.directive('myPassword', function () {
    return {
        template: '' +
        '<div class="input-group vert-offset-top-half">' +
        '    <input type="password" class="input-lg form-control" placeholder="password" ng-model="ngModel" required />' +
        '   <span class="input-group-addon" id="{{id}}" ng-click="toggle()"> <i class="fa fa-eye " ></i></span>' +
        '</div>',
        restrict: 'E',
        replace: false,
        scope: {
            ngModel: '='
        } ,
        link: function (scope, element, attrs) {

            function makeid() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }

            scope.show = false;
            scope.id ="pass_"+makeid();
            var idCopy ="#"+scope.id;


            scope.toggle  = function()
            {
                scope.show = !scope.show;
            };

            /* scope.$watch(attrs.ngPlaceholder, function(value)
             {
             if(angular.isDefined(value))
             {
             $('input[type=password]').removeAttr('value');
             $('input[type=password]').attr("placeholder",value);
             }
             });*/

            scope.$watch('show', function (value) {

                if(value == true)
                {
                    $(idCopy).siblings(':input').attr("type","text");
                }
                else if(value == false)
                {
                    $(idCopy).siblings(':input').attr("type","password");
                }
            });
        }
    };
});