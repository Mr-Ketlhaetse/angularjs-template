myApp.factory('ApiGetFactory', function($http, $q)
{
    var qObj = null;

    return function(Url)
    {
        qObj = $q.defer();

        $http(
            {
                method: 'GET',
                url: url
            }
        ).then(
            function(result){
                qObj.resolve({error: false, data: result.data})
            },
            function(error){
                qObj.reject({error:true, data:error.data});
            });

        return qObj.promise;
    }
});