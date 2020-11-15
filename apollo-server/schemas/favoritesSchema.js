const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
	input newFavoriteConfig {
		name: String
		CPUId: Int
		CPUCoolerId: Int
		MotherboardId: Int
		GPUId: Int
		RAMId: Int
		StorageId: Int
		PowerSupplyId: Int
		CasingId: Int
	}

	type FavoriteConfig {
		id: ID
		name: String
		rating: Int
		CPUId: Int
		CPUCoolerId: Int
		MotherboardId: Int
		GPUId: Int
		RAMId: Int
		StorageId: Int
		PowerSupplyId: Int
		CasingId: Int
		CPU: CPU
		CPUCooler: CPUCooler
		GPU: GPU
		Casing: Casing
		Motherboard: Motherboard
		PowerSupply: PowerSupply
		RAM: RAM
		Storage: Storage
		User: RegisteredUser
	}

	type FavoriteStatus {
		message: String
	}

	extend type Mutation {
		addFavoriteConfig(config: newFavoriteConfig, access_token: String): FavoriteConfig
		deleteFavoriteConfig(id: Int, access_token: String): FavoriteStatus
	}

	extend type Query {
		getAllFavoritesConfig(access_token: String): [FavoriteConfig]
		getOneFavoriteConfig(id: Int, access_token: String): FavoriteConfig
	}
`;

const resolvers = {
	Query: {
		getAllFavoritesConfig: async (parent, { access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3000/favorites",
					method: "GET",
					headers: { access_token },
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
		getOneFavoriteConfig: async (parent, { id, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: `http://localhost:3000/favorites/${id}/detail`,
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
		addFavoriteConfig: async (parent, { config, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3000/favorites/add",
					method: "POST",
					headers: { "Content-Type": "application/json", access_token },
					data: config,
				});
				return data;
			} catch (err) {
				return new ApolloError(err.response.data.message, err);
			}
		},
		deleteFavoriteConfig: async (parent, { id, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: `http://localhost:3000/favorites/${id}/delete`,
					method: "DELETE",
					headers: { access_token },
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
