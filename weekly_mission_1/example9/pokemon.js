class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello(){
        console.log(`El pokemon ${this.name} te saluda!`);
    }

    sayMessage(msg){
        console.log(`El pokemon ${this.name} dice: ${msg}`);
    }
  }

  module.exports = Pokemon