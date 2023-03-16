import { Types } from 'mongoose';
export type Student = {
    _id:number
    fullName:string,
    password:string,
    email:string
  }
  export type Speaker = {
    fullName:string,
    password:string,
    email:string
  }
  export type Event = {
    title:string,
    eventDate:Date,
    mainSpeaker: Types.ObjectId,
    speakers:[Types.ObjectId],
    students:[number]
  }
