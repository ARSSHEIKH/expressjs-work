const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// #region First way to read file data and show it in page:
//if index.html is available in same directory
// const homeFile = fs.readFileSync("index.html");  

//#endregion
// #region Second way is: 
const staticPath = path.join(__dirname, '../public');
// builtin middleware
app.use(express.static(staticPath));
//#endregion


app.get('/', function (req, res) {
    res.write("homeFile")
    res.send()
})
app.get('/about', function (req, res) {
    res.send('about page')
})
app.get('/contact', function (req, res) {
    res.send('contact page')
})
app.get('/temp', function (req, res) {
    // res.send({
    //     id: 01,
    //     first_name: "Arsalan",
    //     last_name: "Sheikh"
    // });
    // OR
    res.json({
        id: 01,
        first_name: "Arsalan",
        last_name: "Sheikh"
    });
    // OR
    // res.jsonp({
    //     id: 01,
    //     first_name: "Arsalan",
    //     last_name: "Sheikh"
    // });
})
 
app.listen(8000)