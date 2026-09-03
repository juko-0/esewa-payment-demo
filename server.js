const express = require("express");
const app = express();
const routes = require('./route')
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', routes);
app.listen(3000, () =>{
console.log("server running on port 3000")
})