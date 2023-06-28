/* 

  *EXERCISE 3

  *Given a word, search it inside a string and return it.

  *string => 'hi im a word inside a frase with another word'
  * parameter => word
  * return word 2 times
  * return carlos 0

*/

const str = 'I love programming, although, programming is kinddaaaa TOUGH, still, I love programming'
const word = ' programming '

//function creation
function countingWords(str, word) {

  //variable to 'clean' remove characters and to convert it to lower case
  let dividedStr = str.replace(/[!,._-]/g, '').toLowerCase()

  //variable to split into words the string
  let arrStr = dividedStr.split(' ')

  //empty object creation
  let obj = {}

  //for loop
  for (let i = 0; i < arrStr.length; i++) {

    //variable to save arr positions
    const letter = arrStr[i]

    //conditional if to determine if inside the string includes the given word
    if (arrStr.includes(word)) {

      //conditional if to count and add the parameter word
      if (obj[letter]) {

        obj[letter]++

      } else {

        obj[letter] = 1

      }

      //if no word found it will return 0  
    } else {

      return 0
    }

  }

  //returning word counting
  return `The word ${word} is shown ${obj[word]} times.`
}

console.log(countingWords(str, word))// 3