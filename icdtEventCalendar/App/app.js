
var app = angular.module('demo', ['ui.router', 'ui.calendar', 'ui.bootstrap', 'ui.bootstrap.tpls']);

app.constant('PARSE_CREDENTIALS', {
    APP_ID: 'vlPcRPe7adDkABlsUq6pU4781z4gxFf3Vy3phWy5',
    REST_API_KEY: 'VPYw4NsrSLSH9XmS6hGizEBWCrQwBlrvKlCNXZNU'
});

app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }
]);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'PARSE_CREDENTIALS',
function ($stateProvider, $urlRouterProvider, $httpProvider, PARSE_CREDENTIALS) {

    $urlRouterProvider.otherwise('/reserve/front');

    $stateProvider
      .state('landing', {
          url: '/',
          templateUrl: 'pages/calendar/icdtEventCalendar.html',
          controller: 'CalendarCtrl'
      })

      .state('reserve', {
          abstract: true,
          url: '/reserve',
          template: '<div ui-view></div>'
      })
         .state('reserve.back', {
             url: '/back',
             templateUrl: 'pages/reserve/back/Index.html',
             controller: 'BackCalendarCtrl'
         })
        .state('reserve.orderList', {
            url: '/orderList',
            templateUrl: 'pages/reserve/back/list.html',
            controller: 'BackOrderListCtrl'
        })
        .state('reserve.front', {
            url: '/front',
            templateUrl: 'pages/reserve/front/Index.html',
            controller: 'FrontCalendarCtrl'
        })
    .state('parse', {
        url: '/parse',
        templateUrl: 'pages/parse/index.html',
        controller: 'ParseCloudCodeCtrl'
    })
    ;

    $httpProvider.defaults.headers.get = {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
    };

    $httpProvider.defaults.headers.post = {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
    };

    $httpProvider.defaults.headers.put = {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
    };

    $httpProvider.defaults.headers.delete = {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
    };
}]);