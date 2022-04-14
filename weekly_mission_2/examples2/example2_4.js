//Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
    }
    getInfo(){//Es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`;
    }
    getAllInfo(){
        return `The repository ${this.name} was created by ${this.author} and is made with the language ${this.language} and it has ${this.stars} stars`;
    }
}
const myRepo = new Repository("playbook","JoseManHM","Javascript",4);
console.log(myRepo.getAllInfo());