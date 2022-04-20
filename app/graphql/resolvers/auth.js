module.exports = {
	Query: {
		async getUser(_, args, { token }) {
			//token is destructured from context
			const authService = require('../../config/di').get('authService');
			return authService.getUser(token);
		},
	},
	Mutation: {
		async registerUser(_, { registerInput: args }, context) {
			//args is the second parameter but we destructured registerInput and renamed to args

			const body = {
				first_name: args.first_name,
				last_name: args.last_name,
				username: args.username,
				email: args.email,
				password: args.password,
			};

			const authService = require('../../config/di').get('authService');
			return authService.registerUser(body);
		},
	},
};
