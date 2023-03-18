import mongoose, {Schema,model} from 'mongoose';
const validator = require('validator');
import { Event } from "../schemaTypes"
const schema = new Schema<Event>({
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
            type:String,
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