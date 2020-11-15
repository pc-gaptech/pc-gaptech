const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
	type Game {
		id: ID
		name: String
		description: String
		picture_url: String
		rating: Int
	}

	input newGame {
		name: String
		description: String
		picture_url: String
		rating: Int
	}

	extend type Mutation {
		addGame(game: newGame, access_token: String): Game
	}

	extend type Query {
		getGames(access_token: String): [Game]
		getGamesConfig(access_token: String, configRating: Int): [Game]
	}
`;
const resolvers = {
	Query: {
		getGames: async (parent, { access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3001/games",
					method: "GET",
					headers: { access_token },
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
		getGamesConfig: async (parent, { access_token, configRating }, context, info) => {
			try {
				const { data } = await axios({
					url: `http://localhost:3001/games/recommend?config_rating=${configRating}`,
					method: "GET",
					headers: { access_token },
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
	},
	Mutation: {
		addGame: async (parent, { game, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3001/games/add",
					method: "POST",
					headers: { "Content-Type": "application/json", access_token },
					data: game,
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
