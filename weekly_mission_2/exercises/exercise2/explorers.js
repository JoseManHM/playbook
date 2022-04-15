//Ejercicio 2 exporers
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ];

//Impresión del nombre con forEach
console.log(">>> 1) Nombres explorers");
explorers.forEach(explorer => console.log(explorer.name));

// Impresión del stack de cada explorer con forEach
console.log(">>> 2) Stack explorers")
explorers.forEach(explorer => console.log(explorer.stack));

//Creación de nueva lista con las listas de los stacks de los explorers con map
console.log(">>> 3) Nueva lista stacks");
const newStack = explorers.map((explorer) => { return explorer.stack });
console.log(newStack);

//Obtención de lista de explorers que tengan en su stack js usando filter
console.log(">>> 4) Stack con js");
const stackJS = explorers.filter((explorer) =>
    explorer.stack.includes('js')
);
console.log(stackJS);

//Busqueda primer explorer que sea de la CDMX con find
console.log(">>> 5) Primer explorer de la CDMX");
const explorerCDMX = explorers.find((explorer) => explorer.city == "CDMX");
console.log(explorerCDMX);

//Suma de los exercises_completed con reduce
console.log(">>> 6) Suma de todos los exercises_completed");
const exercisesCompleted = explorers.map((explorer) => { return explorer.exercises_completed });
const sumaExercises = exercisesCompleted.reduce((acc, explorer) => acc + explorer);
console.log(sumaExercises);

//Validación de al menos un explorer con la propiedad exercisesFinished en frontend como true usando some
console.log(">>> 7) Validación exercisesFinished frontend true");
const validacionFront = explorers.some((explorer) => explorer.missions.frontend.isFinished === true);
console.log("Al menos un explorer ha terminado los ejercicios de la misión de Frontend: "+validacionFront);

//Validación de si todos los explorers tienen la propiedad isFinshed del onboarding como true, usa every
console.log(">>> 8) Validación isFinihed onbording true");
const validacionOnboarding = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log("Todos los explorers han terminado el onboarding: " + validacionOnboarding);