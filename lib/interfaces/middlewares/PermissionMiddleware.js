const jwt_decode = require('jwt-decode')
require('dotenv').config()

module.exports = (req, res, next) => {
	try {
		const accessToken = req.headers['authorization']
        const accessTokenDecoded = jwt_decode(accessToken);
        const {
            Role
        } = accessTokenDecoded
		if (Role === 2) {
			next()
		} else {
			throw res.status(401).send({ error: 'Not authorized, you do not have administrator permissions'})
		}
	} catch (error) {
		console.log(error)
	}
}