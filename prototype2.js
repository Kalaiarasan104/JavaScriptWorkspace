function student(name , std ){
    this.name = name ;
    this.std = std ;
    function toString(){
        return "[ id : " + this.id + "/nname : " + this.name + "/nstd : " + this.std + "/nlocation : " + location + " ]" ;
    }
    
}
function studentId( id ) {
    this.id = id ;
}
studentId.prototype.location = "chennai" ;
var std1 = new student("kalai" , 12 ) ;
var s1Id = new studentId( 1044 ) ;
console.log( s1Id );
std1.__proto__ = s1Id ;
//s1Id.__proto__ = std1 :
console.log( std1.id );
console.log( std1.location );

console.log (std1.toString() );
//console.log(Object.getPrototypeOf());
