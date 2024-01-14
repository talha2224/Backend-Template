const ErrorMiddleware = (err,req,res,next)=>{
    res.status(err.statusCode || 500).json({msg:err.message || "Internal Server Error"})
}


class ErrorResponse extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const asyncErrorHandler = (passedFunc)=>(err,req,res,next)=>{
    Promise.resolve(passedFunc(req,res,next)).catch(next)
}


module.exports = {ErrorMiddleware,ErrorResponse,asyncErrorHandler}