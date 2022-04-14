//Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack){
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.exercises_completed = 0;
        this.exercises_todo = 99;
    }
    //Podemos acceder a los atributos de esta clase
    get getExercisesCompleted(){
        return this.exercises_completed;
    }
}
const woopa = new Ajolonauta("Woopa", 2, []);
//La funcion se manda a llamar sin parentesis
console.log(woopa.getExercisesCompleted);