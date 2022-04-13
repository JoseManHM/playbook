//Ejemplo 6: uso de map para convertir todos los nombres de una lista a mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesToUpperCase = countries.map((country) => country.toUpperCase().slice(0, 3));//El método slice obtiene solo la longitud marcada del string
console.log(countriesToUpperCase);