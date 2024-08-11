const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect("mongodb+srv://farooqafrina28:MJefQFa8RIjkb0Se@cluster0.7af0a07.mongodb.net/employeeApp?retryWrites=true&w=majority&appName=Cluster0"
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });


