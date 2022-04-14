import Viajero from './viajero.js';
//Este es un ejemplo de cómo modularizar clases y usarlas mediante módulos
const viajero1 = new Viajero("Manuel","JoseManHM","NodeJS","Abril 2022");
console.log(viajero1);
console.log(viajero1.getNameAndUsername());
console.log(viajero1.getGeneralInfo());