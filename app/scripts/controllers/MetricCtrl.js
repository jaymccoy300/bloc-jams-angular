 (function() {
     function MetricCtrl(Metric) {
          this.a = function () {
             return Metric.songCounts(); 
          };
     }
     
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['Metric', MetricCtrl]);
 })();