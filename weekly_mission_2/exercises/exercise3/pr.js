class PR {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated, author){
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.author = author;
    }

    getStaus(){
        return `The actual status of the pull request is ${this.status}`;
    }

    getTitleAndAuthor(){
        return `The title of the pull request is ${this.title} and the author is ${this.author}`;
    }
}

const pr1 = new PR("Primer PR","Launch X NODEJS","15-abr-2022","ACEPTED","Launch X","Manuel");
console.log(pr1);
console.log(pr1.getStaus());
console.log(pr1.getTitleAndAuthor());