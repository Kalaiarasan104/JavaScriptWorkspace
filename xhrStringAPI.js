function toGetAll(){
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function (){
        console.log("ready state : "+ this.readyState);
        if(this.readyState == 4){
            console.log(" status " + this.status);
            if(this.status == 200 ){
                response =  XHR.response  ;
                console.log( response ) ;
                console.log( response.length ) ;
                console.log( typeof result ) ;
                for( i = 0 ; i < response.length ; i++ ) {
                    const newElement = document.createElement( "h3" ) ;
                    newElement.textContent =  response[i] ; 
                    result.append( newElement ) ;
                }
            } else {
                console.log( "status not matching " );
            }
        } else {
            console.log("error" );
        }
    }
    XHR.open("GET" , "http://localhost:8080/crudApi/api/string") ;
    XHR.send();
};
function toGet(){
    const XHR = new XMLHttpRequest() ;
    index = 1 ;
        XHR.onreadystatechange = function (){
            console.log("ready state : "+ this.readyState);
            if(this.readyState == 4){
                console.log(" status " + this.status);
                if(this.status == 200 ){
                    response =  XHR.response  ;
                    console.log( response ) ;
                    console.log( response.length ) ;
                    console.log( typeof result ) ;
                    const newElement = document.createElement( "h3" ) ;
                    newElement.textContent =  response; 
                    result.append( newElement ) ;   
                } else {
                    console.log( "status not matching " );
                }
            } else {
                console.log("error" );
            }
        }
    XHR.open("GET" , `http://localhost:8080/crudApi/api/string/${index}`) ;
    XHR.send();
}

function toPost(){
    const XHR = new XMLHttpRequest();
    const result = document.getElementById("result") ;
    let data = "Sparrow!"
    XHR.onreadystatechange = function() {
        console.log("ReadyState : ", this.readyState ) ;
        if ( this.readyState == 4){
            console.log("Status"+this.status);
            if(this.status == 201) {
                response = XHR.response ;
                const newElement = document.createElement( "h3" ) ;
                newElement.textContent =  response; 
                result.append( newElement +" is added ") ;   
            } else {
                console.log( "status not matching " );
            }
        } else {
            console.log("error" );
        }
    }
    XHR.open("POST" , "http://localhost:8080/crudApi/api/string") ;
    XHR.send(data);
}

function toPut(){
    const XHR = new XMLHttpRequest();
    const result = document.getElementById("result") ;
    index = 1 ;
    let data = "Stark!"
    XHR.onreadystatechange = function() {
        console.log("ReadyState : ", this.readyState ) ;
        if ( this.readyState == 4){
            console.log("Status : "+this.status);
            if(this.status == 201) {
                response = XHR.response ;
                const newElement = document.createElement( "h3" ) ;
                newElement.textContent =  response; 
                result.append( newElement +" is modified ") ;   
            } else {
                console.log( "status not matching " );
            }
        } else {
            console.log("error" );
        }
    }
    XHR.open("PUT" , `http://localhost:8080/crudApi/api/string/${index}`) ;
    XHR.send(data);
}

function toDelete() {   
    const XHR = new XMLHttpRequest() ;
    XHR.onreadystatechange = function() {
        console.log("ReadyState : ", this.readyState ) ;
        if(this.readyState == 4 ){
            console.log("Status : "+this.status);
            if(this.status == 200) {
                const response = XHR.responseText ;
                console.log(response);
            } else {
                console.log( "status not matching " );
            }
        } else {
            console.log("error" );
        }
    }
    XHR.open("DELETE" , `https://cors-anywhere.herokuapp.com/http://localhost:8080/crudApi/api/string/${index}`) ;
    XHR.send();
}
