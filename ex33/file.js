/** You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

*/


let myString = "freeCodeCamp";
let fccRegex = /FreeCodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);