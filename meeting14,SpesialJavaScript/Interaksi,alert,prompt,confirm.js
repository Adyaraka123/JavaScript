//Spesial Java Script


//          Hoisting


console.log(nama); //Output : Undefined, karena sebelumnya belum ada nilai yang diberikan ke variabel nama
var nama = "Budi"
console.log(nama)


//  Namun jika menggunakan let atau const, hosting akan terjadi tanpa inisialisasi

console.log(umur);
//Output : Cannot acces 'umur' before initialization
let umur = 25;


//  Contoh Housting Function

sayHello() //output : "Halo"

function sayHello() {
    console.log("Halo!")
}// Fungsi sayHello sepenuhnya diangkat, sehingga bisa dipanggil sebelum deklarasi



// Namun Hosting Tidak berlaku untuk Fungsi dalam Bentuk Ekspresi

hello() // Error : cannot access 'hello' before initialization
const hello = function() {
    console.log("Hello!");
};




// Strict Mode
// Strict mode adalah mode ketat di JavaScript yang membantu mencegah kesalahan umum dalam penulisan kode. Ini membuat kode lebih aman dan lebih mudah di-debug.

//Fungsi Strict Mode
// Mencegah penggunaan variabel tanpa deklarasi
// Tidak mengizinkan penggunaan kata kunci yang akan digunakan di masa depan
// Mencegah duplikasi parameter dalam fungsi


// Contoh Strict Mode

x = 10; // tidak ada eror meskipun x telah di deklarasikan
console.log(x);

// Dengan strict Mode

"use strict";
x = 10; // Error: X is not Defined
console.log(x)


//Manfaat Strict Mode
// Membantu menghindari kesalahan coding
// Membuat debugging lebih mudah
// Meningkatkan performa karena JavaScript engine bisa mengoptimalkan kode dengan lebih baik


// Dynamic Typing

//Pengertian Dynamic Typing
// Dynamic typing berarti tipe data variabel di JavaScript bisa berubah-ubah selama program berjalan


// Contoh Dynamic Typing

let data = "hello"; // data adalah string
console.log(typeof data); // Output : String

data = 42; // Berubah menjadi Number
console.log(typeof data) // Output : Number


//Keuntungan Dynamic Typing
// Fleksibel karena variabel bisa menyimpan berbagai tipe data
// Mempermudah penulisan kode tanpa harus menentukan tipe data di awal

// Kekurangan Dynamic Typing
// Bisa menyebabkan bug jika tipe data berubah tidak sesuai harapan
// Lebih sulit untuk mendeteksi kesalahan tipe data dalam proyek besar









