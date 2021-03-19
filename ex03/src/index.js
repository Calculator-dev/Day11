var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

    myNewPets.push("Bird", "Fish");
    myNewPets.shift();
    var firstPet = myNewPets;
    myNewPets.pop();
    var lastPet = myNewPets;
    myNewPets.unshift("Lion");
    
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;