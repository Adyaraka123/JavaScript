// Latihan 17 Spesial Java Script

// Nomer 1

console.log(umur)
var umur = 25;
console.log(umur);

// Nomer 2

"use strict"
x = 10;
console.log(x)

//  Nomer 3

let data = "halo";
console.log(typeof data)

data = 42;
console.log(typeof data )

data = true;
console.log(typeof data)

// Nomer 4

let user = prompt("Masukan Nama")

if (user !== null && user !== "") {
    alert("Hello" + user + ",Selamat Datang Di Pondok");
}   else {
    alert("Anda Belum Masukan Nama")
    
}


// Nomer 5
//  Confirm

let konfirmasi = confirm("Apakah Pengguna ingin melanjutkan ke halaman lain?")

if (konfirmasi) {
    alert("Anda memilih untuk Melanjutkan")
} else {
    alert("Anda Membatalkan Tindakan")
}