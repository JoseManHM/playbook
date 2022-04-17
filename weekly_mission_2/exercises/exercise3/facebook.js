class Facebook {
    constructor(user, posts, friends, biography){
        this.user = user;
        this.posts = posts;
        this.friends = friends;
        this.biography = biography;
    }

    getPostsAndBio(){
        return `Posts: ${this.posts} Biography: ${this.biography}`;
    }
}

const karen = new Facebook("Karen Yos",["Meme prepa","cambio foto perfil","meme semana santa"],725,["Estudent","Listen music","Makeup"]);
console.log(karen);
console.log(karen.getPostsAndBio());