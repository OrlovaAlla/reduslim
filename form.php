<?php 
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение")."?=";
    $headers = "From: $name\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("#", $subject, $phone, $headers);
    echo $success;
?>