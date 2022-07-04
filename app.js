const { application, response } = require("express"); 
const path = require ("path")

const express= require (`express`);
const app=express ();

app.use(express.static("public"));

app.listen (3030,()=> {
    console.log ("puerto vivo 3030")
})
app.get("/home", (request, response) => {
    response.sendFile(path.join (__dirname, "/views/home.html"));
    
})
app.get("/", (request, response) => {
    response.sendFile(path.join (__dirname, "/views/home.html"));
    
})
app.get("/register", (request, response) => {
    response.sendFile(path.join (__dirname, "/views/register.html"));
})
app.get("/login", (request, response) => {
    response.sendFile(path.join (__dirname, "/views/login.html"));
})
