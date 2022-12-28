const GCD = require('./GCD');

function LCM(a,b)
{
    return ((a*b) / GCD.gcd(a,b));
}

module.exports = 
{
    lcm: LCM
}