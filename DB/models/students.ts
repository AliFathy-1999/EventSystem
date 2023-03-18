import {Schema,model} from 'mongoose';
const validator = require('validator');
import { Student } from "../schemaTypes"
const bcryptjs = require('bcryptjs');
const schema = new Schema<Student>({
    _id:{
        type:Number,
        required: true,
    },
    fullName:{
        type:String,
        minLength:6,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        match:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
        
        validate(value:string){
            if(value.includes("password")){
                throw new Error("Password cannot contain 'password'")
            }else if(!value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
                throw new Error("Password must contain at least one number , Capital letter and one special character")
            }
        },
    },  
    isAdmin: {
        type: Boolean,
        default: false,
      },
},{
    timestamps:true
})

const Students = model("Students",schema);
schema.pre("save",async function(){
    if(this.isModified("password"))
         this.password = bcryptjs.hash(this.password,10);
})
module.exports = Students;