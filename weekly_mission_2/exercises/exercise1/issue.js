//Ejercicio modelado de datos en objetos
const issue = {
    title: "Problema 1",
    repositoryNameAsosociated: "Mision NodeJS",
    status: "Open",
    numbersOfComments: 50,
    labels: ["js","NodeJS"],
    author: "Manuel",
    dateCreated: "5-abril-2022",
    lastUpdated: "12-abril-2022",

    getTitleAndAuthor: function(){
        return `The title of the issue is ${this.title} and the author is ${this.author}`;
    },
    getGeneralInfo: function(){
        return `The issue is called ${this.title}, was created by ${this.author}, the status is ${this.status} and has ${this.numbersOfComments} comments`;
    }
}
console.log(issue);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());