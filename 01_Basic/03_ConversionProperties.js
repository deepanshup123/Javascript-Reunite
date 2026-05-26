/**
let score = "35";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// ----------------------------------------------------- //


// what if value is not provided in number and instead of this value
// is mixed with alphanumberic or full alphabet

let value = "25A"

let ConvertValueInNumber = Number(value);

console.log(typeof ConvertValueInNumber); // this also show as type of number

// But what is the reason to get the alphanumeric value is as type of number

// Let see what the value is converted in the variable "ConvertValueInNumber"

console.log(ConvertValueInNumber); // The value is "NaN" Not a Number
console.log(Number(undefined));

*/

/**
 * "33" ==> 33
 * "33AB" ==> NaN
 * true ==> 1 and false ==> 0
 * null ==> 0
 * undefined ==> NaN
 */


/**
    let isLoggedIn = ""

    let booleanIsLoggedIn = Boolean(isLoggedIn)

    console.log(typeof booleanIsLoggedIn);
    console.log(booleanIsLoggedIn);
*/

/**
 * 1 ==> true
 * 0 ==> false
 * "" ==> false
 * "Dipanshu" ==> true
 * -15 or 17 ==> true
 */

/**
    let Numbers = 456

    let stingNumber = String(Numbers)

    console.log(stingNumber);
    console.log(typeof stingNumber);
*/
