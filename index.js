const express = require('express')
const app = express()
const PORT = 4000;
date = require("date-format")
app.get("/",(req,res) =>{
    res.send("hello")})


app.get("/api/insta",(req,res) =>{
    const insta = {
        user : "Park",
        followers : 56,
        following : 43,
        d : date('dd:MM:', new Date()),
    };
    res.status(200).json(insta)
})
app.get("/api/fb",(req, res) => {
    const fb = {
        user : "Parkfb",
        followers : 56,
        following : 43,
        d : date('dd:MM:yyyy', new Date()),

    };
    res.status(200).jsonp(fb)
})
app.get("/api/linkedin",(req,res) => {
   const LinkedIn ={ user : "Prakhar Satyam",
    followers : 345,
    following : 123,
    d : date('dd:MM:yyyy', new Date()),
};
    res.status(200).json(LinkedIn)
})
app.get("/api/:rew",(req,res) => {
    res.status(200).send({
        param : req.params.rew
    })
})
app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`)
})