import {Schema,model} from 'mongoose';
import validator from 'validator';
import { Speaker } from "../schemaTypes.ts"
const schema : Speaker = new Schema({
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
        image:{
            type:String,
            default:"https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon"
        }
    },
},{
    timestamps:true
})

const Speakers = model("Speakers",schema);

module.exports = Speakers;