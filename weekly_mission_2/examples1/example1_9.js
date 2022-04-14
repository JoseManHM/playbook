//Ejemplo 9: uso del reduce
const numbers = [1, 2, 3, 4, 5];
const result_of_reduce = numbers.reduce((acc, element) => acc + element, 0);
console.log(result_of_reduce);