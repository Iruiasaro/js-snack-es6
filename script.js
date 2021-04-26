//js-snack-1
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let bikes = [
    { name: "Cannondale", weight: 13 },
    { name: "Wilier", weight: 11 },
    { name: "Trek", weight: 18 },
    { name: "Pinarello", weight: 12 },
    { name: "Fuji", weight: 8 },
    { name: "Cipollini", weight: 7 },
    { name: "Specialized", weight: 9 },
]
console.log(bikes);

let maxWeight = 1000;
let lightBike = 0;

for (let i = 0; i < bikes.length; i++) {

    if (bikes[i].weight <= maxWeight) {

        maxWeight = bikes[i].weight;

        lightBike = i;
    }
}

const bikeChoice = bikes[lightBike];

const { name, weight } = bikeChoice;


console.log(`La Bike più leggera tra quelle contenute all'St.Francisno dell'Array è la ${name} con un peso di ${weight} Kg!`);


//js-snack-2
/*Creare un array di oggetti di squadre di calcio. Ogni newTeam avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const newTeam = [
    { nome: "Newppy", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Muppet", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Mambo", puntiFatti: 0, falliSubiti: 0 },
    { nome: "St.Francis", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Flynet", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Hot-Dog", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Artic", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Norfolk", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Shimada", puntiFatti: 0, falliSubiti: 0 },
];

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

for (var i = 0; i < newTeam.length; i++) {
    newTeam[i].puntiFatti = randomNumbers(1, 50);
    newTeam[i].falliSubiti = randomNumbers(1, 30);

}

var nuovoArraySquadre = [];


for (var i = 0; i < newTeam.length; i++) {
    const { nome, falliSubiti } = newTeam[i]

    nuovoArraySquadre.push({nome, falliSubiti });
}

console.log(nuovoArraySquadre);