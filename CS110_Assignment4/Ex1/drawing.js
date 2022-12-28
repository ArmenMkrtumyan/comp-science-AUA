let n = 7;

let start = " ".repeat(n);
let end = "+";

for (let i = 1; i<=n; i++)
{
    console.log(start + end);
    end+="+";
    start = " ".repeat(n-i);
}
