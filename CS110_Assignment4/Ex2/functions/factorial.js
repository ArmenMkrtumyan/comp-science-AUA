function factorial(n)
{
    let mult = 1; //multiplactions

    while(n>0)
    {
        mult = mult*n;
        n-=1;
    }
    return mult;
}

module.exports = {
    factorial: factorial
}