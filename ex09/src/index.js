var myArray = [7, "ate", "", false, 9];

function myBouncer(arr) {
    var lose;
    var tacanArr = [];

    for (i = 0; i < arr.length; i++) {
        lose = Boolean(arr[i]);
        if (lose === true) {
            tacanArr.push(arr[i]);
        }
    }

    return tacanArr;
}

console.log(myBouncer(myArray));
module.exports = myBouncer;