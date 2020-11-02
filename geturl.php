<?php

$url = $_REQUEST['url'];

$Context = stream_context_create(array(
    'http' => array(
        'method' => 'GET',
        'timeout' => 1
    )
));


    if (@file_get_contents($url . "/misc/img/logo.raven.jpg", false, $Context)) {
      //  echo $dom[$i] . "<br>";
        echo "<h5><a target='_blank' href='".$url."'>".$url."</a></h5>";
    }
    



?>