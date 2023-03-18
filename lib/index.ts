import { ErrorRequestHandler } from 'express';
const asycnWrapper = (promise:Promise<any>)=> 
    promise.then((data:any)=>[undefined,data])
    .catch((err:any)=>[err]);

module.exports = asycnWrapper;