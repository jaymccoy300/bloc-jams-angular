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
      
    var x = function() {
        var data = [];
        var songData = Metric.songCounts();
        for (var title in songData) {
           data.push({key: title, y: songData[title]});
        }
        console.log(data);
       return data;
    }
     
//     
//     
//     
//     
//    for (var i = 0; i < Metric.songCounts.length; i++){
//        var sorting = Metric.songCounts();
//        if (sorting == undefined){
//            y : 0;
//            console.log(y);
//        }else{
//            y : Metric.songCounts()[i];
//            console.log(y);
//        }
//    }
//};
      
        
        this.data = x();
            
//        ];
    };
     
     
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['Metric', MetricCtrl]);
 })();