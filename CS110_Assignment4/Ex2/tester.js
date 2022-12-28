const Factorial = require('./functions/factorial');
const GCD = require('./functions/GCD');
const LCM = require('./functions/LCM');
const HEX = require('./functions/hexadecimal')

console.log("Factorial: ", Factorial.factorial(5));
console.log("GCD: ", GCD.gcd(6,16));
console.log("LCM: ", LCM.lcm(4,20));
console.log("Hex: ", HEX.hexa(20));