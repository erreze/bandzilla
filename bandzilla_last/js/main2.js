// var myapp = angular.module('myapp', ['firebase']);

function addtrack(ix, sound_url, background_url, img_url){
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

      $("#trackContainer").append( "<div class='audiotrack' id='"+chartId+"'></div>");
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
                background: {
                    image: {                            
                        url: background_url,
                        location: 'full'
                    }
                },
                dataSource: [0,180]
        });

      // $("#"+chartId).appendTo('.audiotrack');
      $('<div class="playtracker"></div>').appendTo($("#"+chartId));


        // $('#omg').click(function(){
            
        //     });

        var btnId="jpId_btn_"+ ix;
        var btnId="jpId_playat_"+ ix;
        $("#trackContainer").append( "<button class='btn btn-small btn-warning playbtn' id='"+btnId+"'><img id='playb' src='images/buttons/icons/play.png'/><img style='display:none' id='stopb' src='images/buttons/icons/stop.png'/></button>");
        // $("#trackContainer").append( "<input class='input-small' id='"+btnId+"' type='text' >");

        $("#trackContainer").append( "<img src='"+img_url+"' style='width:30px'>");



        //$("#trackContainer").prepend('<div class="profile"><img id="'+  +'" src="images/'+  +'.jpg" /></div>').prependTo("#trackContainer");


        $("#"+btnId).click( function() {
          //  console.log('xxx');
          

          console.log($("#"+btnId).html());
          if($("#"+btnId+" #playb").is(":visible")){
            $("#"+btnId +" img").toggle();
            var offset = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('x');
            var width = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('width');
            width-=offset;

            var offsetrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('x');
            offsetrange-=offset;
            var widthrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('width');
            widthrange-=offset;
            
            console.log(offsetrange);
            console.log(width);


            var son = '#'+chartId+' .playtracker';
            $(son).stop();
            $(son).css('left', offsetrange+70);
            $(son).animate({left: "1000px"}, 180000 , "linear" );

            
            var playAhead=(offsetrange/width)*100;
            // playAhead = parseInt(playAhead,10);
            console.log(playAhead);
            $("#"+jplayerId).jPlayer("playHead", playAhead);
            $("#"+jplayerId).jPlayer("play");
            console.log(jplayerId);
          }else{



            var offset = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('x');
            var width = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').attr('width');
            width-=offset;

            var offsetrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('x');
            offsetrange-=offset;
            var widthrange = $('#'+chartId+'>svg>g.rangeContainer>g.trackers>rect').next().attr('width');
            widthrange-=offset;
            
            console.log(offsetrange);
            console.log(width);

            
            $("#"+btnId +" img").toggle();
            var son = '#'+chartId+' .playtracker';
            $(son).stop();
            $(son).css('left', offsetrange+70);

            var playAhead=(offsetrange/width)*100;
            // playAhead = parseInt(playAhead,10);
            console.log(playAhead);
            $("#"+jplayerId).jPlayer("stop");
            console.log(jplayerId);
          }

          
        });
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

$(document).ready(function() {
  var s = getURLParameter('s');
  console.log(s);
  // var arr = [];
  // arr.push({
  //   "background_url": "http://localhost:8888/waves/bateria.jpg",
  //   "sound_url": "http://localhost:8888/audios/bateria.ogg"
  // });
  // arr.push({
  //   "background_url": "http://localhost:8888/waves/bajo.jpg",
  //   "sound_url": "http://localhost:8888/audios/bajo.ogg",
  // });
  // arr.push({
  //       "background_url": "http://localhost:8888/waves/vocal.jpg",
  //       "sound_url": "http://localhost:8888/audios/vocal.ogg"
  // });
  
  //           //     "sound_url": "http://localhost:8888/audios/vocal.ogg",
  //           // {
  //           //     "background_url": "http://localhost:8888/waves/bajo.jpg",
  //           //     "sound_url": "http://localhost:8888/audios/bajo.ogg",
  //           //     "selected_start":"0",
  //           //     "selected_end":"10"
  //           // },
  //           // {
  //           //     "background_url": "http://localhost:8888/waves/vocal.jpg",
  //           //     "sound_url": "http://localhost:8888/audios/vocal.ogg",
  //    for (var i = 0; i < arr.length; i++) {
  //          var sound_url = arr[i].sound_url;
  //          var background_url = arr[i].background_url;
  //          console.log(sound_url);
  //          addtrack(i, sound_url, background_url);
  //        };     

  $.ajax({
       // url:"http://172.16.1.175:8888/data/tracks.php?callback=cb&s="+s,
       url:"http://localhost:8888/data/tracks.php?s="+s,
       dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
       success:function(json){
           // do stuff with json (in this case an array)
           console.log(json);
           json=json.data;
           for (var i = 0; i < json.length; i++) {
             var sound_url = json[i].sound_url;
             var background_url = json[i].background_url;
             var img_url = json[i].img_url;
             console.log(sound_url);
             addtrack(i, sound_url, background_url, img_url);
           };
       },
       error:function(){
           alert("Error");
       },
  });
  $("#playall").click(function (){

    
  })
});