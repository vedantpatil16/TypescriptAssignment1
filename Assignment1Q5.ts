
function Fibonacci(iNo : number) : void
{
    let n1 : number = 0; 
    let n2 : number = 1;
    let nextTerm : number = 0;

    while (nextTerm <= iNo)
    {
        console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

var No : number = 21;
Fibonacci(No);