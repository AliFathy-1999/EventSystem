import express, {Request, Response , Router,NextFunction} from 'express';
const {studentController} = require("../controllers/index")
const router : Router = express.Router();
const asycnWrapper = require('../lib/index');
const Counter = require('../DB/models/counter');

router.post("/",async (req:Request,res:Response, next:NextFunction) => {
    const { body: { fullName, email, password } } = req;
    const incrementalId = await Counter.findOneAndUpdate(
        {id:"autoInc"},
        { $inc: { seq: 1 } },
        { new: true}
      );
    let _id;    
    if(incrementalId == null) {
        Counter.create({id:"autoInc",seq:1})
        _id=1
    }else{
        _id = incrementalId.seq;
    }
    
    const student = studentController.create({ _id , fullName, email, password});
    const [err, data] = await asycnWrapper(student);
    if (err) return next(err);
    res.status(200).json(data);
})
router.get("/",async (req:Request,res:Response, next:NextFunction) => {
    const student = studentController.get();
    const [err, data] = await asycnWrapper(student);
    if (err) return next(err);
    res.status(200).json(data);
})
router.get("/:id",async (req:Request,res:Response, next:NextFunction) => {
    const {params:{ id }} = req;
    const student = studentController.getById(id);
    const [err, data] = await asycnWrapper(student);
    if (err) return next(err);
    res.status(200).json(data);
})
router.delete("/:id",async (req:Request,res:Response, next:NextFunction) => {
    const { params:{ id } } = req;
    const speaker = studentController.deleteById(id);
    const [err, data] = await asycnWrapper(speaker);
    if (err) return next(err);
    res.status(200).json(data);
})
module.exports = router;