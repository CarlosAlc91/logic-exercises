/* 

  *EXERCISE 3

  *Given two parameters, str and word, create a function where the parameter 'word' is search inside a string.
  *You must return how many times that word is found inside the string.
  * If word is an empty string it has to return 'Enter a word'
  * If the word is not found it has to return 'word not found'

  *str => 'I love programming, although, programming is kinddaaaa TOUGH, still, I love programming'
  * word => 'programming'
  * return word[programming] => 2 times
  * return word[carlos] => 'carlos not found'
  * return word[''] => 'Enter a word'

*/

const str = 'I love programming, although, programming is kinddaaaa TOUGH, still, I love programming'
const word = 'programming'

//function creation
function countingWords(str, word) {

  //variable to 'clean' remove characters and to convert it to lower case
  let dividedStr = str.replace(/[!,._-]/g, '').toLowerCase()

  //variable to split into words the string
  let arrStr = dividedStr.split(' ')

  //empty object creation
  let obj = {}

  if (word === '') {
    return `Enter a word`
  }

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

      return `${word} is not found`
    }

  }

  //returning word counting
  return `The word ${word} is shown ${obj[word]} times.`
}

console.log(countingWords(str, word))// 3