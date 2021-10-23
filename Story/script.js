function total() {
  const nama = document.getElementById("nama").value;
  const kasir = document.getElementById("kasir").value;
  const tanggal = new Date();
  const harga = parseInt(document.getElementById("harga").value);
  const jumlah_barang = parseInt(document.getElementById("jumlah").value);
  const pembayaran = parseInt(document.getElementById("bayar").value);
  const menu = document.getElementById("menu").value;
  const jumlah_harga = harga * jumlah_barang;
  document.getElementById("total").value = jumlah_harga;

  const kembali = pembayaran - jumlah_harga;
  document.getElementById("total1").value = kembali;

  const cetak =
    "Nama Resto  : " +
    nama +
    "</br>" +
    "Date    : " +
    tanggal +
    "</br>" +
    "Nama Kasir    : " +
    kasir +
    "</br>" +
    "Menu   : " +
    menu +
    "</br>" +
    "Harga   : " +
    harga +
    "</br>" +
    "Jumlah Barang  : " +
    jumlah_barang +
    "</br>" +
    "Total Barang : " +
    jumlah_harga +
    "</br>" +
    "Pembayaran  : " +
    pembayaran +
    "</br>" +
    "Kembalian  : " +
    kembali;
  document.getElementById("cetak").innerHTML = cetak;
}
