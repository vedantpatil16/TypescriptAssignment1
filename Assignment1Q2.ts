
function Area(r : number, pi : number = 3.14) : number
{
    let iArea = pi * r * r
    return iArea
}

var radius : number = 5
var ret : number = Area(radius)
console.log("Area of circle is : ", ret)