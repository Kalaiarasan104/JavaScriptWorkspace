function book( id , name , author ){
    this.id = id ;
    this.name = name ;
    this.author = author ;
    this.changeName = changeName ;
    this.toString = toString ;
}
var changeName=function (newName){
    this.name = newName ;
}
toString = function(){
    string = "[ id : " + this.id + "\nname : " + this.name + "\nauthor : " + this.author + "]" ;
    return string ;
}
book1 = new book( 1 , "PS-1" , "Kaliki" ) ;
console.log( book1.toString() ) ;
book1.changeName("PS---2") ;
console.log( book1.toString() ) ;
console.log( );

console.log("----------------------------");

book2 = new book( 2 , "Julies Ceasor" , "Shakespeare" ) ;
book3 = new book( 3 , "Gulliver's travel" ,  ) ;
book4 = new book( 4 , "Wings Of Fire " , "A P J" ) ;
book5 = new book( 5 , "Anna's Tales" , null ) ;
var books = [ book1 , book2 , book3 , book4 , book5 ] ;
for( var entry of books){
    console.log( entry.toString() );
}
