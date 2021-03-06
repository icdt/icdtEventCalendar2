﻿app.controller('BackCalendarCtrl', ['$scope', '$compile', '$timeout', 'uiCalendarConfig', 'EventService', 
    function ($scope, $compile, $timeout, uiCalendarConfig, EventService) {

    /* event source that contains custom events on the scope */
    $scope.events = [];

    EventService.getAll().then(function (res) {

        _.forEach(res.data.results, function (item) {

            //var newDate = new Date(item.start);
            //console.log(newDate);
            //debugger;
            item.className = item.iClassName;
            $scope.events.push(item);
        });
    });

    /* alert on eventClick */
    $scope.alertOnEventClick = function (eventObj, jsEvent, view) {

        EventService.remove(eventObj.objectId).then(function () {
            _.remove($scope.events, function (item) {
                return item.objectId == eventObj.objectId;
            }); 
        });
    };


    /* 自訂事件樣板 */
    $scope.eventRender = function (event, element, view) {
        element.find(".fc-content").remove();

        var newEvent = event.title;

        // example
        //var new_description =
        //    moment(event.start).format("HH:mm") + '-'
        //    + moment(event.end).format("HH:mm") + '<br/>'
        //    + event.customer + '<br/>'
        //    + '<strong>Address: </strong><br/>' + event.address + '<br/>'
        //    + '<strong>Task: </strong><br/>' + event.task + '<br/>'
        //    + '<strong>Place: </strong>' + event.place + '<br/>'
        //;
        element.append(newEvent);
    };

    /* config object */
    $scope.uiConfig = {
        calendar: {
            lang: 'zh-tw',
            height: 600,
            editable: true,
            //header: {
            //    left: 'title',
            //    center: '',
            //    right: 'today prev,next'
            //},
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender,
            selectable: true, //選擇日期會變色
            dayClick: function (date, allDay, jsEvent, view) {

                if (typeof ($scope.schedule) == 'undefined' ||
                    typeof ($scope.doctor) == 'undefined'
                    ) return;

                var dateObj = new Date(date._d);
                var year = dateObj.getFullYear();
                var month = dateObj.getMonth();
                var day = dateObj.getDate();       // day of month
                var weekDay = dateObj.getDay();    // day of week

                var startHour = 9;
                var startMinute = 0;

                var endHour = 12;
                var endMinute = 0;

                var newEvent = {
                    title: $scope.schedule + " " + $scope.doctor,
                    start: new Date(year, month, day, startHour, startMinute),
                    end: new Date(year, month, day, endHour, endMinute),
                    color: 'white',
                    //backgroundColor: 'white',
                    //borderColor: 'white',
                    textColor: 'blue',
                    iClassName: 'likeHyperLink'
                };
                console.log(newEvent.start);
                
                EventService.create(newEvent).then(function (res) {
                    newEvent.objectId = res.data.objectId;
                    newEvent.className = newEvent.iClassName;
                    $scope.events.push(newEvent);

                });
            }
        }
    };

    function sqlToJsDate(sqlDate) {
        debugger;
        //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
        var sqlDateArr1 = sqlDate.split("-");
        //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
        var sYear = sqlDateArr1[0];
        var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
        var sqlDateArr2 = sqlDateArr1[2].split("T");
        //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
        var sDay = sqlDateArr2[0];
        var sqlDateArr3 = sqlDateArr2[1].split(":");
        //format of sqlDateArr3[] = ['hh','mm','ss.ms']
        var sHour = sqlDateArr3[0];
        var sMinute = sqlDateArr3[1];
        var sqlDateArr4 = sqlDateArr3[2].split(".");
        //format of sqlDateArr4[] = ['ss','ms']
        var sSecond = sqlDateArr4[0];
        var sMillisecond = sqlDateArr4[1];

        return new Date(sYear, sMonth, sDay, sHour, sMinute);
        //return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
    };

        /* event sources array*/
    $scope.eventSources = [$scope.events];



}]);