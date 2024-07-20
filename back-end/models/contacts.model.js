import mongoose, { Mongoose, model } from "mongoose";

const contactsSchema= new mongoose.Schema({
   
    Fname:{type:String},
    Lname:{type:String},
    email:{type:String},
    number:{type:String},
    photo:{type:String},
    dob:{type:String},
    altnumber:{type:String}
 
})

export default mongoose.model.contacts || mongoose.model('contact',contactsSchema)