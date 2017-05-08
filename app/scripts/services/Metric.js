(function() {
  function Metric($rootScope) {
    $rootScope.songPlays = [];

    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(songObj) {
        // Add time to event register
        songObj['playedAt'] = new Date();
        $rootScope.songPlays.push(songObj);
      },
      listSongsPlayed: function() {
          console.log($rootScope.songPlays);
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
            songs.push(song.title);
        });
        return songs;
      },
      songCounts: function() {   
//          var count = 0;
//          var freq = 0;
//          var currentCount = "";
//          var short = $rootScope.songPlays;
//          console.log(short);
//          console.log("short.length");
//          console.log(short.length);
//          
//          for (var i = 0; i < short.length; i++) {
//             console.log("hello");
//          
//            var current = short[i];
//                 console.log("current");
//                 console.log(current);
//                 for(var j = i; j < short.length; j++) {
//                     if (current.title == short[j].title){
//                         console.log("found a match");
//                         count++;
//                         if(freq < count) {
//                             freq = count;
//                             currentCount = current;
//                         }
//                     }
//                 }
//               count = 0;
//           }


                       
//          var counts = {};
//          counts["Blue"]=1;
//          counts["Blue"]++;
          
            var counts = {};
          
            for(var i = 0; i < $rootScope.songPlays.length; i++ ) {
                    var song = $rootScope.songPlays[i];
                    if (counts[song.title] == null) {
                        counts[song.title]=1;
                    } else {
                        counts[song.title]++;
                    }
            }
            return counts;
          
          
        }   
     };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);
})();