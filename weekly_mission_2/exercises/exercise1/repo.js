//Ejercicio 1 modelado de objetos --Repo--
const repo = {
    name: "LaunchX",
    author: "manuelMayorga",
    language: "Javascript",
    numbersOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,

    getTotalIssues: function(){
        return this.issues_open + this.issues_close;
    },

    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

console.log("Nombre del repo: " + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());