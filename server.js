const express = require("express");


const app = express();

function myMiddleware ( req, res, next){
    console.log("Inside the middle ware I created");
    next();
}


/**Stich the router to the SERVER */

 require ("./routes/idea.routes")(app);



/**STARTING SERVER */

app.listen(8080,()=>{
    console.log("Server started");
})