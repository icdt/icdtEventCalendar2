app.controller('BackOrderListCtrl', ['$scope', 'ReservationService', function ($scope, ReservationService) {

    $scope.reservationList = [];
    $scope.vm = { selectDate: '' };

    $scope.initialize = function (_dt) {
        ReservationService.getByDate(_dt).success(function (res) {
            _.forEach(res.results, function (item) {
                item.reserveDate = new Date(item.reserveDate).toLocaleDateString();
            });
            $scope.reservationList = res.results;
        }).error(function () {

        });
    };

    $scope.initialize(new Date('2015/5/4'));

    //$scope.open = function ($event) {
    //    $event.preventDefault();
    //    $event.stopPropagation();

    //    $scope.opened = true;
    //};


    $scope.selectByDate = function () {
        console.log($scope.vm);
        if (typeof ($scope.vm) == 'undefined') return;

        ReservationService.getByDate(new Date($scope.vm.selectDate)).success(function (res) {
            _.forEach(res.results, function (item) {
                item.reserveDate = new Date(item.reserveDate).toLocaleDateString();
            });
            $scope.reservationList = res.results;
        }).error(function () {

        });
    };


    //$scope.$watch('vm.selectDate', function (newValue, oldValue) {
    //    //這裡輸入觸發$watch之後，欲觸發的行為  
    //    debugger;
    //    if (typeof (newValue) == 'undefined') return;

    //    ReservationService.getByDate(new Date(newValue)).success(function (res) {
    //        _.forEach(res.results, function (item) {
    //            item.reserveDate = new Date(item.reserveDate).toLocaleDateString();
    //        });
    //        $scope.reservationList = res.results;
    //    }).error(function () {

    //    });

    //}, true);



    //ReservationService.getAllByDateOrder().success(function (res) {
    //    console.log(res);
        
    //    _.sortBy(res.results, function (item) {
    //        return item.reserveDate;
    //    });

    //    _.forEach(res.results, function (item) {
    //        item.reserveDate = new Date(item.reserveDate).toLocaleDateString();
    //    });

    //    var jjGroupByDate = _.groupBy(res.results, function (item) {
    //        return item.reserveDate;
    //    });

    //    console.log(jjGroupByDate);
    //    console.log(res.results);

    //    var aaGroupByDate = [];
    //    for (var key in jjGroupByDate) {
    //        aaGroupByDate.push(jjGroupByDate[key]);
    //    }
    //    console.log(aaGroupByDate);
    //    debugger;
    //    $scope.reservationList = aaGroupByDate;

    //}).error(function (err) {

    //});


   

}]);