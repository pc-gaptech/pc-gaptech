const { gql, ApolloError } = require("apollo-server");

const typeDef = gql`



extend type Mutation {
    addCpu(part:String, addCpu:)
}
`