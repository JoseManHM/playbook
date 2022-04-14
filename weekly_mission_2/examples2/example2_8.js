//Ejemplo 8: métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox{
    static getMostUsefulTools(){
        return ["Command line", "git", "Text Editor"];
    }
}
console.log(Toolbox.getMostUsefulTools());
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function