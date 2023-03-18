const validator = require('validator');
const bcryptjs = require('bcryptjs');
import { Schema, model } from 'mongoose';
import { Speaker } from "../schemaTypes"

const schema  = new Schema<Speaker>({
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
    image:{
        type:String,
        default:"https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon"
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
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
},{
    timestamps:true,
})
schema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.__v;
    delete userObject.isAdmin;
    return userObject;
}
schema.pre("save",async function(){
    const user = this;
    if(this.isModified("password"))
        this.password = await bcryptjs.hash(this.password,10);
})
const Speakers = model("Speakers",schema);

module.exports = Speakers;