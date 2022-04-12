export default class Pokemon{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`El pokemon ${this.name} dice Hola!!`);
    }

    sayMessage(msg){
        console.log(`El pokemon ${this.name} dice: ${msg}`)
    }
}