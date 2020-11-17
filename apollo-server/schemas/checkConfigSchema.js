const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  input ConfigToCheck {
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

  type CheckedPC {
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

  extend type Mutation {
    checkPcConfig(config: ConfigToCheck, access_token: String): CheckedPC
  }
`;

const resolvers = {
  Query: {},
  Mutation: {
    checkPcConfig: async (parent, { config, access_token }, context, info) => {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/checkconfig",
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
