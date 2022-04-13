//Ejemplo 4: objeto con métodos
const pet = {
    name: "Rocky",
    //Función que se guarda como propiedad
    sayHello:function(){
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español`);
    }
}
pet.sayHello();