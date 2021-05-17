function LongestWord(sen) {

    const splitSen = sen.split(" ");

    const longestWord = splitSen.map(item => item.length);
    const maxLength = Math.max(...longestWord);

    const result = splitSen.find(item => item.length === maxLength);
    // code goes here  
    return result;

}

// keep this function call here 
console.log(LongestWord(readline()));