//Ejemplo 9: Herencia entre dos clases
class Developer{
    constructor(name, mainLang, stack){
        this.name = name;
        this.mainLang = mainLang;
        this.stack = stack;
    }
    get getName(){
        return this.name;
    }
}
const manuelDev = new Developer("Manuel","Javascript",["VueJS","PHP","NodeJS"]);
console.log(manuelDev);
//Se usa la palabra extends para indicar que heredarás las propiedades de la clase padre (Developer) en la clase definida
//Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{

}
const manuelLaunchXDev = new LaunchXStudent("jose","js",["VueJS","NodeJS"]);
console.log(manuelLaunchXDev);
console.log(manuelLaunchXDev.getName);