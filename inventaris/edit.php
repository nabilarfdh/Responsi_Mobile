<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$nama = $data['nama'];
$keterangan = $data['keterangan'];
$no_inventaris = $data['no_inventaris'];
$jumlah = $data['jumlah'];

$query = mysqli_query($koneksi, "update inventaris set nama='$nama', keterangan='$keterangan' where no_inventaris = '$no_inventaris'");

// if ($query) {
//     http_response_code(201);
//     $pesan['status'] = 'sukses';
// } else {
//     http_response_code(422);
//     $pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);
