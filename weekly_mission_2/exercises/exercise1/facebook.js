//Modelado de datos de facebook
const facebook = {
    user: "Karen Yoseline",
    posts: ["meme prepa","cambio foto perfil","meme semana santa"],
    finds: 725,
    biography: ["estudiante","escuchar musica","maquillaje"],

    getPostsAndBio: function(){
        return `Posts: ${this.posts} Biography: ${this.biography}`;
    }
}

console.log("El nombre de usuario es: " + facebook.user);
console.log(facebook.getPostsAndBio());