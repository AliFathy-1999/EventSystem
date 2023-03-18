import mongoose,{ Types } from 'mongoose';
type Student = {
  _id:number
  fullName:string,
  password:string,
  email:string,
  isAdmin:boolean
}
type Speaker = {
  fullName:string,
  email:string,
  image:string,
  password:string,
  isAdmin:boolean
}
type Event = {
  title:string,
  eventDate:Date,
  mainSpeaker: string,
  speakers:[mongoose.Types.ObjectId],
  students:[number]
}

export { Student , Speaker , Event };