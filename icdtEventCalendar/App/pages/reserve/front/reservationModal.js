app.controller('ReservationModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

 
    debugger;
    $scope.ok = function () {
        $modalInstance.close($scope.userInfo);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };


}]);

app.controller('ReservationResultModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {


    debugger;
    $scope.ok = function () {
        $modalInstance.close($scope.userInfo);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };


}]);