"use strict";

const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const componentSchema = require("./schemas/componentSchema");
const userSchema = require("./schemas/userSchema");
const gamesSchema = require("./schemas/gamesSchema");
const recommendedPCSchema = require("./schemas/recommendPcSchema");
const checkConfigSchema = require("./schemas/checkConfigSchema");
const favoritesSchema = require("./schemas/favoritesSchema");

const typeDefs = gql`
	type Query
	type Mutation
`;

const schema = makeExecutableSchema({
	typeDefs: [
		typeDefs,
		componentSchema.typeDefs,
		userSchema.typeDefs,
		gamesSchema.typeDefs,
		recommendedPCSchema.typeDefs,
		checkConfigSchema.typeDefs,
		favoritesSchema.typeDefs,
	],
	resolvers: [
		componentSchema.resolvers,
		userSchema.resolvers,
		gamesSchema.resolvers,
		recommendedPCSchema.resolvers,
		checkConfigSchema.resolvers,
		favoritesSchema.resolvers,
	],
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
	console.log(`Ready at ${url}`);
});
