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
          
            var counts = {};
          
            for(var i = 0; i < $rootScope.songPlays.length; i++ ) {
                    var song = $rootScope.songPlays[i];
                    if (counts[song.title] == null) {
                        counts[song.title]=1;
                    } else {
                        counts[song.title]++;
                    }
            }
            //console.log("Blue count is " +counts[i]);
            return counts;
          
          
        }

        
     };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);
})();