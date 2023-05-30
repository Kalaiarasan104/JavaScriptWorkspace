function add( a , b ) {
    //console.log(a+b);
    return a + b ;
}
function sub( a , b ) {
    return a - b ;
}
function mult( a , b ) {
    return a * b ;
}
function div( a , b ) {
    return a / b ;
}
function calculator( a , b , callBack){
    //console.log( callBack( a , b ) ) ;
    return callBack( a , b ) ;
 }
console.log( calculator( 2 , 6 , div ) );

//test case 
function caculatorTest( expectedResult , actualResult ) {
    if ( actualResult == expectedResult ) {
        console.log( "test case passed" ) ;
    } else {
        console.log( "test case failed" ) ;
    }
}
caculatorTest( calculator( 2 , 4 , add ) , 6 ) ;
caculatorTest( calculator( 2 , 4 , mult ) , 8 ) ;
caculatorTest( calculator( 2 , 4 , sub ) , -2 ) ;
caculatorTest( calculator( 2 , 4 , div ) , 0.5 ) ;
caculatorTest( calculator( 8 , 4 , div ) , 2 ) ;
caculatorTest( calculator( 2 , 0 , div ) , Infinity ) ;