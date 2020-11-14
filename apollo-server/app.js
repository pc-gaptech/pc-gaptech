"use strict";

const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const componentSchema = require("./schemas/componentSchema");

const typeDefs = gql`
  type Query
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, componentSchema.typeDefs],
  resolvers: [componentSchema.resolvers],
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`Ready at ${url}`);
});
