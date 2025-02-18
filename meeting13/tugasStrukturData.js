//Latihan 1 (Map & Operasi Map)
//Sebuah Restoran Bernama "Makan Enak" memiliki menu makanan berikut =

const menuRestoran = new Map();
menuRestoran.set("Nasi Goreng", 15000);
menuRestoran.set("Mie Ayam", 13000);
menuRestoran.set("Es Teh Manis", 5000);
menuRestoran.set("Ayam Bakar", 20000);

console.log(menuRestoran);
console.log(menuRestoran.get("Mie Ayam"));
menuRestoran.delete("Es Teh Manis");
console.log(menuRestoran);

//Latihan 2 Array & Manipulasi Data
//Seorang anak Bernama Lina sangat suka Buah-Buahan. Berikut daftar buah favoritnya =

let buahFavorit = ["Mangga", "Jeruk", "Apel"];
buahFavorit.push("Pisang");
let buahJeruk = buahFavorit.indexOf("Anggur");
if (buahJeruk !== -1) {
  buahFavorit[buahJeruk] = "Anggur";
}
buahFavorit.pop();
console.log(buahFavorit);

//latihan 3 Pesanan Makanan (Rest Operator)
//Seorang Pelanggan ingin memesan makanan di sebuah Restoran. buat sebuah fungsi bernama 'PesanMakanan' yang menerima satu atau lebih jenis makanan yang dipesan dan menampilkan nya dalam bentuk Array

function PesanMakanan(...makanan) {
    return makanan;
}

let pesanan = PesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis" );
console.log(pesanan)

//Latihan 4 Klub Buku (Set & Operasi Set)
//Sebuah Komunitas Klub Buku Sedang mengumpulkan Buku yang mereka miliki. saat ini, mereka memiliki koleksi buku berikut =

let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);

koleksiBuku.add("Filosofi Teras");
koleksiBuku.add("Bumi");
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);


//Latihan 5 Gabungan Data (Spread Operator)
//Di Sebuah Toko Pakaian, terdapat dua daftar Produk =

let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = [ "Blouse", "Rok", "Cardigan"]

let pakaianToko = [...pakaianPria,...pakaianWanita]
pakaianToko.push("Kaos");

console.log(pakaianToko);

//Latihan 6 Data Penduduk (Object & Destructing)
// Di Sebuah Desa Kecil Bernama 'Cemara Asli', terdapat seorang penduduk bernama Slamet. data tentang Slamet disimpan dalam bentuk Object dengan informasi berikut =

const Penduduk = {
    NamaDepan : "Slamet",
    NamaBelakang : "Santoso",
    Umur : "45 tahun",
    Pekerjaan : "Petani",
}
Penduduk.kota = "Yogyakarta"
const {NamaBelakang} = Penduduk;
console.log(NamaBelakang);
console.log(Penduduk.Pekerjaan)

