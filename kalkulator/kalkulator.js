function numberOne(One) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + One;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}

function numberTwo(Two) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + Two;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberTri(Three) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 3;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberFour(Four) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 4;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}

function numberFive(Five) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 5;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberSix(Six) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 6;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberSeven(Seven) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 7;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberEight(Eight) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 8;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberNine(Nine) {
  let getElement = document.getElementById("hasil").innerText;
  if (getElement == 0) {
    getElement = null;
  }
  let total = getElement + 9;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberZero(Zero) {
  let getElement = document.getElementById("hasil").innerText;

  let total = getElement + 0;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function numberTitik(Titik) {
  let getElement = document.getElementById("hasil").innerText;

  let total = getElement + ".";
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function tambah(Plus) {
  let getElement = document.getElementById("hasil").innerText;

  let total = getElement + Plus;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function kali(Kali) {
  let getElement = document.getElementById("hasil").innerText;

  let total = getElement + Kali;
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function kurang(Minus) {
  let getElement = document.getElementById("hasil").innerText;
  let total = getElement + "-";
  document.getElementById("hasil").innerText = total;
  console.log(getElement);
}
function total(All) {
  let getElement = document.getElementById("hasil").innerHTML;
  console.log(getElement);

  if (getElement.includes("+")) {
    let parts = getElement.trim().split("+");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 + operand2;
    console.log(total);

    document.getElementById("hasil").innerHTML = total;
  } else if (getElement.includes("-")) {
    let parts = getElement.trim().split("-");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 - operand2;
    console.log(total);
    document.getElementById("hasil").innerHTML = total;
  } else if (getElement.includes("x")) {
    let parts = getElement.trim().split("x");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 * operand2;
    console.log(total);
    document.getElementById("hasil").innerHTML = total;
  }
}
function remove() {
  let num1 = document.getElementById("hasil").innerHTML;

  numbers = 0;

  document.getElementById("hasil").innerHTML = numbers;
}
