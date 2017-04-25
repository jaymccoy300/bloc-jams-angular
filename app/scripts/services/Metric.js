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
          var songs = {};
          // return something like {"blue": 5, "red": 2, "green": 3}
      }
    };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);
})();