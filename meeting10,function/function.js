function buatTeh() {
  console.log("Rebus Air");
  console.log("Masukan teh ke dalam air panas");
  console.log("Aduk dan siap diminum");
}
buatTeh();

//Variable Local
//* Variable yang hanya bisa dibuat di dalam fungsi hanya bisa diakses dalam fungsi t
// tersebut saja

function varlocal() {
  let x = 10; //Variable Lokal
  console.log(x);
}

varlocal();
// console.log(x) //eror karena dia diluat fungsi, dia harus didalam fungsi untuk diakses

// Varibale Luar
//* Variable yang bisa dibuat di luar fungsi bisa diakses di mana saja di dalam
let firstName = "fuad";
function varLuar() {
  console.log(firstName);

  //Proses Update
  firstName = "Abdurahman";
}
console.log(firstName);

varLuar(); //memanggil fungsinya
console.log(firstName);


//Parameter
//Parameter adalah input yang dikirimkan ke fungsi.

function angka(nilai) {
    console.log(nilai);
}
// angka(45)


//Nilai Default
// Parameter bisa memiliki nilai default jika tidak ada input.
function number(no = 0) { //no = parameter, 0 = nilai default
    console.log(no);

}
number();



function add(a, b) {
  return a + b;
  }
  console.log(add(3, 5));  