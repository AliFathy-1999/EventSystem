import express, {Request, Response , Router} from 'express';
const router : Router = express.Router();

router.get("/",async(req:Request,res:Response) => {
    res.send("event");
})

module.exports = router;