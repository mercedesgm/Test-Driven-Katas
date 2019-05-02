/*
Write a function wrap that takes two arguments: a string, and a column number.
The function returns the string, but with line breaks inserted at just the right places
to make sure that no line is longer than the column number.

Hint: String.prototype.indexOf or String.prototype.lastIndexOf might be useful here.
*/


const wrap = (line, maxLen) => {
    const newLine = '\n';
    const space = /\s/;

    let newString ="";

    let numOfLettersInLine = 0;

    for (let i = 0; i < line.length; i++) {
        const letter = line[i];
        if (numOfLettersInLine >= maxLen) {
            if (letter.match(space)) {
                newString += newLine;
                numOfLettersInLine = 0;
            } else {
                newString += letter;
                numOfLettersInLine++
            }
        } else {
            if (letter.match(space) && numOfLettersInLine === maxLen - 1) {
                newString += newLine
                numOfLettersInLine = 0;
            } else {
                newString += letter;
                numOfLettersInLine++
            }
        }
    }
    console.log(newString)
    return newString
}


module.exports = wrap