import { Student } from "../DB/schemaTypes";
const User = require('../DB/models/students');

const create = (data:Student) => User.create(data) 
const get = () => { return User.find({}) } 
const getById = (id:number) => { return User.findById(id) }
const deleteById  = (id:number) => { return User.findByIdAndDelete(id) }
module.exports = {
    create,
    get,
    getById,
    deleteById
}