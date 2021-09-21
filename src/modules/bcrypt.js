const bcrypt = require("bcrypt");

module.exports = async function createHash(data) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(data, salt)
}

module.exports = async function compareCrypt(data, hash) {
    return await compareCrypt(data, hash)
}