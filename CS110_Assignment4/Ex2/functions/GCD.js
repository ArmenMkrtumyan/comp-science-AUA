function GCD(a,b)
{
    let remainder = 1;
    if (a % b == 0)
    {
        remainder = b;
    }
    while((a % b != 1) && (a % b != 0))
    {
        remainder = a % b;
        a = b;
        b = remainder;
        
    }
    return remainder;
}

module.exports = {
    gcd: GCD
}