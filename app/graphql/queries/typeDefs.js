const { gql } = require('apollo-server');

module.exports = gql`
	type UserResponse {
		msg: String
		token: String
	}
	input RegisterInput {
		first_name: String
		last_name: String
		username: String
		email: String
		password: String
	}

	type Error {
		value: String
		msg: String
		param: String
		location: String
	}

	type UserResponseError {
		errors: [Error]
	}

	type User {
		user: Users
	}

	type Users {
		_id: String
		first_name: String
		last_name: String
		username: String
		email: String
		date: String
	}

	union UserResult = UserResponse | UserResponseError

	type Mutation {
		registerUser(registerInput: RegisterInput): UserResult
	}

	type Query {
		_dummy: String
		getUser: User
	}
`;
