const jwt = require('jsonwebtoken')
require('dotenv').config()

const {
	//SinUp,
	SinIn
    //UpdateUser
} = require('../../application/use_case/index')

function generateAccessToken(user){
	return jwt.sign({Users: user}, process.env.SECRET, {expiresIn: '60m'})
}

module.exports = {

	async sinIn(req, res, next) {
		try {
            const data = {
                username,
                password
            } = req.body

			const findUserResult = await SinIn(data)
			const accessToken = generateAccessToken(username)
				res.header('authorization', accessToken)
				res.status(200).json({
					User: findUserResult,
					AccessToken: accessToken
				})
			
			next(findUserResult)
		} catch (error) {
			next(error)
		}
	},
	/*
	async sinUp(req, res, next) {
		try {
			const dataRequest = req.body
			const result = await SinUp(dataRequest)
			
			res.status(200).send(result)
			next(result)

		} catch (error) {
			console.log(error)
			next(error)
		}
	},

    async updateUserById(req, res, next) {
		try {
			const getIdRequest = req.params.id
            const dataRequest = req.body

			const result = await UpdateUser(getIdRequest, dataRequest)

			next(result)

		} catch (error) {
			next(error)
		}
	},
	*/
}