const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
	type RegisteredUser {
		id: ID
		username: String
		firstname: String
		lastname: String
		email: String
	}

	type LoggedIn {
		access_token: String
		is_admin: Boolean
	}

	input newUser {
		username: String
		firstname: String
		lastname: String
		email: String
		password: String
	}

	input loginUser {
		email: String
		password: String
	}

	extend type Mutation {
		register(user: newUser): RegisteredUser
		login(user: loginUser): LoggedIn
	}
`;

const resolvers = {
	Mutation: {
		register: async (parent, { user }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3000/register",
					method: "POST",
					headers: { "Content-Type": "application/json" },
					data: user,
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
		login: async (parent, { user }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3000/login",
					method: "POST",
					headers: { "Content-Type": "application/json" },
					data: user,
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
	},
};

module.exports = {
	typeDefs,
	resolvers,
};
