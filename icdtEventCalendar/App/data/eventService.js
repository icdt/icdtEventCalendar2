app.factory('EventService', ['$http', function ($http) {

    var baseUrl = 'https://api.parse.com/1/classes/Events';

    return {
        getAll: function () {
            return $http.get(baseUrl);
        },
        getOne: function (objId) {
            return $http.get(baseUrl + '/' + objId);
        },
        create: function (ppObj) {
            return $http.post(baseUrl, ppObj);
        },
        update: function (ppId, ppObj) {
            return $http.put(baseUrl + '/' + ppId, ppObj);
        },
        remove: function (ppId) {
            return $http.delete(baseUrl + '/' + ppId);
        }
    };





}]);