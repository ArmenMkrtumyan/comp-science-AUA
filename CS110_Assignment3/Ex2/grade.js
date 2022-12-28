let grade = 10; //input value assuming [0,100]
let letter_form = "F" //default grade value

// Variant 1 - I just replaced the "Yes" and "No" values by statements I had in Variant 2
if (grade < 70) //code for D and F
{
    (grade >= 60 ? (grade >= 62.5 ? (grade >= 67.5 ? (grade >= 70 ? 'WillNotWork' : letter_form = 'D+') : letter_form = 'D') : letter_form = 'D-') : letter_form = 'F');
}
else if (grade < 80) //code for C
{
    (grade >= 70 ? (grade >= 72.5 ? (grade >= 77.5 ? (grade >= 80 ? 'WillNotWork' : letter_form = 'C+') : letter_form = 'C') : letter_form = 'C-') : 'WIllNOtWork');
}
else if (grade < 90) //code for B
{
    (grade >= 80 ? (grade >= 82.5 ? (grade >= 87.5 ? (grade >= 90 ? 'WillNotWork' : letter_form = 'B+') : letter_form = 'B') : letter_form = 'B-') : 'WIllNOtWork');
}
else //code for A
{
    (grade >= 90 ? (grade >= 92.5 ? (grade >= 97.5 ? (grade >= 100 ? 'WillNotWork' : letter_form = 'A+') : letter_form = 'A') : letter_form = 'A-') : 'WIllNOtWork');

}

switch (true)
{
    case(grade >= 70):
        console.log("Your grade is " + grade + " which corresponds to " + letter_form + " You passed!");
        break;
    default:
        console.log("Your grade is " + grade + " which corresponds to " + letter_form + " You failed!");
}
/*
// Variant 2

if (grade >= 60 )
{
    if(grade >= 62.5)
    {
        if (grade >= 67.5)
        {
            if (grade >= 70)
            {
                if (grade >= 72.5)
                {
                    if (grade >= 77.5)
                    {
                        if (grade >= 80)
                        {
                            if (grade >= 82.5)
                            {
                                if (grade >= 87.5)
                                {
                                    if (grade >= 90)
                                        {
                                            if (grade >= 92.5)
                                            {
                                                if (grade >= 97.5)
                                                {
                                                    letter_form =  "A+";
                                                }
                                                else
                                                {
                                                letter_form =  "A";
                                                }
                                            }
                                            else
                                            {
                                            letter_form =  "A-";
                                            }
                                        }
                                        else
                                        {
                                        letter_form =  "B+";
                                        }
                                }
                                else
                                {
                                letter_form =  "B";    
                                }
                            }
                            else
                            {
                            letter_form =  "B-";
                            }
                        }
                        else
                        {
                        letter_form =  "C+"; 
                        }
                    }
                    else
                    {
                    letter_form =  "C"; 
                    }
                }
                else
                {
                    letter_form =  "C-"; 
                }
                
            }
            else
            {
                letter_form =  "D+"; 
            }
        }
        else
        {
            letter_form=  "D"; 
        }
    }
    else
    {
        letter_form=  "D-";
    }
}

switch (true)
{
    case(grade >= 70):
        console.log("Your grade is " + grade + " which corresponds to " + letter_form + " You passed!");
        break;
    default:
        console.log("Your grade is " + grade + " which corresponds to " + letter_form + " You failed!");
}
*/