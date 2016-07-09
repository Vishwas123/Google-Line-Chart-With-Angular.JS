'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["date","sales"],
          ["04/27/2016",1685103.46],
["04/29/2016",1409394.37],
["04/29/2016",1587128.08],
["04/30/2016",2021584.7],
["05/01/2016",1916290.7],
["05/02/2016",1903934.82],
["05/03/2016",1829264.87],
["05/04/2016",1801206.07],
["05/05/2016",1469729.23],
["05/06/2016",1718445.58],
["05/07/2016",2114943.18],
["05/08/2016",2014664.09],
["05/09/2016",1928012.85],
["05/10/2016",1881597.17],
["05/11/2016",2006681.52],
["05/12/2016",1657790.28],
["05/13/2016",1831513.38],
["05/14/2016",2307825.41],
["05/15/2016",2030277.03],
["05/16/2016",2046377.97],
["05/17/2016",2068041.45],
["05/18/2016",2624135.41],
["05/19/2016",2227262.63],
["05/20/2016",2678447.38],
["05/21/2016",2573659.9],
["05/22/2016",2420261.63],
["05/23/2016",2300511.8],
["05/24/2016",2298817.47],
["05/25/2016",2252306.65],
["05/26/2016",2198129.93],
["05/27/2016",3441237.84]

        ]);

        var options = {
          title: 'Over All Sales',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

}]);