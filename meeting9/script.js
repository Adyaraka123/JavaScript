// PERULANGAN ( LOOPING )

// Perulangan While

let i = 1;
while (i <= 5) {
  //i akan berhenti jika sudah melewati 5 atau angka yang ditentukan, (Berhenti kalau sudah False)
  console.log(i); //1,2,3,4,5
  i++;
}

// PERULANGAN Do While
let j = 1;
do {
  console.log(j); //1,2,3,
  j++;
} while (j <= 3);

// Perulangan For
for (let k = 1; k <= 3; k++) {
  //setelah K <= 3 maka akan berhenti, lalu keconsole.log dulu untuk menampilkan hasil,baru jalan ke K++
  console.log(k);
}

// Perulangan Continue ( Melewatkan bagian)
for (let l = 1; l <= 3; l++) {
  if (l == 2) continue; //dia akan dilewatkan
  console.log(l);
}

//Break (mengentikan Perulangan)
for (let m = 1; m <= 3; m++) {
  if (m == 2) break; //dia akan dihentikan, dan tidak akan lanjut ke angka seterusnya
  console.log(m);
}



