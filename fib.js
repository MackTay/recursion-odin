function fibs(n) {
    let array;
    if (n <= 1) {
        array = [0];
    } else {
        array = [0,1];
        for (n; n > 2; n--) {
            let sum = array[array.length - 1] + array[array.length - 2];
            array.push(sum);
        }
    }
    return array;
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fibsRec(n - 1).concat(1);
    } else {
        let array = fibsRec(n - 1);
        return array.concat(array[array.length - 1] + array[array.length - 2]);
    }
}