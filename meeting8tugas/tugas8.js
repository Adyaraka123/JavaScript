// LATIHAN
// TUGAS NOMER 1
// Andi adalah seorang pelajar di sekolah ABC,
// andi mengikuti ujian susulan IT
// jika nilai susulan IT andi diatas 91 atau sama dengan 91, maka andi termasuk grade A
// jika nilai susulan IT andi diatas 81 atau sama dengan 81, maka andi termasuk grade B
// jika nilai susulan IT andi diatas 71 atau sama dengan 71, maka andi termasuk grade C
// selain itu, maka andi termasuk grade C
// Setelah Ujian susulan, nilai susulan IT andi adalah 81

// Pertanyaannya:
// Tampilkan Grade Andi dengan console log pada soal diatas dengan menggunakan:
// - Metode if...else Statement
// - Metode Ternary (Multiple ?)

//JAWABAN NOMER 1
//METODE IF ELSE
let nilaiIT = 81;
if (nilaiIT >= 91) {
  console.log("Grade A");
} else if (nilaiIT >= 81) {
  console.log("Grade B");
} else if (nilaiIT >= 71) {
  console.log("Grade C");
}

//METODE Multiple ?
let ujianIT = 81;
ujianIT >= 91
  ? console.log("Grade A")
  : ujianIT >= 81
  ? console.log("Grade B")
  : ujianIT >= 70
  ? console.log("Grade C")
  : console.log("Grade D");

//TUGAS NOMER 2
//   Nurudin berbelanja dipasar untuk membeli buah,
// Ketika pergi ia membeli buah Nangka 1buah,

// Jika buah yang didapatnya adalah Chery, maka tampilkan nama buah yang didapatkannya
// Jika buah yang didapatnya adalah Nangka, maka tampilkan nama buah yang didapatkannya
// Jika buah yang didapatnya adalah Salak, maka tampilkan nama buah yang didapatkannya
// Jika buah yang didapatnya adalah Salak beserta Nangka, maka tampilkan nama buah yang didapatkannya
// Selain itu defaultnya adalah "Nurudin tidak membeli buah apapun"

// Ketika nurudin pulang, ia juga membeli salak 2kg .

// pertanyaannya:
// Tampilkan hasil diatas menggunakan metode:
// - switch Statement

//JAWABAN 2

let buahYangDibawa = "Nangka"; //
let buahTambahan = "Salak"; //

switch (buahYangDibawa) {
  case "Chery":
    console.log("Nurudin mendapatkan buah Chery.");
    break;
  case "Nangka":
    console.log("Nurudin mendapatkan buah Nangka.");
    break;
  case "Salak":
    if (buahTambahan === "Salak") {
      console.log("Nurudin mendapatkan buah Salak dan Nangka.");
    } else {
      console.log("Nurudin mendapatkan buah Salak.");
    }
    break;
  default:
    console.log("Nurudin tidak membeli buah apapun.");
}

// diketahui variable saklar isi nilainya adalah undefined
// Jika benar maka tampilkan teks di console log "saklarnya hidup"
// selain itu, tampilkan di console log "saklarnya mati"

// pertanyaannya:
// tampilkan hasil diatas menggunakan metode:
// - Konversi Boolean dalam if
// let saklar = undefined;

// JAWABAN 3
if (!Boolean(saklar)) {
  console.log("Saklarnya mati");
} else {
  console.log("Saklarnya hidup");
}

let hasil = nilai > 70 ? "lulus" : "tidak lulus";

// TUGAS 8 GOOGLE FORM

let nilaiAngka = prompt("Masukkan nilai angka:");
nilaiAngka = parseInt(nilaiAngka);

if (nilaiAngka > 50) {
  console.log("Nilai sangat besar");
} else if (nilaiAngka >= 20 && nilaiAngka <= 50) {
  console.log("Nilai cukup besar");
} else {
  console.log("Nilai kecil");
}
