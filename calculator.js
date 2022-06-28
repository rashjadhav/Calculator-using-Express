//jshint esversion:6
//npm install -g nodemon by installing this every time when we save the file the server will restart we dont have to clear the hyper window\
// but now we have to r8 nodemon calculator.js (once only) bez we wanted the nodemon to use earler we user node calculator.js

const express= require("express"); // these two express and bodyparser are installed by npm and the used here
const bodyParser= require("body-parser");// for sending the data in placeholder of form to calculate bodyparser is used

const app= express(); // function that represents express module
app.use(bodyParser.urlencoded({extended: true})) // this line we have to r8 to use bodyparser in our code


app.get ("/" , function(req , res){
    res.sendFile(__dirname + "/index.html")// this __dirname  means it will take the path from computer of that folder no matter whose computer is that 
    // so to avoid static path we use this here we are sending the total form so sendfile and after sending the form we get the response

    //for response or listening the server we must have send something to server that is this 
    // first we give the route path by "/" and the r8 function to responding the server
    // now we get response as hello means whichever we r8 in res.send("hello") we get as response
});

// // // // // app.get ("/contact" , function(req , res){
// // // // //     res.send("hello")

// // // // //     //here it goes to contact page by simply writing localhost:3000/contact 
// // // // //     // like this we can go to any page by simply route it to that path by /about ==it goes to about page
// // // // // });

//here we are using the post methos so we have to use app.post
//there req=request and res=response

app.post("/", function(req , res){
    var num1= Number(req.body.n1);// here number is used because rather it will take it as text 
    var num2= Number(req.body.n2);//means if 2 na d 3 enters it will give 23 as a result not 5 so number() is user
    var result = num1 + num2;

    res.send( "the result is "+ result);
})


app.listen(3000, function(){
    console.log("yes port 3000 is listening ");   
    // this app.listen is for== here we use the 3000
    //  port generally it is used if you  want you can use any other also
    //  for sending the request this port must listen what we are sending 
    //and by console.log we are checking is port is listening or not
});