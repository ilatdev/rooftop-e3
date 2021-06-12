const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {

let file = path.resolve('src', 'index.html')

res.sendFile(file)

});


app.listen(3000, () => {
    console.log("Your app is listening on port 3000. http://localhost:3000/");
})