const bcrypt = require("bcryptjs");

const hashPassword = async(password)=>{
    let securePassword = await bcrypt.hash(password,10)
    return securePassword
}

const compareHashPassword = async (password,hashPassword)=>{
    let comparPassword = await bcrypt.compare(password,hashPassword)
    return comparPassword
}

module.exports = {hashPassword,compareHashPassword}