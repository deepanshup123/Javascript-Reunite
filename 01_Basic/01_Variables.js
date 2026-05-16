
const accountId = 47704
let accountEmail = "DipanshuPatel@kwglobal.com"
var accountPassword = "abcdef"
accountCity = "Mumbai"


// accountId = 47777 // Not Acceptable
/*
Const is used to define the variable once and reuse in readmode not for write mode.
Its feature is constant variable.
*/

console.log(accountId);

accountEmail = "DipanshuPatel@gmail.com"
accountPassword = "Pass@123"
accountCity = "Pune"

/*
Let variable is used in very descipline way its function to avoid the clash with global scope
Likewise, child can used the power of parent but parent can't used the power of child
*/

console.log([accountEmail, accountPassword, accountCity])

/*
Prefere not to use "var"
because of issue in block scope and funtional scope.
*/

let accountState;

console.log(accountState);

/*
If ant variable is define without the value and we want to use then its not threw the error
in the exception its value represent as "undefined"
During practice when we get any output undefined then understand the value is not assign to given variable
*/

