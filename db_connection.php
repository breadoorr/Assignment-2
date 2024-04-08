
<?php
global $connection;
$hostname = 'localhost';
$username = 'root';
$password = 'usbw';
$db = 'dchystiakova';
$connection = mysqli_connect( $hostname, $username,$password, $db);
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
