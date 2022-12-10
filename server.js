const express = require('express')
const path = require('path');
const app = express()
const PORT = 3001;
const phones = require("./Phones.json");
// app.use(express.static(path.join(__dirname, "app", "build")))
app.get("/api", async (req, res) => {
    let json = {};
    json["phones"] = phones["vivo"];
    res.json(JSON.stringify(json));
})
// app.get("*", async (req, res) => {
//     res.sendFile(path.join(__dirname, "app", "build", "index.html"))
// }) 
app.listen(PORT, () => console.log("server on -> " + PORT))