let code1;

let code2;

let code3;

code1 = 7 + 3;

code2 = 90 / 2 - 5;

code3 = (25 % 9) + (15 % 8) + 25;

// console.log(code1)
// console.log(code2)
// console.log(code3)

const message = "The vault has been secured. The combination is:";

const codeA = code1 + "-" + code2 + "-" + code3;

const codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA);
console.log(message, codeB);
