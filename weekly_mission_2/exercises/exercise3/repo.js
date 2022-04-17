//Ejemplo 1 ejercicio 3 conversión objetos a clases en JS
class Repo{
    constructor(name, author, language, stars, commits, forks, issues_open, issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
        this.commits = commits;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close;
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

const Repo1 = new Repo("Launch X", "Manuel", "JS", 50, 20, 35, 25, 35);
console.log(Repo1);
console.log(Repo1.getTotalIssues());
console.log(Repo1.getGeneralInfo());