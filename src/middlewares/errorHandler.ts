import  {Request, Response, NextFunction, ErrorRequestHandler} from "express";
import HttpException from '../exceptions/HttpException';

const errorHandler = (err: HttpException ,req: Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Someting went wrong";

    res
    .status(status)
    .json({
        statusCode: status,
        message: message
    })

}

export default errorHandler
