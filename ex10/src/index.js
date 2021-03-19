

function mySplice(arr1, arr2, n) {
    var odsjekPrvog = arr2.slice();
    arr1.reverse();
    odsjekPrvog.splice(n, 0, ...arr1);
    return odsjekPrvog;
}

console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;