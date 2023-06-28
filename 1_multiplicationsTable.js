/* 

  *EXERCISE 1

  * given two parameters:
  * number
  * multiplied
  * return its multiplication table.
  * 
  * 1 x 5 = 5
  * 2 x 5 = 5
  * 3 x 5 = 5
  * 4 x 5 = 5
  * 5 x 5 = 5
  * 6 x 5 = 5
  * 7 x 5 = 5
  * 8 x 5 = 5
  * 9 x 5 = 5
  * 10 x 5 = 5
  * 

*/

const number = 5;
const multiplied = 50;

function multiplicationTable(number, multiplied) {
  //
  let result = `The given number is ${number} and its multiplication is:\n`;

  for (let i = 1; i <= multiplied; i++) {
    const multiplied = i * number;

    result += `${i} x ${number} = ${multiplied}\n`;
  }

  return result;
}

console.log(multiplicationTable(number, multiplied));
