
function Maximum(No1 : number, No2 : number, No3 : number) : number
{
    if(No1 > No2)
    {
        return No1;
    }
    else if(No2 > No3)
    {
        return No2;
    }
    else
    {
        return No3;
    }
}

var ret : number = 0

var ret : number = Maximum(23,89,6)
console.log("Largest Number is : ", ret)