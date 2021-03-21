

function mySplice(arr1, arr2, n) {
    arr1.reverse();
    arr2.splice(n, 0, ...arr1);
    return arr2;
}

console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;