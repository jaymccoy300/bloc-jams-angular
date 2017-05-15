(function() {
    function MetricCtrl(Metric) {
      this.a = function () {
         return Metric.songCounts(); 
      };
     this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
      
 x = function() {
    for (var i = 0; i < Metric.songCounts.length; i++){
        var sorting = Metric.songCounts()[i];
        if (sorting == undefined){
            y : 0;
            console.log(y);
        }else{
            y : Metric.songCounts()[i];
            console.log(y);
        }
    }
};
      
        
        this.data = [
            {
             key: sorting,
             y : x()
            }
            
//            {
//                key: "Blue",
//                y: x()
//            },
//            {
//                key: "Green",
//                y: Metric.songCounts()["Green"]
//            },
//            {
//                key: "Red",
//                y: Metric.songCounts()["Red"]
//            },
//            {
//                key: "Pink",
//                y: Metric.songCounts()["Pink"]
//            },
//            {
//                key: "Magenta",
//                y: Metric.songCounts()["Magenta"]
//  
//            }
        ];
    };
     
     
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['Metric', MetricCtrl]);
 })();