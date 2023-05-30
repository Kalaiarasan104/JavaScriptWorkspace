function person( name , age ) {
    this.name = name ;
    this.age = age ;
}
var emp1 = new person("Kalai" , 23 ) ;
var emp2 = new person("Kevin" , 25 ) ;

person.prototype.cy = "tyss" ;
(emp1.cy) ;
person.prototype.location = "chennai" ;
console.log(person.prototype) ;
emp1.id = 11 ;
console.log(emp1);
var emp1 = new person("kalai" , 22 ) ;
var emp2 = new person("kevin" , 26 ) ;
console.log(emp1.cy) ;
console.log(emp2.cy) ;
emp1.__proto__.salary = 2000 ;
console.log(emp1.salary);
console.log(emp2.salary);
console.log(person.prototype);

