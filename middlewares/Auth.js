const jwt = require('jsonwebtoken')
const { asyncErrorHandler, ErrorResponse } = require('./Error')

const generateAuthToken = async(payload)=>{
    let token = await jwt.sign(payload,token,process.env.AUTHKEY,{expiresIn:"7d"})
    return token
}

const authMiddleware = asyncErrorHandler(async (req, res,next) => {
    let token = req.headers.authorization.split(" ")[1]
    if (!token) throw new ErrorResponse("Auth token is required", 401)
    else {
       let verifyToken = jwt.verify(token,process.env.AUTHKEY)
       if(!verifyToken) throw new ErrorResponse ("Auth token is expired or Invalid",403) 
       else next()
    }
})


module.exports = {generateAuthToken,authMiddleware}