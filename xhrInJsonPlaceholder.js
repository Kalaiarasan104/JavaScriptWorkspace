//index1.html
//

const XHR = new XMLHttpRequest() ;
const result = document.getElementById("result") ;
// GET request - getting all the elements
function toGetAll() {
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200 ) {
                response = JSON.parse( XHR.response ) ;
                console.log( response ) ;
                //console.log( response.length ) ;
                //console.log( typeof result ) ;
                // for( i = 0 ; i < response.length ; i++ ) {
                //     const newElement = document.createElement( "h3" ) ;
                //     newElement.textContent = 'User Id: ' + response[i].userId + ',\n ID: ' + response[i].id + ',\n Title: ' + response[i].title ;
                //     //result.innerHTML = 'User Id: ' + response.userId + ', ID: ' + response.id + ', Title: ' + response.title  ;
                //     //result.append ( 'User Id: ' + response.userId + ', ID: ' + response.id + ', Title: ' + response.title  ) ;
                //     result.append( newElement ) 
                // }
            } else {
                console.log( "error.." ) ;
            }
        }
    }
    XHR.open( "GET" , "https://jsonplaceholder.typicode.com/todos") ;
    XHR.send() ;
}
//GET request - it element by id
function toGet() {
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200 ) {
                response = JSON.parse( XHR.response );
                console.log( response ) ;
                // console.log( response.length ) ;
                // console.log( typeof result ) ;
                    // const newElement = document.createElement( "h3" ) ;
                    // newElement.textContent = 'User Id: ' + response.userId + ',\n ID: ' + response.id + ',\n Title: ' + response.title ;
                            //result.innerHTML = 'User Id: ' + response.userId + ', ID: ' + response.id + ', Title: ' + response.title  ;
                            //result.append ( 'User Id: ' + response.userId + ', ID: ' + response.id + ', Title: ' + response.title  ) ;
                    //result.append( newElement ) ;
                
            } else {
                console.log( "error..") ;
            }
        }
    }
    XHR.open( "GET" , "https://jsonplaceholder.typicode.com/todos/4") ;
    XHR.send() ;
}
// POST request
function toPost() {
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 201) {
                const response = JSON.parse(XHR.responseText);
                console.log(response);
            } else {
                console.log("Error occurred.");
            }
        }
    };
    const data = {
        id:201,
        title: "New Todo",
        completed: false,
        userId: 1
    };

    XHR.open("POST", "https://jsonplaceholder.typicode.com/todos");
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.send(JSON.stringify(data));
}

// PUT request
function toPut() {
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const response = JSON.parse(XHR.responseText);
                console.log(response);
            } else {
                console.log("Error occurred.");
            }
        }
    };

    const putData = {
        id: 1,
        title: "Updated Todo",
        completed: true,
        userId: 1
    };

    XHR.open("PUT", "https://jsonplaceholder.typicode.com/todos/1");
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.send(JSON.stringify(putData));
}

// DELETE request
function toDelete() {
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const response = JSON.parse(XHR.responseText);
                console.log(response);
                console.log("Todo deleted successfully");
                //response = JSON.parse(XHR.response);
                // for (let i = 0; i < response.length; i++) {
                //     if (index == i) {
                //         this.response[i].toDelete() ;
                //         console.log("Todo deleted successfully");
                //         return ;
                //     }  
                // }
            } else {
                console.log("Error occurred.");
            }
        }
    };

    XHR.open("DELETE", "https://jsonplaceholder.typicode.com/todos/1000");
    XHR.send();
}