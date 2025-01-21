function numberOne() {
    let getElement = document.getElementById('hasil').innerText;
    total = getElement + 1;
    document.getElementById('hasil').innerText = total;
    console.log(getElement)
}

function numberTwo() {
    let getElement = document.getElementById('hasil').innerText;
    total = getElement + 2;
    document.getElementById('hasil').innerText = total;
    console.log(getElement)
}
function tambah() {
    let getElement = document.getElementById('hasil').innerText;
    total = getElement + '+';
    document.getElementById('hasil').innerText = total;
    console.log(getElement)
}
function total() {
    let getElement = document.getElementById('hasil').innerText;
    total = getElement + '=';
    document.getElementById('hasil').innerText = total;
    console.log(getElement)
}