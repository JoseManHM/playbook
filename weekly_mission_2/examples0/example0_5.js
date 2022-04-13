//Ejemplo 5: objeto con método que recibe parámetros
const myPet = {
    name : "Tulio",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`);
    }
}
myPet.sayHelloToMyPet("Rocky");