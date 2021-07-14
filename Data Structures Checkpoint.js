let set1 = [4, 5, 9, 2, 10];
let set2 = [2, 7, 5, 9, 11];
sum = 0;

function uniqueNum (set1, set2) {
    let arr_of_unique = [];
    for (let i = 0; i < set1.length; i++) {
        let is_unique = true;
        
        for (let idx in set2) {
            if (set1[i] === set2[idx]) {
                is_unique = false;
                break;
            }
        }

        if (is_unique) {
            arr_of_unique.push(set1[i])
        }
    }

    for (let i = 0; i < set2.length; i++) {
        let is_unique = true;
        
        for (let idx in set1) {
            if (set2[i] === set1[idx]) {
                is_unique = false;
                break;
            }
        }

        if (is_unique) {
            arr_of_unique.push(set2[i])
        }
    }
    
    for (i = 0; i < arr_of_unique.length; i++) {
        sum = arr_of_unique[i] + sum;
    }
    console.log(arr_of_unique);

    return sum;
}

console.log(uniqueNum(set1, set2));

// ###############################################

set1 = [4, 5, 9, 2, 10];
set2 = [2, 7, 5, 9, 11];

let count_obj = {};

for (let number of set1) {
    if (count_obj[number] == true) {
        count_obj[number] += 1;
    } else {
        count_obj[number] = 1;
    }
}

for (let number of set2) {
    if (count_obj[number] == true) {
        count_obj[number] += 1;
    } else {
        count_obj[number] = 1;
    }
}

let addition = 0;

for (const [key, value] of Object.entries(count_obj)) {
    if (value === 1) {
        addition += parseInt(key);
    }
    else {}
}
console.log(count_obj);
console.log(addition);
