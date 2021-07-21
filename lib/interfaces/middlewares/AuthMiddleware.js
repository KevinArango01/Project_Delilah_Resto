const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
	try {
		const accessToken = req.headers['authorization']

		if (accessToken === undefined || accessToken === null) {
			throw res.status(401).send({ error: 'Not authorized, Token null' })
		} else {
			jwt.verify(accessToken, process.env.SECRET, (error, user) => {
				if(error){
					throw res.status(401).send({ error: 'Not authorized, Token invalid' })
				}else{
					next()
				}
			})
		}
	} catch (error) {
		console.log(error)
	}
}