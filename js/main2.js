// var myapp = angular.module('myapp', ['firebase']);

function addtrack(ix, sound_url){
  var jplayerId = "jpId_"+ ix;

      $("#trackContainer").append( "<div id='"+jplayerId+"'></div>");
      $("#"+jplayerId).jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            oga: sound_url
          })
        },
        supplied: "oga",
      });

      var chartId="jpId_chart_"+ ix;

      $("#trackContainer").append( "<div id='"+chartId+"'></div>");
      console.log($("#"+chartId));

      $("#"+chartId).dxRangeSelector({
                margin: {
                    top: 5
                },
                size: {
                    height: 100,
                    width:2000,
                },
                scale: {
                    minorTickInterval: 0.001,
                    majorTickInterval: 0.005,
                    label: {
                        format: "fixedPoint",
                        precision: 3
                    }
                },
                sliderMarker: {
                    format: "fixedPoint",
                    precision: 4,
                    customizeText: function () {
                        return this.valueText + " sec";
                    }
                },
                behavior: {
                    snapToTicks: false
                },
                dataSource: [0,180]
        });

        var btnId="jpId_btn_"+ ix;
        var btnId="jpId_playat_"+ ix;
        $("#trackContainer").append( "<button class='btn btn-small btn-warning' id='"+btnId+"'>play</button>");
        $("#trackContainer").append( "<input class='input-small' id='"+btnId+"' type='text' >");


        $("#"+btnId).click( function() {
          //  console.log('xxx');
          var offset = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('x');
          var width = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('width');
          width-=offset;

          var offsetrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('x');
          offsetrange-=offset;
          var widthrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('width');
          widthrange-=offset;
          
          console.log(offsetrange);
          console.log(width);

          
          var playAhead=(offsetrange/width)*100;
          // playAhead = parseInt(playAhead,10);
          console.log(playAhead);
          $("#"+jplayerId).jPlayer("playHead", playAhead);
          $("#"+jplayerId).jPlayer("play");
          console.log(jplayerId);
        });
}

          
$(document).ready(function() {
  $.ajax({
       url:"http://172.16.1.175:8888/data/tracks.php?callback=cb",
       dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
       success:function(json){
           // do stuff with json (in this case an array)
           console.log(json);
           json=json.data;
           for (var i = 0; i < json.length; i++) {
             var sound_url = json[i].sound_url;
             console.log(sound_url);
             addtrack(i, sound_url);
           };
       },
       error:function(){
           alert("Error");
       },
  });
});