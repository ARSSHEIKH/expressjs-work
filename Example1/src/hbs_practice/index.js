const express = require('express');
const path = require('path')
const app = express();

//for partials
const hbs = require('hbs')

const templatePath = path.join(__dirname, "./templates/views")
const partialsPath = path.join(__dirname, "./templates/partials")
// to set the view engine
app.set("view engine", "hbs");

// Change the dafault folder of hbs that is views
// i.e: here I have change it to templates
app.set("views", templatePath);

// partials
hbs.registerPartials(partialsPath)

//template engine route
// simple without any variable
// app.get("/", (req, res)=>{
//     res.render("index")
// })

// with Variable
app.get("/", (req, res)=>{
    res.render("index",{
        variableName: "Index.hbs"
    })
})
app.get("/about", (req, res)=>{
    res.render("about",{
        variableName: "about.hbs"
    })
})

app.listen(4000, ()=>{
    console.log("Server is Running on http://localhost:4000/")
})