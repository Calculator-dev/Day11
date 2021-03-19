var myArray = ["Mary", "Army"];


function myMutation(arr) {

    var prviParametar = arr[0].toLowerCase().split("");
    var drugiParametar = arr[1].toLowerCase().split("");

    var racunaj = 0;
    for (var i = 0; i < drugiParametar.length; i++) {
        if (prviParametar.indexOf(drugiParametar[i]) > -1) {
            racunaj++;
        }
    }
    if (racunaj === drugiParametar.length) {
        return true;
    }
    return false;
}

console.log(myMutation(myArray));
module.exports = myMutation;