/* 

    *EXERCISE 5
  
  * Determine x percentage of an X number
  * percentage(20, 100) //returns 20
  * percentage(43, 897) //returns 385.71  

*/

const percentage = 20
const number = 100

function percentageOf(percentage, number) {

  let computing = ((number / 100) * percentage)
  let result = `${percentage}% of ${number} is ${computing}`

  /* return `${percentage}% of ${number} is ${computing}` */

  return result
}

console.log(percentageOf(percentage, number)) //20% of 100 is 20