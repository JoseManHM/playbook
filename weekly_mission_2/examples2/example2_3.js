//Ejemplo 3: instanciar un objeto con atributos
class Student {
    //El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto
    constructor(name, age, subjects){
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
}
//Crear un objeto de la clase Student (esto se llama por instanciacion)
const manuelStudent = new Student("Manuel", 22, ["Javascript Vanilla", "VueJS", "NodeJS"]);
console.log(manuelStudent);