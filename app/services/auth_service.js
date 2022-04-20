const { ApolloServer, gql, UserInputError } = require('apollo-server');

const BaseService = require('./base_service');
/**
 * Auth Service
 */
class AuthService extends BaseService {
	/**
	 * @constructor
	 */
	constructor(config) {
		super();
		this.config = config;
	}

	handleResponse(res) {
		console.log(res.body);
		if (res.body.errors) {
			return {
				__typename: 'UserResponseError',
				...res.body,
			};
		}
		return {
			__typename: 'UserResponse',
			...res.body,
		};
	}

	async registerUser(user) {
		try {
			const res = await this.post(
				`${this.config.url}/api/v1/users`,
				user,
				this.config
			);
			return this.handleResponse(res);
		} catch (error) {
			console.log(error);
		}
	}
	async getUser(token) {
		const userHeaderConfig = {
			authorization: token,
		};
		const headerConfig = this.addHeaderAuthorizationConfig(
			this.config,
			userHeaderConfig
		);
		try {
			const res = await this.get(
				`${this.config.url}/api/v1/auth`,
				headerConfig
			);

			return this.handleResponse(res);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = AuthService;
