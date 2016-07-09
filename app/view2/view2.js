'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["date","sales"],
["04/27/2016",14274],
["04/28/2016",13279],
["04/29/2016",15378],
["04/30/2016",16934],
["05/01/2016",16156],
["05/02/2016",16097],
["05/03/2016",15928],
["05/04/2016",14728],
["05/05/2016",13465],
["05/06/2016",15098],
["05/07/2016",17652],
["05/08/2016",16546],
["05/09/2016",16092],
["05/10/2016",16011],
["05/11/2016",15244],
["05/12/2016",14396],
["05/13/2016",15821],
["05/14/2016",18631],
["05/15/2016",15679],
["05/16/2016",16816],
["05/17/2016",18060],
["05/18/2016",20846],
["05/19/2016",18442],
["05/20/2016",21437],
["05/21/2016",21210],
["05/22/2016",19976],
["05/23/2016",19180],
["05/24/2016",19109],
["05/25/2016",18709],
["05/26/2016",18708],
["05/27/2016",29139]

        ]);

        var options = {
          title: 'Orders',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


}]);