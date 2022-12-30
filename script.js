/* Exercice 1 */

const people = ["Greg", "Mary", "Devon", "James"];

//Pat One
//1.Écrivez du code pour supprimer "Greg" du peopletableau.
people.shift();
console.log(people);

// Écrivez le code pour remplacer "James" par "Jason".
people.splice(2, 2, "Jason");
console.log(people);

// Écrivez du code pour ajouter votre nom à la fin du peopletableau.
people.push("Gilles");
console.log(people);

// Écrivez le code qui console.logs l 'index de Mary. jetez un oeil à la indexOfméthode sur Google .
console.log(people.indexOf("Mary"));

//Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode. La copie ne doit PAS inclure "Marie" ou votre nom.
console.log(people.slice(1, 3));

// Écrivez le code qui donne l 'index de "Foo". Pourquoi renvoie-t-il -1 ?
console.log(people.indexOf("Foo"));
//Foo n'est pas présent dans le tableau

// Créez une variable appelée last dont la valeur est le dernier élément du tableau.

let last = people[3];
console.log(last);

//Part Two

// À l 'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.

for (let i = 1; i <= people.length; i++) {
    console.log(people[i - 1])
}

// À l 'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason". Indice: jetez un œil à l ' breakénoncé de la leçon.
for (let i = 1; i <= people.length; i++) {
    console.log(people[i - 1])
    if (people[i - 1] === "Jason") {
        break
    }
}


/* Exercice 2 */

// Créez un tableau appelé colorsoù la valeur est une liste de vos cinq couleurs préférées
const colors = ["bleu", "rouge", "noir", "blanc", "vert"]
const suffixe = ["er", "e", "e", "e", "e"]

// Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect… .
for (let n = 0; n <= colors.length; n++) {
    console.log(`Mon choix ${n+1} est ${colors[n]}`);
}

// Bonus : changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
for (let n = 0; n <= colors.length; n++) {
    console.log(`Mon ${n+1}${suffixe[n]} choix est ${colors[n]}`);
}

/* Exercice 3 */

//Demander à l'utilisateur un numéro.
let nb = prompt("Enter your number!!!", )
console.log(typeof(nb))

//Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.
while (parseInt(nb) < 10) {
    nb = prompt("Please enter your number!!!", )
}

/* Exerice 4 */

//Copiez et collez l'objet ci-dessus dans votre fichier Javascript.
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

//Console.log le nombre d'étages du bâtiment.
console.log(building.numberOfFloors);

//Console.log combien d'appartements sont aux étages 1 et 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.secondFloor);

//Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

//Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.
if (building.numberOfRoomsAndRent.dan[1] < building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1]) {
    let newDanTenant;
    console.log(newDanTenant = building.numberOfRoomsAndRent.dan[1] + 1200)
} else {
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

/* Exercice 5 */
// Créez un objet appelé famille avec quelques paires clé-valeur.
const famille = {
    father: "Hervé",
    mother: "Larissa",
    firtChild: "Emmanuella",
    secondChild: "Andréas",
    thirdChild: "Yohan",
}

//A l' aide d'une for inboucle, console.log les clés de l'objet.
for (const key in famille) {
    console.log(key)
}

//À l' aide d'une for inboucle, console.log les valeurs de l'objet
for (const key in famille) {
    console.log(famille[key])
}

/* Exercice 6 */

// Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer"
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

for (const key in details) {
    console.log(key + " " + details[key])
}

/* Exercice 7 */

// Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.
// Indice: une chaîne est un tableau de lettres
// Console.log le nom de leur société secrète.La sortie doit être "ABJKPS"

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronym = ""

for (const name of names.sort()) {
    console.log(name)
    acronym = acronym + name[0]
}
console.log(acronym)