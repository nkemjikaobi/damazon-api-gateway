require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./app/graphql/resolvers/index');
const typeDefs = require('./app/graphql/queries/typeDefs');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		// get the user token from the headers
		const token = req.headers.authorization;

		return { token };
	},
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  API Gateway Server ready at ${url}`);
});
