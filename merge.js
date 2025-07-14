function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftMerged = mergeSort(arr.slice(0,mid));
    let rightMerged = mergeSort(arr.slice(mid));
    let newArr = [];

    while (leftMerged.length && rightMerged.length) {
        newArr.push(leftMerged[0] < rightMerged[0] ? leftMerged.shift() : rightMerged.shift());
    }

    return newArr.concat(leftMerged, rightMerged);
}