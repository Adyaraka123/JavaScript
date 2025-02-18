// Struktur Data
const person = {
  name: "John",
  age: 30,
  city: "Jakarta",
  "first name": "John", //Property
  "last name ": "doe",
  test: "test",
  test2: "test2",
};

const { test, test2 } = person;
console.log(test);
console.log(test2);

console.log(person["first name"]);
console.log(person.name); // Output: John
person.country = "Indonesia"; // Add new property
console.log(person);
delete person.city; //menghapus Properti / Key 'City'
console.log(person);

//Latihan Struktur Data

const orang = {
  nama: "Benjamin",
  umur: 15,
  perumahan: "Orchid Garden",
  blok: "Blok B",
  "nama depan": "Benjamin",
  "nama belakang": "Adyaraka",
};
console.log(orang["nama depan"]);
console.log(orang.nama);
console.log(orang.perumahan);
console.log(orang.blok);
console.log(orang["nama belakang"]);

//Array

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); //Output: Apple
fruits.push("Orange"); // Menambahkan Element baru
console.log(fruits);

//Beberapa Cara Menghapus Elemen Array

fruits.pop(); // Menghapus Elemen Terakhir (Menghapus 'Orange')
console.log(fruits);

fruits.shift(); //Menghapus Element Pertama (Menghapus 'Apple')
console.log(fruits);

const buah = ["Apel", "Pisang", "Mangga"];
buah.splice(1, 1); //Menghapus Element di posisi Tertentu tertentu (Menghapus Pisang ')
console.log(buah);

//Menggunakan filter()
const buahBaru = buah.filter((buah) => buah !== "Apel"); //Menghapus Apel
console.log(buahBaru);

//Menggunakan Delete (tidak disarankan karena Meninggalkan Undefined)

const buah2 = ["Jeruk", "Anggur", "Durian"];
delete buah2[1]; //Menghapus Anggur tapi Indkes Tetap ada
console.log(buah2);

//Latihan  Array

const idCard = ["Putih", "Hitam", "Biru", "Kuning"];
console.log(idCard);

idCard.pop(); //menghapus element di posisi terakhir (kuning)
console.log(idCard);

const idCardBaru = idCard.filter((idCard) => idCard !== "Putih"); //Menghapus Putih namun meninggalkan Underfined
console.log(idCardBaru)

console.log(idCard)
idCard.shift(); //menghapus Element Pertama

console.log(idCard)





// Map

const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 25);

// Impelementasi Array
console.log(myMap);
console.log(myMap.get("name"));

//Latihan Map

const myId = new Map();
myId.set("Addres", "JL. Haji Saleh");
myId.set("Identitas", "Benjamin");

console.log(myId);
console.log(myId.get("Identitas"));

myId.delete("Addres"); //Menghapus Element

console.log(myId);

// Set

const mySet = new Set([1, 2, 3, 4]);
// Implementasinya
mySet.add(5); // Menambahkan Element Baru
console.log(mySet);
mySet.delete(2); // Menghapus Element
console.log(mySet);

// Latihan Set

const oldSet = new Set(["a", "b", "c"]);
oldSet.add(3);
console.log(oldSet);
oldSet.delete(3);
console.log(oldSet);

//Spread Operator

//contoh 1
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

//contoh 2
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

//Latihan Spread Operator
const bb1 = ["A", "B", "C"];
const bb2 = [...bb1, "D", "E", "F"];
console.log(bb2);



//Rest Operator

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(12,5,2,6 ));

//Latihan Rest Operator

function add(...numbers) {
    return numbers.reduce((total,num) => total + num, 5);
}   

console.log(add(5,6,7,5));

//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//latihan For
for ( let b = 10; b < 12; b++) { //Batas nya itu angka 10 sampai 11, tergantung seberapa besar angka yang di input
    console.log(b);
}


