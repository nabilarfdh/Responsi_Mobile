<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$no_inventaris = trim($data['no_inventaris']);
$nama = trim($data['nama']);
$jumlah = trim($data['jumlah']);
$keterangan = trim($data['keterangan']);

$query = mysqli_query($koneksi, "insert into inventaris(no_inventaris, nama, jumlah, keterangan) values('$no_inventaris', '$nama', '$jumlah', '$keterangan')");

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
