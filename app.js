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
require('./models/Employee')

//var Food = mongoose.model('food')
var Employees = mongoose.model('employee')

//Save data
app.post('/saveEmployeeEntry', (req, res)=>{
    console.log(req.body)

    //Create employee entry
    new Employees(req.body).save().then(()=>{
        console.log("Data Saved")
        res.redirect("employeeList.html")
    })
})

//Save data

app.post('/saveEmployeeEntry', (req, res)=>{
    console.log(req.body)

    //Create employee entry
    new Employees(req.body).save().then(()=>{
        console.log("Data Saved")
        res.redirect("employeeList.html")
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
    Employees.find().then((employee)=>{
        res.json({employee})
    })
})

//Delete Data
app.post('/deleteEmployee', (req, res)=>{
    console.log("Employee deleted " + req.body._id + " " + req.body.employee)
    Employees.findByIdAndDelete(req.body._id).exec()
    res.redirect("employeeList.html")

})

//Update Data
app.post('/updateEmployee', (req, res)=>{
    console.log("Employee updated " + req.body._id + " " + req.body.employee)
    Employees.findByIdAndUpdate(req.body._id).exec()
    res.redirect("employeeList.html")

})
