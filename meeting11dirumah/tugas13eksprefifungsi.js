function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log(`Hasil: ${result}`);
}

// Fungsi callback untuk penjumlahan
function add(a, b) {
  return a + b;
}

// Fungsi callback untuk perkalian
function multiply(a, b) {
  return a * b;
}

// Contoh penggunaan:
calculate(5, 2, add); // Output: Hasil: 8
calculate(4, 2, multiply); // Output: Hasil: 8
