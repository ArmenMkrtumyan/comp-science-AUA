// Prime checker - not ready 


let input_number = 4;

let checker = true;
for (let i = 2; i <= Math.sqrt(input_number); i++)
{
    if (input_number % i === 0)
    {
        checker = false;
    }
}

console.log(checker && input_number > 0  ? "PRIME" : "CHKPAV");


//functions

/*
function youeStupid(why)
{
    return(why + " you are stupid");
}
console.log(youeStupid("because"));
*/

//objects

/*
let cars = [
    {
        name: "Tesla",
        speed: 300,
        price: 30000
    },
    {
        name: "Kia Soul",
        speed: 250,
        price: 12000
    }
];

for (let i = 0; i < cars.length; i++)
{
    switch (true) 
    {
        case (cars[i].price > 20000):
            console.log(cars[i].name + " might be expensive buddy");
            break;
        default:
            console.log(cars[i].name + " might be an option you know");

    }
    
}
console.log(Object.values(cars[0]));
*/


// increment operators
/*
let value = 0;

console.log(++value);

console.log(value++);
*/

//palindrome

//for numbers
/*
let num = 124;
let reversed_num = 0;

while (num > 0)
{
    let reminder = num % 10;
    reversed_num = reversed_num * 10 + reminder;

    num = (num - reminder) / 10;
}

console.log(reversed_num); 
*/

//strings
/*
const my_name = "armen";
let reversed_name = "";

for (let i = (my_name.length)-1;  i >= 0; i--)
{
    reversed_name += my_name[i];
}

console.log(reversed_name); 
*/