//Ejercicio modelado de datos
const pr = {
    title: "Primer PR",
    branchName: "playbook",
    dateCreated: "13-abril-2022",
    status: "acepted",
    repositoryNameAssociated: "Mission NodeJS",
    author: "Manuel",

    getStatus(){
        return `The actual status of the pull request is ${this.status}`;
    },
    getTitleAndAuthor(){
        return `The title of the pull request is ${this.title} and the author is ${this.author}`;
    }
}
console.log("El nombre del PR es: " + pr.title);
console.log(pr.getStatus());
console.log(pr.getTitleAndAuthor());