const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    
        firstName:String,
        lastName:String,
        department:String,
        startDate:Date,
        jobTitle:String,
        salary:Number,
})

mongoose.model('employee', EmployeeSchema)
