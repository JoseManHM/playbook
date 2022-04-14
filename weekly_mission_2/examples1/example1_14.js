//Ejemplo 14: uso de some, este método validará todos los elementos de una lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false
//Lista de elementos
const bools = [true, true, false, true];
//Uso de some para ver si al menos un elemento es false
const areSomeTrue = bools.some((b) => b === false);
console.log("Ejemplo 14: alguno de los elementos en el array es false: " + areSomeTrue);