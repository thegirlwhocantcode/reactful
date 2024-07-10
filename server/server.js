const express = require('express')
const app = express()

//get api
app.get("/api", (req, res)=> {
    res.json({"users": ["Netri", "Neel", "Heds"]})
} )

app.listen(3000, () => (console.log("Server started on port 3000")))


