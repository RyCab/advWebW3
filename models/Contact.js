const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    
        Name:String,
        Number:Number,
        PhoneType:String,
})

mongoose.model('contact', ContactSchema)