import { ObjectId } from 'mongoose';
import { Speaker } from "../DB/schemaTypes";

const User = require('../DB/models/speakers');

const create = (data:Speaker) => User.create(data) 
const get = () => { return User.find({}) } 
const getById = (id:ObjectId) : Speaker => { return User.findById(id) }
const deleteById  = (id:ObjectId) => { return User.findByIdAndDelete(id) }
module.exports = {
    create,
    get,
    getById,
    deleteById
}