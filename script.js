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


console.log(`La Bike più leggera tra quelle contenute all'interno dell'Array è la ${name} con un peso di ${weight} Kg!`)

