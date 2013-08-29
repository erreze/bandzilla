<?php
header('Content-Type application/json');

// session_start();

include_once '../DBUtils.php';

// if(isset($_SESSION['hi'])){

// }
$s = getRowsInArray("SELECT A FROM flags");
$counter = count($s);

if(isset($_GET['s'])){
   $counter=$_GET['s'];
}

// echo $counter;

if($counter==1){
    $data= '{
        "data": [
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            }
    ]
    }';
    echo $_GET['callback']."(".$data.");"; 
}else if($counter==2){
    $data= '{
        "data": [
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            },
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            }
    ]
    }';
    echo $_GET['callback']."(".$data.");"; 
}else{
    $data= '{
        "data": [
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            },
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            },
            {
                "background_url": "http://e3fabhckvfadprm2.zippykid.netdna-cdn.com/wp-content/uploads/2010/01/waveform_popeye.gif",
                "sound_url": "http://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead_-_Pyramid_Song_%28sample%29.ogg",
                "selected_start":"0",
                "selected_end":"10"
            }
    ]
    }';
    echo $_GET['callback']."(".$data.");"; 
}
