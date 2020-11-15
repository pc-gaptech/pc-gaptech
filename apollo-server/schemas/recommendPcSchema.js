const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
	input newRecommendPC {
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

	type RecommendedPC {
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
	}

	extend type Mutation {
		addRecommendedPC(config: newRecommendPC, access_token: String): RecommendedPC
	}

	extend type Query {
		getRecommendedPC(access_token: String, gamesId: String): RecommendedPC
	}
`;
const resolvers = {
	Query: {
		getRecommendedPC: async (parent, { gamesId, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: `http://localhost:3000/recommendpc?gamesId=${gamesId}`,
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
		addRecommendedPC: async (parent, { config, access_token }, context, info) => {
			try {
				const { data } = await axios({
					url: "http://localhost:3000/recommendpc",
					method: "POST",
					headers: { "Content-Type": "application/json", access_token },
					data: config,
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
