<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$pesan = [];

$no_inventaris = $_GET['no_inventaris'];
$query = mysqli_query($koneksi, "delete from siswa where no_inventaris = '$no_inventaris'");

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
