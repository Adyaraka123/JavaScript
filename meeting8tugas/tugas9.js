//TUGAS 9
//NOMER 1

// // Andi memiliki nilai MTK adalah 91,
// IPA adalah 81
// IPS adalah 91
// untuk Lulus dalam ujian, nilai andi harus sama dengan atau diatas 91 untuk masing-masing tugas.

// Jika nilai MTK diatas atau sama dengan 91 && nilai IPA diatas atau sama dengan 91 && nilai IPA diatas atau sama dengan 91 && nilai IPS diatas atau sama dengan 91
// maka tampilkan di console log "andi lulus"
// selain itu, "Andi tidak lulus"
// pertanyaannya
// Buatlah kondisi menggunakan Perbandingan Operator AND (&&)

let nilaiMTK = 91;
let nilaiIPA = 81;
let nilaiIPS = 91;

if (nilaiMTK >= 91 && nilaiIPA >= 91 && nilaiIPS >= 91) {
  console.log("Andi Lulus");
} else {
  console.log("Andi Tidak Lulus");
}

//NOMER 2

// Andi memiliki nilai MTK adalah 91,
// IPA adalah 81
// IPS adalah 91
// untuk Lulus dalam ujian, andi harus memiliki salah satu saja mapel nilainya sama dengan atau diatas 91 untuk salah satu tugas.

// Jika nilai MTK diatas atau sama dengan 91 || nilai IPA diatas atau sama dengan 91 || nilai IPA diatas atau sama dengan 91 || nilai IPS diatas atau sama dengan 91
// maka tampilkan di console log "andi lulus"
// selain itu, "Andi tidak lulus"
// pertanyaannya
// Buatlah kondisi menggunakan operator Perbandingan OR ( || )

let Matematika = 91;
let nIPS = 81;
let nIPA = 91;

if (Matematika >= 91 || nIPS >= 91 || nIPA >= 91) {
  console.log("Andi lulus");
} else {
  console.log("andi Tidak lulus");
}

//NOMER 3 
// Buatlah program untuk mengecek status login pengguna berdasarkan variabel isLoggedIn. Berikut adalah ketentuannya:
// Jika Tidak Login maka tampilkan console log "Anda Belum Login"
// selain itu "anda sudah login"
// *

let isLoggedIn = true;
if (!isLoggedIn) {
    console.log('Logged in')}
    else {console.log('not Logged in')}
