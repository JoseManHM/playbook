//Modelado de atos de un perfil de IG
const instagram = {
    usuario: "karenxu",
    biografia: ["Medicina","Hidalgo","UAEH"],
    posts: 101,
    seguidores: 1007,
    seguidos: 534,
    ultimosLikes: [159,143,160,138],

    getUserAndBio: function(){
        return `The user is: ${this.usuario} and the biography is: ${this.biografia}`;
    },
    getNumbersPostAndF: function(){
        return `The number of posts is: ${this.posts}, followers: ${this.seguidores}, following: ${this.seguidos}`;
    }
}
console.log("Usuario: "+ instagram.usuario);
console.log(instagram.getUserAndBio());
console.log(instagram.getNumbersPostAndF());