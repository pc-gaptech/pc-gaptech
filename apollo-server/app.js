"use strict";

const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const componentSchema = require("./schemas/componentSchema");
const mutationSchema = require("./schemas/mutationSchema")

const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs,
    componentSchema.typeDefs,
    // mutationSchema.typeDefs
  ],
  resolvers: [
    componentSchema.resolvers,
    mutationSchema.resolver
  ],
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`Ready at ${url}`);
});
