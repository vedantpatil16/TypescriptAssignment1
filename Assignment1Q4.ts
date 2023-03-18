
function ChkPrime(iNo : number) : boolean
{
    let bFlag : boolean = true;
    let iCnt = 0;
    for(iCnt = 2; iCnt <= iNo/2; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            bFlag = false;
            break; 
        }
    }
    
    return bFlag;
}
var No : number = 11;

var ret : boolean = ChkPrime(No);

if(ret == true)
{
    console.log("Your number is Prime")
}
else
{
    console.log("Your number is not a prime number")
}