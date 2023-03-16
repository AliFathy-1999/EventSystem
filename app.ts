import express, {Application, NextFunction, Request, Response , ErrorRequestHandler} from 'express';
const app : Application = express();
const cors = require("cors");
const routes = require("./routes")
require("./DB/connects")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

const errorHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
    res.status(400).send({
        apiStatus:false,
        message:err.message
    });
};
app.use(errorHandler);

app.use('/students', routes.studentsRoute );
app.use('/speakers', routes.speakersRoute);
app.use('/events', routes.eventsRoute);

module.exports = app;