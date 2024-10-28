"use strict";
var rest = false;
let caracter = document.getElementById("mostrar");
let ultimaLetra = caracter.value.slice(-1);
function intro(num) {
    if (rest === false) {
        caracter.value = " ";
        rest = true;
    }
    if (operadores(ultimaLetra) && operadores(num)) {
        return;
    }
    caracter.value += num;
}
function resultado() {
    try {
        let res = eval(caracter.value);
        caracter.value = res;
    }
    catch (error) {
        caracter.value = "Error";
    }
    rest = false;
}
function borrador() {
    caracter.value = "0";
    rest = false;
}
function eliminar() {
    caracter.value = caracter.value.slice(0, caracter.value.length - 1);
}
function operadores(operadores) {
    return ['+', '-', '*', '/', '.'].includes(operadores);
}
