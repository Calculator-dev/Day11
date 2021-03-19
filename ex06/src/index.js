var myArray = [
    [2],
    [5, 6, 7],
    [8, 9]
];


function multiplyArrayFunction(myArray) {
    var glavonja = [...myArray];
    var arr = [];

    var sum = 0;
    var product = 1;
    for (var i = 0; i < glavonja.length; i++) {
        for (var j = 0; j < glavonja[i].length; j++) {
            sum += glavonja[i][j];
            product *= glavonja[i][j];
        }

    }
    arr.push(product, sum);
    return arr;


}

console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;

