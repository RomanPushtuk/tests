export function transfer(arr) {
    var matrix = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            if (!matrix[j]) {
                matrix[j] = [];
            }
            matrix[j][i] = arr[i][j];
        }
    }
    return matrix.reverse();
}