app.factory('ReservationService', ['$http', function ($http) {

    var baseUrl = 'https://api.parse.com/1/classes/Reservations';

    return {
        getAll: function () {
            return $http.get(baseUrl);
        },
        getAllByDateOrder: function () {
            return $http.get(baseUrl + "?order=reserveDateInDate,reserveNo");
        },
        getByDate: function (ppDate) {
            
            if (typeof (ppDate) == 'undefined' || ppDate == 'Invalid Date') return;

            var dateObj = ppDate;
            var year = dateObj.getFullYear();
            var month = dateObj.getMonth();
            var day = dateObj.getDate();       // day of month

            var start = new Date(year, month, day);
            var end = new Date(year, month, day + 1);

            return $http.get(baseUrl + '?where={"reserveDateInDate":{"$gt":{"__type":"Date","iso":"' + start.toISOString() + '"},"$lt":{"__type":"Date","iso":"' + end.toISOString() + '"}}}');
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