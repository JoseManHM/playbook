//Ejemplo 13: uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques
const names = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const result = names.findIndex((name) => name.length > 7);
console.log("Ejemplo 13: primer elemento cuya palabra sea mayor a 7 está en la posición " + result);