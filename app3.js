const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/employeeEntries', {
    useNewURLParser:true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err)
})


//require('./models/Food')
require('./models/Contact')

//var Food = mongoose.model('food')
var Contact = mongoose.model('contact')

//Save data
app.post('/saveContact', (req, res)=>{
    console.log(req.body)

    //Create contact entry
    new Employees(req.body).save().then(()=>{
        console.log("Data Saved")
        res.redirect("contactList.html")
    })
})


////////
//Basic code saving some data
/*var Food = mongoose.model('Food', {typeOfFood:String})

var food = new Food({typeOfFood:"Pizza"})
food.save().then(()=>{
    console.log("Food Saved")
})*/
////////

app.use(express.static(__dirname+"/views"))
app.listen(3000, ()=>{
    console.log("Connected to port 3000")
})

//Get data
app.get('/getData', (req, res)=>{
    Contacts.find().then((contact)=>{
        res.json({contact})
    })
})

//Delete Data
app.post('/deleteContact', (req, res)=>{
    console.log("Contact deleted " + req.body._id + " " + req.body.contact)
    Contacts.findByIdAndDelete(req.body._id).exec()
    res.redirect("contactList.html")

})

//Update Data
app.post('/updateontact', (req, res)=>{
    console.log("Contact updated " + req.body._id + " " + req.body.contact)
    Employees.findByIdAndUpdate(req.body._id).exec()
    res.redirect("contactList.html")

})
