import {Schema,model} from 'mongoose';
const validator =  require('validator');
import { Student } from "../schemaTypes.ts"
const schema : Student= new Schema({
    _id:{
        type:Number,
    },
    fullName:{
        type:String,
        minLength:6,
        maxLength:20
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
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            validate(value:string){
                if(!validator.isEmail(value))
                    throw new Error("Invalid Email, your input must be matched with email formate")            
            }
        },
    },
},{
    timestamps:true
})

const Students = model("Students",schema);

module.exports = Students;