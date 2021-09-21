const { sign, verify } = require("jsonwebtoken");
const SECRET_WORD = process.env.SECRET_WORD

module.exports = async function createToken(data) {
    return await sign(data, SECRET_WORD)
}

module.exports = async function isTrust(token) {
    try {
        return verify(token, SECRET_WORD);
    } catch (error) {
        return false
    }
}