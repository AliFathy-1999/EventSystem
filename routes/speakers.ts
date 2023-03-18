import express, {Request, Response , Router,NextFunction} from 'express';
const router : Router = express.Router();
const asycnWrapper = require('../lib/index');
const { speakerController } = require("../controllers/index")

router.post("/",async (req:Request,res:Response, next:NextFunction) => {
    const { body: { fullName, email, password ,image} } = req;
    const speaker = speakerController.create({ fullName, password, email, image});
    const [err, data] = await asycnWrapper(speaker);
    if (err) return next(err);
    res.status(200).json(data);
})

router.get("/",async (req:Request,res:Response, next:NextFunction) => {
    const speakers = speakerController.get();
    const [err, data] = await asycnWrapper(speakers);
    if (err) return next(err);
    res.status(200).json(data);
})
router.get("/:id",async (req:Request,res:Response, next:NextFunction) => {
    const {params:{ id }} = req;
    const speaker = speakerController.getById(id);
    const [err, data] = await asycnWrapper(speaker);
    if (err) return next(err);
    res.status(200).json(data);
})
router.delete("/:id",async (req:Request,res:Response, next:NextFunction) => {
    const { params:{ id } } = req;
    const speaker = speakerController.deleteById(id);
    const [err, data] = await asycnWrapper(speaker);
    if (err) return next(err);
    res.status(200).json(data);
})
module.exports = router;