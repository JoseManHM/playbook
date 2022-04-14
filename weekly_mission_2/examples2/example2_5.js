//Ejemplo 5: atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo;
        this.title = title;
        this.lines_changed = lines_changed;
        this.status = "OPEN";
        this.dateCreated = new Date();//Guarda la fecha actual en que se instancia el objeto
    }
    getInfo(){
        return `This PR in the repo ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
    }
}
const myPR1 = new PullRequest("Launch X", "First PR", 45);
const myPR2 = new PullRequest("Playbook", "My second PR", 150);
console.log(myPR1.getInfo());
console.log(myPR2.getInfo());