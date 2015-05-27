app.controller('ParseCloudCodeCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.runCloud = function () {

        //Parse.Cloud.run('hello', {}, {
        //    success: function (result) {
        //        window.alert(result);
        //    },
        //    error: function (error) {

        //    }
        //});

        //$http.post('https://api.parse.com/1/functions/hello', {})
        //  .success(function (res) {
        //      console.log(res.result);
        //}).error(function (err) {
        //    console.log(err);
        //});
        var reservations = Parse.Object.extend("Reservations");
        var query = new Parse.Query(reservations);

        query.descending("reserveNo");

        query.find({
            success: function (result) {
                console.log(result);
                
            },
            error: function (err) {
                console.log("err: ", err);
            }
        });

    };






}]);