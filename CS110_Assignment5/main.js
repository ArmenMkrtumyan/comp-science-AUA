const utils = require('./utils.js');
const prompt = require('readline-sync');

/*console.log("MATRIX PRODUCT-------------");
utils.print(utils.matProduct
(
[[1,1,3],[1,1,3], [2,2,3], [2,2,2]], 
[[4,5,12,13],[6,14,14,15],[8,9,16,17]]
));

console.log("\n\n\n\nMATRIX SUM-------------");
utils.print(utils.matSum
(
[[1,1,4],[1,1,3], [2,2,3], [2,2,2]], 
[[4,12,13],[6,14,15],[8,16,17], [7,8,10]]
));

console.log("\n\n\n\nMATRIX ROW SUM-------------");
console.log(utils.matRowSum
(
    [[1,2,3],[4,5,6],[7,8,9]]
));


const sentence_1 = prompt.question("Type a sentence\n");
console.log(`The sentence was \"${sentence_1}\".The number of words is: `, utils.count(sentence_1));
*/
const sentence_2 = "      This is a sentence    ,    ";
console.log(`The sentence was \"${sentence_2}\"`);
console.log(`The trimmed sentence is\"${utils.trim(sentence_2)}\"`);



