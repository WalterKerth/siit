const arr = [2, 5, 6, 9, 11];
const arr = [1, 3, 8, 10, 17];
function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
}