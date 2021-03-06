'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["date","sales"],
["04/27/2016",11.57508601949081],
["04/28/2016",11.05787773082955],
["04/29/2016",10.76963778462360],
["04/30/2016",11.79355930837128],
["05/01/2016",11.90617161382106],
["05/02/2016",11.61858471116693],
["05/03/2016",11.81669607033551],
["05/04/2016",11.34839033942179],
["05/05/2016",10.87849839853420],
["05/06/2016",10.51621090032358],
["05/07/2016",11.52665532269504],
["05/08/2016",11.50767970189291],
["05/09/2016",11.24269956680959],
["05/10/2016",10.89354654005981],
["05/11/2016",10.42630850231670],
["05/12/2016",10.22868782409222],
["05/13/2016",10.26731924480382],
["05/14/2016",10.50532401884353],
["05/15/2016",11.04099485618807],
["05/16/2016",10.71839693528988],
["05/17/2016",10.95715577124369],
["05/18/2016",10.77316952674484],
["05/19/2016",10.69431474989667],
["05/20/2016",10.40894338570114],
["05/21/2016",11.14982140951520],
["05/22/2016",15.67947967869959],
["05/23/2016",15.60879075796832],
["05/24/2016",16.03277131957887],
["05/25/2016",15.72283785981156],
["05/26/2016",15.78724562869248],
["05/27/2016",15.69726378964112]

        ]);

        var options = {
          title: 'Click Thru Rate',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


}]);