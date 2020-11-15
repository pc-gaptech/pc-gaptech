"use strict";

const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const mutationSchema = require("./schemas/mutationSchema")
const componentSchema = require("./schemas/componentSchema");
const userSchema = require("./schemas/userSchema");
const gamesSchema = require("./schemas/gamesSchema")

const typeDefs = gql`
	type Query
  type Mutation
`;

const schema = makeExecutableSchema({

  typeDefs: [typeDefs, componentSchema.typeDefs, userSchema.typeDefs, gamesSchema.typeDefs],
  resolvers: [componentSchema.resolvers, userSchema.resolvers, gamesSchema.resolvers],

});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`Ready at ${url}`);
});
