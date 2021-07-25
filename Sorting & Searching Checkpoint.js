
function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {
            if (array[j] < array[j-1]) {
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
            else {
                break;
            }
        }
    }

    return array;
}

console.log(insertionSort([2, 5, 3, 8, 1, 6, 0, 2123, 342, 542, 832, 92, 30, 69, 420, 21]))