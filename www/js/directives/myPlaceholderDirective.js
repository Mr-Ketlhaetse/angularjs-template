app.directive("myPlaceholder", function($log, $timeout) {
    var txt;
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {

            scope.$watch(attrs.myPlaceholder, function(value)
            {

                if(angular.isDefined(value))
                {
                    $(elem+':input').attr('placeholder',value)
                }
                else
                {
                    $(elem+':input').attr('placeholder','');
                }
            });
            /*scope.txt = attrs.ngPlaceholder;

            elem.bind("focus", function() {
                if(elem.val() === scope.txt) {
                    elem.val("");
                }
                scope.$apply()
            });

            elem.bind("blur", function() {
                if(elem.val() === "") {
                    elem.val(scope.txt);
                }
                scope.$apply()
            });

            // Initialise placeholder
            $timeout(function() {
                elem.val(scope.txt);
                scope.$apply();
            })*/
        }
    }
});