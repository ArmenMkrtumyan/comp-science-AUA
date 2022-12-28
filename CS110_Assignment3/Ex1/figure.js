
let n = 6; //number of lines and columns
let line = ""; //a line to be printed after each iteration

let k = 0;
while(k < n * 2)    //firstly on the interval [0,n] we create the line, 
                    //after that we print it out n times
{
    if (k<n)
    {
        line+="+";
    }
    else
    {
        console.log(line);
    }
    k++;
}
/*

 // An easier way using the pre-built command string.repeat()
let n = 6;
let line = "+".repeat(n);
for (let i = 0; i < n; i++)
{
    console.log(line);
}*/