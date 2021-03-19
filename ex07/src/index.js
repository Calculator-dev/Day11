var myArray = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
];



function largestNumFromArr(arr) {
    var random = [...arr]
    var maxNumArray = [];


    for (var i = 0; i < random.length; i++) {

        maxNumArray.push(Math.max(...random[i]));
    }


    return maxNumArray;
}



console.log(largestNumFromArr(myArray));
module.exports = largestNumFromArr;