class Issue{
    constructor(title, repositoryNameAssociated, status, numbersOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numbersOfComments = numbersOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitleAndAuthor(){
        return `The title of the issue is ${this.title} and the author is ${this.author}`;
    }

    getGeneralInfo(){
        return `The issue is called ${this.title}, was created by ${this.author}, the status is ${this.status} and hast ${this.numbersOfComments} comments`;
    }
}

const issue1 = new Issue("Duda DIV","Launch X Frontend","CLOSE",45,["css","html","vuejs"],"Manuel","25-mar-2022","15-abr-2022");
console.log(issue1);
console.log(issue1.getTitleAndAuthor());
console.log(issue1.getGeneralInfo());