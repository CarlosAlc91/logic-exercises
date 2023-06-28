/* 

  * EXERCISE 2

  * given a text parameter:
  * determine if we have a palindrome.
  * 
  * 'otto' => true
  * 'carlos' => false
*/

const text = "carlos";

function isPalindrome(text) {
  const palindrome = text.split("").reverse().join("");
  /* console.log(palindrome); */

  /*  if (palindrome === text) {
    return `Awesome!! ${text}, it's a palindrome`;
  } else {
    return `Sorry! ${text}, it's not a palindrome`;
  } */

  return text === palindrome ? `${text} it's a palindrome`
    : `${text} it's not a palindrome`;
}

console.log(isPalindrome(text));
