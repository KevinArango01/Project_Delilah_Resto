const jwt = require('jsonwebtoken')
require('dotenv').config()

const {
	SignIn,
	SignUp,
	GetUserData,
    //UpdateUser
} = require('../../application/use_case/index')

function generateAccessToken(id, user, role){
	return jwt.sign({id, User: user, Role:role}, process.env.SECRET, {expiresIn: '60m'})
}

module.exports = {

	async signIn(req, res, next) {
		try {
			const data = req.body
			const findUserResult = await SignIn(data)
			if(findUserResult.status !== false){
			const {
				id,
				username,
				role,
			} = findUserResult
			
			const accessToken = generateAccessToken(id, username, role)
				res.header('authorization', accessToken)
				res.status(200).json({
					User: findUserResult,
					AccessToken: accessToken,
				})
			}
			res.status(401).send(findUserResult)
		} catch (error) {
			next(error)
		}
	},

	async signUp(req, res, next) {
		try {
			const dataRequest = req.body
			const result = await SignUp(dataRequest)
			
			res.status(200).send(result)

		} catch (error) {
			next(error)
		}
	},

	async getUserData(req, res, next) {
		try {
            const id = req.params.id
			const findUserResult = await GetUserData(id)
			res.status(200).send(
				findUserResult,
			)
		} catch (error) {
			next(error)
		}
	},
}