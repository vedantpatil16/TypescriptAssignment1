
function DisplayFactors(iNo : number) : void
{
    console.log("Factors of your number are : ")
    let iCnt : number = 0;
    for(iCnt = 1; iCnt <= iNo/2; iCnt++ )
    {
        if((iNo % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

var No : number = 20;

DisplayFactors(No);