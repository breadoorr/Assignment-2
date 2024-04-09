
<?php
global $connection;
$hostname = 'vesta.uclan.ac.uk';
$username = 'dchystiakova';
$password = 'r9zY6QXt';
$db = 'dchystiakova';
$connection = mysqli_connect( $hostname, $username,$password, $db);
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
