let arr = [1, 2, 5, 6]; //input an array

let end = arr.length-1;

for (let start = 0; start <= end; start++)
{
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;


    end --;
}

console.log(arr);
