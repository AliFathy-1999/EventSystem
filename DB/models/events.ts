import mongoose, {Schema,model} from 'mongoose';
import validator from 'validator';
import { Event } from "../schemaTypes.ts"
const schema : Event= new Schema({
    title:{
        type:String,
        required:true,
        minLength:6,
        maxLength:50
    },
    eventDate:{
        type:Date,
        required:true,
        validate(value:Date){
            if(!validator.isDate(value)){
                throw new Error("Event date is invalid")
            }
        },
        },
        mainSpeaker:{
            type:mongoose.Types.ObjectId,
            ref:"Speakers",
            required:true,
        },
        speakers:[{
            type:mongoose.Types.ObjectId,
            ref:"Speakers"
        }],
        students:[{
            type:Number,
            ref:"Students"
        }]
},{
    timestamps:true
})

const Events = model("Events",schema);

module.exports = Events;