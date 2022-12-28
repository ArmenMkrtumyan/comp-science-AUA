let number = 2378; //input number
let arr = []; //converted number


while(number >= 1)
{
    let reminder = number % 2;
    number = Math.floor(number / 2);
    arr.push(reminder);
}

let start = 0;
let end = arr.length-1;

while(start <= end)
{
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;

    start ++;
    end --;
}

console.log(...arr); //using the spread operator to print it in 1 line instead of 2