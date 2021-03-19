function splitArrayInGroups(arr, n) {
    var result = [];

    for (var i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;