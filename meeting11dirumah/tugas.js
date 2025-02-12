// TUGAS 12 #

// Deklarasi Fungsi
function greet() {
    console.log('Hello, World!')
}
// Variable lokal
function showMessage() {
    let message = 'Ini adalah pesan lokal'
    console.log(message)
}

// Variable Luar
let username = 'Guest';


console.log(username)


function updateUsername() {
    username = 'Admin';
}
updateUsername();

console.log(username)

//Nilai Default

function greet(name = "User") {
    console.log('Hello, $name}!`);')
}

greet(); // Output: Hello, User!
greet("Alya"); // Output: Hello, Alya!

//Alternatif Nilai Default Parameter

function setUser(userName) {
    userName = userName || "Guest";
    console.log('Welcome, ${userName}!')
}

setUser(); //Output: Welcome, Guest!
setUser("Rafi"); //Output: Welcome, Rafi!

//Mengembalikan Nilai

function add(paramOne, paramTwo) {
    return paramOne + paramTwo;
}

console.log(add(10,7));