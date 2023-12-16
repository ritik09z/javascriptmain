// call back function is basically use to call many objects from one functions



var person1={
     fname:"ritik",
     age:16,
     address:"indore",
    detail:function(){
        return this.fname+" "+this.age+" "+this.address
    }
     
}
// console.log(person1.detail())
var person2={
    fname:"ritik",
    age:16,
    address:"indore",
}
var person3={
    fname:"dfwelkfcnw",
    age:16,
    address:"indore",
}
console.log(person1.detail.call(person3))
console.log(person1.detail.call(person2))
console.log(person1.detail())