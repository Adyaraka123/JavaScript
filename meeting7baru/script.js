// MAIN LOGIKA

let umur = 10;
if (umur >= 18) {
  console.log("anda sudah gede");
} else {
  console.log("anda belum gede");
}

// Menggunakan if else if
let nilaiMTK = 90;
if (nilaiMTK >= 80) {
  console.log("Grade A");
} else if (nilaiMTK >= 80) {
  console.log("Grade B");
} else if (nilaiMTK >= 70) {
  console.log("Grade C");
}

// IF ELSE NEW

let saklar = 0;
if (saklar) {
  console, log("hidup");
} else {
  console.log("mati");
}

// OPERATOR KONDISIONAL ? (TERNARY)
saklar ? console.log("hidup") : console.log("mati");

let number2 = 0;
number2 >= 10
  ? console.log("angkanya 10 atau lebih")
  : console.log("angkanya kurang dari 10");

// Multiple Ternary
let number3 = 90;
number3 >= 90
  ? console.log("Grade A") //if
  : number3 >= 80
  ? console.log("Grade B")
  : number3 >= 70
  ? console.log("Grade C")
  : number3 >= 60
  ? console.log("Grade D")
  : console.log("Grade E"); // else

// Penggunaan ? Non-tradisional
let isLogin = true;

// contoh 1
isLogin ? console.log("Selamat Datang") : console.log("Anda Belum Login");

// contoh 2
let pesan = isLogin ? "Selamat Datang" : "Anda Belum Login"; // isinya konsis
console.log(pesan);

// switch Statement
let number4 = 90;
switch (number4) {
  case 100:
  case 90: //jika
    console.log("Grade A");
    break; //berhenti
  case 80: //else if
    console.log("Grade B");
    break;
  default:
    console.log("Grade E");
}

//OPERATOR AND (&&)
let a = true;
let b = false;
let c = true;
console.log(a && b); // false
console.log(a && b && c); // false
console.log(a && true); //true
console.log(b && false); //false

if (a && b && c) {
  console.log("Kedua Variable bernilai true / benar");
} else {
  console.log("Salah satu bernilai False / salah");
}

// OPERATOR OR
let d = true;
let e = false;
let f = true;
let g = false;

console.log(d || e); // true
console.log(d || f); // true
console.log(e || g); // true

if (d || e || f) {
  console.log("salah satu bernilai true / benar");
} else {
  console.log("salah satu bernilai false / salah");
}

//OPEARATOR NOT (!)
//fungsi operator not (!) membalikan keadaan, misal a = true, maka !a = false.
let h = true;
let i = false;
let j = true;
let isRaining = true;

console.log(!i); // false
console.log(!h); // false

if (isRaining) {
  //bisa dimainkan dengan not (!)
  console.log("hari ini hujan");
} else {
  console.log("hari ini tidak hujan");
}

// LATIHAN
let nilaiMatematika = 100;  //kalau misalkan nilaiMmatematika lebih dari 100, maka dia tidak lulus, dia harus dibawah 100. 
let nilaiBahasaInggris = 75;
let saklarLampu = false;

if (nilaiMatematika >= 80 && nilaiBahasaInggris >= 74) { // if Value Variable nya setara atau lebih kecil, maka dia lulus, jika if value nya lebih besar daripada Variable nya maka tidak lulus
  console.log("lulus");
} else {
  console.log("tidak lulus");
}

//tugas
let totalBelanja = 100;
if (totalBelanja >= 80) {
  console.log("Anda mendapatkan diskon 20%");
} else if (totalBelanja >= 50) {
  console.log("Anda mendapatkan diskon 10%");
} else {
  totalBelanja < 50;
  console.log("no Diskon");
}
