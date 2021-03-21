function chunkArrayInGroups(input, size) {
    var output = [];
    for (var i = 0; i < input.length; i) {
        var chunk = [];
        for (var j = 0; j < size; j++) {
            chunk.push(input[i]);
            i++;
        }
        output.push(chunk);
    }
    return output;
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2))