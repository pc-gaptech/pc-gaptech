const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");
const redis = require("../config/redisConfig");
const partCPU = require("./gql/partCPU");
const partCPUCooler = require("./gql/partCpuCooler");
const urlComponents = "http://localhost:3000/parts/";

const typeDefs = gql`
enum Socket {
  AM4
  LGA1151
}

enum Chipset {
  A350
  B450
  X370
  X470
  B550
  X570
  B360
  H370
  Z370
  Z390
}

type CPU {
  ${partCPU}
}

type CPUCooler{
  ${partCPUCooler}
}

extend type Query {
  CPUs: [CPU]
  CPUCoolers: [CPUCooler]
}

`;

const resolvers = {
  Query: {
    CPUs: async () => {
      try {
        const CPUsCache = await redis.get("cpu");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(urlComponents + "cpu")
            .then(async ({ data }) => {
              console.log("---------", data);
              console.log("chace ke set");
              await redis.set("cpu", JSON.stringify(data));
              return data;
            })
            .catch((err) => {
              throw new ApolloError(err);
            });
        }
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
