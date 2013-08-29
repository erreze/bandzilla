$(document).ready(function() {
  $("#jpId").jPlayer( {
    ready: function () {
      $(this).jPlayer("setMedia", {
        oga: 'http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg'
      })
    },
    supplied: "oga",
  });



  $("#omg").click( function() {
	  //  console.log('xxx');
  	var offset = $('#chartContainer>svg>g.rangeContainer>g.trackers>rect').attr('x');
    var width = $('#chartContainer>svg>g.rangeContainer>g.trackers>rect').attr('width');
    width-=offset;

    var offsetrange = $('#chartContainer>svg>g.rangeContainer>g.trackers>rect').next().attr('x');
    offsetrange-=offset;
    var widthrange = $('#chartContainer>svg>g.rangeContainer>g.trackers>rect').next().attr('width');
    widthrange-=offset;
    
    // $("#jpId").jPlayer("play", 0)
    console.log(offsetrange);
    console.log(width);

    
    var playAhead=(offsetrange/width)*100;
    // playAhead = parseInt(playAhead,10);
    console.log(playAhead);
    $("#jpId").jPlayer("playHead", playAhead);
    $("#jpId").jPlayer("play");
    console.log('x');
	});
});