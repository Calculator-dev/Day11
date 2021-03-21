function splitArrayInGroups(arr, n) {
    var result = [];

    while (arr.length > 0) {
        result.push(arr.splice(0, n));
    }
    return result;
}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
module.exports = splitArrayInGroups;