function swappedCase(string) {
    // Allow empty string to pass
    let result = '';
    // create a for loop
    for (let i = 0; i < string.length; i++) {
        // if the  character is uppercase
        if (string[i] === string[i].toUpperCase()) {
            // convert it to lowercase
            result += string[i].toLowerCase();
        } else {
            // otherwise convert it to uppercase
            result += string[i].toUpperCase();
        }
    }
// return the result
    return result;
}
// test
console.log(swappedCase('The Quick Brown Fox'));






console.log(swappedCase("Hello")); 
console.log(swappedCase("abc123")); 
