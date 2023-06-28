/* 

  * EXERCISE 4
* Given a word as parameter, invert it.
* Create a function which inverts the word
* You cannot use any js properties.
* You can oly use control structures

* Examples:
* 'hi' => ih
* 'carlos' => solrac

*/

const text = 'carlos'

function invertedWord(text) {

  // variable created as empty string
  let inverted = ''
  /* 

  for (let letter of text) {
    inverted = `${letter}${inverted}`
  }
  return `${text} is ${inverted}` */

  //for (i starts at the last character of the word; i has to be greater o equals to 0; i decrements)
  for (let i = text.length - 1; i >= 0; i--) {

    //iterates and adds to variable
    inverted += text[i]
  }
  return `${text} inverted is: '${inverted}'`
}

console.log(invertedWord(text))