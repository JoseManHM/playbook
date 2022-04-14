//Ejemplo 7: setters para modificar los atributos del objeto
class MissionCommander{
    constructor(name, mission){
        this.name = name;
        this.mission = mission;
        this.students = 0;
        this.lives = 0;
    }
    get getStudents(){
        return this.students;
    }
    get getLives(){
        return this.lives;
    }
    //Setters
    set setStudents(students){
        this.students = students;
    }
    set setLives(lives){
        this.lives = lives;
    }
}
const missionCommanderNode = new MissionCommander("Carlo","NodeJS");
console.log("Get sin asignar valor con setters");
console.log(missionCommanderNode.getStudents);
console.log(missionCommanderNode.getLives);
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;
console.log("Get con valor asignado con setters");
console.log(missionCommanderNode.getStudents);
console.log(missionCommanderNode.getLives);