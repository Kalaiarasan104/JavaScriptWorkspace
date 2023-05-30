function pizza(type , name , callback ) {
    console.log(`Pizza ${type} ${name} is oredered Successfully....`) ;
    setTimeout(function(){
        let message = `your ${type} ${name} is ready ` ;
        callback(message);
    } , 3000 ) ;

}

pizza("nonVeg" , "Chicken Cheese" , function(message){
    console.log(message);
}) ;

