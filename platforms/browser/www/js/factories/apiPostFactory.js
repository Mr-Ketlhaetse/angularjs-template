myApp.factory('ApiPostFactory', function($http, $q)
{
    var qObj = null;

    return function(url, data)
    {
        qObj = $q.defer();

        $http(
            {
                method  : 'POST',
                url     : url,
                data    : data,
                timeout : timeoutTime,
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