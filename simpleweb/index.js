const express = require("express")

const app = express();

app.get("/", (req, res) => {
    console.log("received a request")
    res.send("Hi there 2---")
});

app.listen(8080, ()=>{
    console.log("listening on port 8080")
})