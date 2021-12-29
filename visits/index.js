const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
    host: "redis-server",
    ports : 6379
})

client.set("visits", 0)

app.get("/", (req, res) =>{
    
    client.get("visits",(err, visits) =>{
        res.send(" Number of vists"+ visits)
        if(parseInt(visits) ==1) {
            process.exit(0)
        }
        client.set("visits", parseInt(visits)+1)
    } )
})

app.listen(8081, ()=>{
    console.log("listening port 8080")
})