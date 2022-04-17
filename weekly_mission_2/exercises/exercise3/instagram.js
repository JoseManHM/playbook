class Instagram {
    constructor(usuario,biografia,posts,seguidores,seguidos,ultimosLikes){
        this.usuario = usuario;
        this.biografia = biografia;
        this.posts = posts;
        this.seguidores = seguidores;
        this.seguidos = seguidos;
        this.ultimosLikes = ultimosLikes;
    }

    getUserAndBio(){
        return `The user is ${this.usuario} and the biography is: ${this.biografia}`;
    }

    getNumbersPostAndF(){
        return `The number of posts is: ${this.posts}, followers: ${this.seguidores}, following: ${this.seguidos}`;
    }
}

const karen = new Instagram("karenxu",["Medicina","Hidalgo","UAEH"],101,1007,534,[159,143,160,138]);
console.log(karen);
console.log(karen.getUserAndBio());
console.log(karen.getNumbersPostAndF());