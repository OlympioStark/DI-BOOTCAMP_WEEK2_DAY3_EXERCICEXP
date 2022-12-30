/* Exercice 1 */

const people = ["Greg", "Mary", "Devon", "James"];

//Pat One
//1.
people.shift();
console.log(people);

//2. 
people.splice(2, 2, "Jason");
console.log(people);

//3.
people.push("Gilles");
console.log(people);

//4.
console.log(people.indexOf("Mary"));

//5.
console.log(people.slice(1, 3));

//6.
console.log(people.indexOf("Foo"));
//Foo n'est pas présent dans le tableau

//7.
let last = people[3];
console.log(last);

//Part Two

// 1.
for (let i = 1; i <= people.length; i++) {
    console.log(people[i - 1])
}

// 2.
for (let i = 1; i <= people.length; i++) {
    console.log(people[i - 1])
    if (people[i - 1] === "Jason") {
        break
    }
}


/* Exercice 2 */

// 1.
const colors = ["bleu", "rouge", "noir", "blanc", "vert"]
const suffixe = ["er", "e", "e", "e", "e"]

// 2.
for (let n = 0; n <= colors.length; n++) {
    console.log(`Mon ${n+1}${suffixe[n]} choix est ${colors[n]}`);
}

/* Exercice 3 */

//1.
let nb = prompt("Enter your number!!!", )
console.log(typeof(nb))

//2.
while (parseInt(nb) < 10) {
    nb = prompt("Please enter your number!!!", )
}

/* Exerice 4 */

//1.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

//2.
console.log(building.numberOfFloors);

//3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.secondFloor);

//4.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

//5.
if (building.numberOfRoomsAndRent.dan[1] < building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1]) {
    let newDanTenant;
    console.log(newDanTenant = building.numberOfRoomsAndRent.dan[1] + 1200)
} else {
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

/* Exercice 5 */

const famille = {
    father: "Hervé",
    mother: "Larissa",
    firtChild: "Emmanuella",
    secondChild: "Andréas",
    thirdChild: "Yohan",
}

//1.
for (const key in famille) {
    console.log(key)
}

//2.
for (const key in famille) {
    console.log(famille[key])
}

/* Exercice 6 */

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

for (const key in details) {
    console.log(key + " " + details[key])
}

/* Exercice 7 */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronym = ""

for (const name of names.sort()) {
    console.log(name)
    acronym = acronym + name[0]
}
console.log(acronym)