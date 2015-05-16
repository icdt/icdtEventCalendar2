
var app = angular.module('demo', ['ui.router', 'ui.calendar']);

app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }
]);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('landing', {
          url: '/',
          templateUrl: 'pages/calendar/icdtEventCalendar.html',
          controller: 'CalendarCtrl'
      })
    ;


}]);