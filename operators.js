//logical And (&&);
// the && operator returns true if both opretors are true ; otherwise ,it returns false

let x=5;
let y=10;

if(x>0 && y>0)
{
    console.log("both x and y are greater than 0");
}
else{
    console.log('atleast one of x and y is not grater than 0')
}
// logical OR (||):
// the ! oprators is a unary that returns the opposite of the operand's truthless.

let issunny=true ;
let iswarm =false;

if(issunny || iswarm)
{
    console.log("its either sunny or warm(or both)!");
}
else{
    console.log("its neither sunny or not warm.")
}

// let isRaining=false;

// if (!istRaining){
//     console.log("its not raining enjoy your day")

// }
// else{
//     console.log("its raining.Don't forget your umbrella");
// }
