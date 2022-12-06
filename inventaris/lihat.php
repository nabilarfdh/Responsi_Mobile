<?php
require 'koneksi.php';

$data = [];
$no_inventaris = $_GET['no_inventaris'];
$query = mysqli_query($koneksi, "select * from inventaris where no_inventaris = '$no_inventaris'");
$jumlah = mysqli_num_rows($query);

if ($jumlah == 1) {
    $row = mysqli_fetch_object($query);
    $data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);
