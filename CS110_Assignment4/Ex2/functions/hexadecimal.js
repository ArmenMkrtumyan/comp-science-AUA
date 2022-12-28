function hexadecimal(n){
    let hex = "";
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (n != 0)
    {
        while(n>1)
        {
            let remainder = n % 16;
            if (remainder >= 10)
            {
                hex += letters[remainder%10];
            }
            else
            {
                hex += remainder;
            }
            n = Math.floor(n/16);
        }
        if (n == 1)
        {
            hex+=n;
        }
        let new_hex = "";
        for (let k = hex.length-1; k>=0; k--)
        {
            new_hex+= hex[k];
        }
        return new_hex;
    }
    else
    {
        return 0;
    }
    
}
module.exports =
{
    hexa: hexadecimal
}