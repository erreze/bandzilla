
$(document).ready(function() {
  $("#jpId").jPlayer( {
    ready: function () {

      $(this).jPlayer("setMedia", {
        m4a: 'http://www.jplayer.org/audio/m4a/TSP-01-Cro_magnon_man.m4a'
      })
      
      console.log('x');
    }
  });

  $("#omg").click( function() {
	   console.log('xxx');
  	$("#jpId").jPlayer("play", 42); // Begins playing 42 seconds into the media.
	});
});