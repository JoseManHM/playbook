//Ejemplo 7: uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Bolivia'];
const countriesContainingLand = countries.filter((country) => /*Esta es una function*/
country.includes('land')// indicación para solo filtrar elementos que incluyan 'land'
);
console.log(countriesContainingLand);
//Filtrar países que terminen en ia
const conuntriesEndsByia = countries.filter((country) => country.endsWith('ia'));
console.log(conuntriesEndsByia);