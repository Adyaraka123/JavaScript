//Nomer 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//Nomer 3
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

//Nomer 3

for (let k = 2; k <= 20; k += 2) {
  console.log(k);
}

//Nomer 4
for (let c = 1; c <= 10; c++) {
  if (c == 5) continue;
  console.log(c);
}

//Nomer 5
for (let d = 1; d <= 10; d++) {
  if (d == 6) break;
  console.log(d);
}
