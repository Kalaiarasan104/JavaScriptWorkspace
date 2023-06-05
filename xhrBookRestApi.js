//xhrBookRestApi.html
//

// const XHR = new XMLHttpRequest() ;
// const result = document.getElementById("result") ;
// var header = "X-Requested-With";

// GET request - getting all the elements
function toGetAll() {
    const XHR = new XMLHttpRequest() ;
    const result = document.getElementById("result") ;
    var header = "X-Requested-With";
    XHR.open( "GET" , "https://cors-anywhere.herokuapp.com/http://localhost:8080/library-management/books") ;
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    XHR.onreadystatechange = function() {
        console.log(this.readyState) ;
        if (this.readyState === 4) {
            console.log(this.status);
            if(this.status === 200 ) {
                response = JSON.parse( XHR.response ) ;
                console.log( response ) ;
                console.log( response.length ) ;
                console.log( typeof result ) ;
                for( i = 0 ; i < response.length ; i++ ) {
                    const newElement = document.createElement( "h3" ) ;
                    newElement.textContent = 'Book Id: ' + response[i].id + ',\n Name: ' + response[i].name + ',\n Author: ' + response[i].author ;
                    result.append( newElement ) 
                }
            } else {
                console.log( "error.." ) ;
            }
        }
    }
    //XHR.setRequestHeader("Content-type", "application/json");
    //XHR.open("GET", "http://localhost:3000/api/library-management/books");
    XHR.send() ;
}
//GET request - it element by id
function toGet() {
    const XHR = new XMLHttpRequest() ;
    const result = document.getElementById("result") ;
    var header = "X-Requested-With";

    XHR.open( "GET" , "https://cors-anywhere.herokuapp.com/http://localhost:8080/library-management/books/book/10" ) ;
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200 ) {
                response = JSON.parse( XHR.response );
                console.log( response ) ;
                // console.log( response.length ) ;
                // console.log( typeof result ) ;
                    const newElement = document.createElement( "h3" ) ;
                    newElement.textContent = 'Book Id: ' + response.id + ',\n Name: ' + response.name + ',\n Author: ' + response.author ;
                    result.append( newElement ) ;
                
            } else {
                console.log( "error.." ) ;
            }
        }
    }
    
    //XHR.setRequestHeader("Content-type", "application/json");
    XHR.send() ;
}
// POST request
function toPost() {
    const XHR = new XMLHttpRequest() ;
    const result = document.getElementById("result") ;
    var header = "X-Requested-With";

    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
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
        id:12,
        name: "Birds Of Prey",
        author: "Harly Quen"
    };
    XHR.open("POST", "https://cors-anywhere.herokuapp.com/http://localhost:8080/library-management/books/book");
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    //XHR.setRequestHeader("Content-type", "application/json");
    XHR.send(JSON.stringify(data));
}

// PUT request
function toPut() {
    const XHR = new XMLHttpRequest() ;
    const result = document.getElementById("result") ;
    var header = "X-Requested-With";

    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
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

    const putData = {
        name: "Updated Book",
        author: "Unknown"
    };

    XHR.open("PUT", "https://cors-anywhere.herokuapp.com/http://localhost:8080/library-management/books/book/12");
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    //XHR.setRequestHeader("Content-type", "application/json");
    XHR.send(JSON.stringify(putData));
}

// DELETE request
function toDelete() {
    const XHR = new XMLHttpRequest() ;
    const result = document.getElementById("result") ;
    var header = "X-Requested-With";
    
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    XHR.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const response = JSON.parse(XHR.responseText);
                console.log(response);
                console.log("Todo deleted successfully");
            } else {
                console.log("Error occurred.");
            }
        }
    };

    XHR.open("DELETE", "https://cors-anywhere.herokuapp.com/http://localhost:8080/library-management/books/book/12");
    XHR.setRequestHeader(header  , "XMLHttpRequest") ;
    //XHR.setRequestHeader("Content-type", "application/json");
    XHR.send();
}