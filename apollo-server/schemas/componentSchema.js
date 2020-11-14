const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");
const redis = require("../config/redisConfig");
const typeCPU = require("./gql/typeCPU");
const urlComponents = "http://localhost:3000/parts";

const typeDefs = gql`

    extend type Query {
        CPUs: [${typeCPU}]
    }
`;

const resolvers = {
  Query: {
    movies: async () => {
      try {
        const CPUsCache = await redis.get("CPU");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(`${urlComponents}/CPU`)
            .then(async ({ data }) => {
              console.log("chace ke set");
              await redis.set("CPU", JSON.stringify(data));
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
