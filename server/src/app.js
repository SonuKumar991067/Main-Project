const express = require('express');
const app=express();

//routing all the foods
const foodRoutes = require('./routes/foodRoutes.js');

app.get('/echo', (req, res)=>{
   res.send("Recieved ") 
});
app.use(foodRoutes);

module.exports=app;
