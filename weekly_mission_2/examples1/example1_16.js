//Ejemplo 16: ordenando una lisa de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
];

users.sort((a, b) => {//Podemos invocar una función
    if (a.age < b.age) return -1
    if(a.age > b.age) return 1
    return 0
});

console.log(users);