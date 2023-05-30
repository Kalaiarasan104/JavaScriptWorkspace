function calculator( a , b , task ) {
    return calculatorPromise = new Promise((resolve , reject ) => {
        if( typeof(a) != 'number' || typeof(b) != 'number' ) {
            reject( 'invalid type' ) ;
        } else {
            if ( task == "add" ) {
                 return resolve( a + b ) ;
            } else if ( task == "sub") {
                resolve( a - b ) ;
            }else if ( task == "mult") {
                resolve( a * b ) ;
            }else if ( task == "div") {
                resolve( a / b ) ;
            }else {
                reject( "invalid task " ) ;
            }
        }
    } ) ; 
} 

 calculator( 1 , 2 , "add" ).then( ( result ) => {
    console.log( result ) ;
    //var expectedResult = result ;    
} ).catch( ( err ) =>{
    console.log( "Error : " + err ) ;
    //var expectedResult = result ;
} ) ;

calculator(1,3,"add" ) ;
//test case 
function caculatorTest( a , b , task , expectedResult ) {
    calculator(a, b, task).then((result) => {
        //return result;
        if (result == expectedResult) {
            console.log("Test passed  for " + task + " : " , result ) ;
        } else {
            console.log("Test failed  for " + task + " : " + result + " expected result is : " + expectedResult ) ;
        }
    }).catch((err) => {
        if (err == expectedResult) {
            console.log("Test Error: ", err + " test case is passed for error" ) ;
        } else {
            console.log("Test Error: ", err + " test case is failed for error" ) ;
        }
    });
 }
caculatorTest( 1  , 2  , "add" , 3 ) ;
caculatorTest( 1  , 2  , "mult" , 2 ) ;
caculatorTest( 5  , 2  , "sub" , 3 ) ;
caculatorTest( 4  , 2  , "div" , 2 ) ;
caculatorTest( 1  , 2  , "mod" , "invalid task " ) ;
caculatorTest( 1  , "3"  , "add" , "invalid type" ) ;
// function testCalculator() {
//     calculator(1, 2, "add")
//       .then((result) => {
//         console.log("Test 1 - Addition: ", result);
//       })
//       .catch((error) => {
//         console.log("Test 1 - Addition Error: ", error);
//       });
  
//     calculator(5, 3, "sub")
//       .then((result) => {
//         console.log("Test 2 - Subtraction: ", result);
//       })
//       .catch((error) => {
//         console.log("Test 2 - Subtraction Error: ", error);
//       });
  
//     calculator(2, 4, "mult")
//       .then((result) => {
//         console.log("Test 3 - Multiplication: ", result);
//       })
//       .catch((error) => {
//         console.log("Test 3 - Multiplication Error: ", error);
//       });
  
//     calculator(10, 2, "div")
//       .then((result) => {
//         console.log("Test 4 - Division: ", result);
//       })
//       .catch((error) => {
//         console.log("Test 4 - Division Error: ", error);
//       });
  
//     calculator(5, "hello", "add")
//       .then((result) => {
//         console.log("Test 5 - Invalid Input: ", result);
//       })
//       .catch((error) => {
//         console.log("Test 5 - Invalid Input Error: ", error);
//       });
//   }
  
  // Run the unit test
  //testCalculator();
  

//caculatorTest(expectedResult , 3) ;