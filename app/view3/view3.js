'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["date","sales"],
["04/27/2016",672522],
["04/28/2016",700062],
["04/29/2016",733293],
["04/30/2016",744330],
["05/01/2016",721189],
["05/02/2016",732430],
["05/03/2016",754441],
["05/04/2016",688406],
["05/05/2016",714970],
["05/06/2016",788050],
["05/07/2016",830397],
["05/08/2016",766436],
["05/09/2016",770331],
["05/10/2016",813858],
["05/11/2016",750419],
["05/12/2016",778135],
["05/13/2016",815841],
["05/14/2016",901105],
["05/15/2016",777439],
["05/16/2016",853066],
["05/17/2016",840720],
["05/18/2016",933133],
["05/19/2016",914542],
["05/20/2016",935753],
["05/21/2016",955818],
["05/22/2016",599937],
["05/23/2016",594761],
["05/24/2016",598206],
["05/25/2016",535037],
["05/26/2016",536224],
["05/27/2016",831113]

        ]);

        var options = {
          title: 'Page Views',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

}]);