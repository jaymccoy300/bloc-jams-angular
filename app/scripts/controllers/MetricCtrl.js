 (function() {
     function MetricCtrl(Metric) {
          this.a = function () {
             return Metric.listSongsPlayed(); 
          };
     }
     
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['Metric', MetricCtrl]);
 })();