const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");
const redis = require("../config/redisConfig");
const partCPU = require("./gql/partCPU");
const partCPUCooler = require("./gql/partCpuCooler");
const partMotherboard = require("./gql/partMotherdboard");
const partCasing = require("./gql/partCasing");
const partStorage = require("./gql/partStorage");
const partPowerSupply = require("./gql/partPowerSupply");
const partRAM = require("./gql/partRAM");
const partGPU = require("./gql/partGPU");
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

enum StorageType {
  SATA_HDD
  SATA_SSD
  NVME_SSD
}

enum FormFactor {
  ATX
  Micro_ATX
  Mini_ITX
}

enum MemoryType {
  DDR3
  DDR4
}

type CPU {
  ${partCPU}
}

type Storage {
  ${partStorage}
}

type Casing {
  ${partCasing}
}

type CPUCooler {
  ${partCPUCooler}
}

type Motherboard {
  ${partMotherboard}
}

type PowerSupply {
  ${partPowerSupply}
}

type RAM {
  ${partRAM}
}

type GPU {
  ${partGPU}
}

type all {
  DataGPU: [GPU]
  DataCPU: [CPU]
}


extend type Query {
  fetchCPU: [CPU]
  fetchRAM: [RAM]
  fetchPowerSupply: [PowerSupply]
  fetchMotherboard: [Motherboard]
  fetchCPUCooler: [CPUCooler]
  fetchCasing: [Casing]
  fetchStorage: [Storage]
  fetchGPU: [GPU]
}
`;

const resolvers = {
  Query: {
    fetchCPU: async () => {
      try {
        console.log("masuk");
        const CPUsCache = await redis.get("cpu");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(urlComponents)
            .then(async ({ data }) => {
              console.log(data);
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

    fetchRAM: async () => {
      try {
        const RAMsCache = await redis.get("ram");
        if (RAMsCache) {
          console.log("chace kepanggil");
          return JSON.parse(RAMsCache);
        } else {
          return axios
            .get(urlComponents + "ram")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("ram", JSON.stringify(data));
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

    fetchPowerSupply: async () => {
      try {
        const powerSupply = await redis.get("powerSupply");
        if (powerSupply) {
          console.log("chace kepanggil");
          return JSON.parse(powerSupply);
        } else {
          return axios
            .get(urlComponents + "powerSupply")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("powerSupply", JSON.stringify(data));
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

    fetchMotherboard: async () => {
      try {
        const motherboard = await redis.get("motherboard");
        if (motherboard) {
          console.log("chace kepanggil");
          return JSON.parse(motherboard);
        } else {
          return axios
            .get(urlComponents + "motherboard")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("motherboard", JSON.stringify(data));
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

    fetchCPUCooler: async () => {
      try {
        const CPUsCache = await redis.get("cpucooler");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(urlComponents + "cpucooler")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("cpucooler", JSON.stringify(data));
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

    fetchCasing: async () => {
      try {
        const CasingCache = await redis.get("casing");
        if (CasingCache) {
          console.log("chace kepanggil");
          return JSON.parse(CasingCache);
        } else {
          return axios
            .get(urlComponents + "casing")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("casing", JSON.stringify(data));
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

    fetchGPU: async () => {
      try {
        const GPUCache = await redis.get("gpu");
        if (GPUCache) {
          console.log("chace kepanggil");
          return JSON.parse(GPUCache);
        } else {
          return axios
            .get(urlComponents + "gpu")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("gpu", JSON.stringify(data));
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

    fetchStorage: async () => {
      try {
        const storageCache = await redis.get("storage");
        if (storageCache) {
          console.log("chace kepanggil");
          return JSON.parse(storageCache);
        } else {
          return axios
            .get(urlComponents + "storage")
            .then(async ({ data }) => {
              console.log(data);
              console.log("chace ke set");
              await redis.set("storage", JSON.stringify(data));
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
