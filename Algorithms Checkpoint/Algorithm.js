function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

function gettCount(str) {
   let wordCount = 1;
   for (let char of str) {
       if (char === " ") {
           wordCount++;
       }
   }
   return wordCount++;
}

let str = "Yassorz is gamed fashkhollaa!";

console.log(getCount(str));
console.log(str.length);
console.log(gettCount(str));
