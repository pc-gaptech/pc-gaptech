const { gql, ApolloError } = require("apollo-server");
const axios = require("axios");
const redis = require("../config/redisConfig");
const partCPU = require("./gql/partCPU");
const inputCPU = require("./inputType/inputCPU");
const partCPUCooler = require("./gql/partCpuCooler");
const inputCPUCooler = require("./inputType/inputCPUCooler");
const partMotherboard = require("./gql/partMotherdboard");
const inputMotherboard = require("./inputType/inputMotherboard");
const partCasing = require("./gql/partCasing");
const inputCasing = require("./inputType/inputCasing");
const partStorage = require("./gql/partStorage");
const inputStorage = require("./inputType/inputStorage");
const partPowerSupply = require("./gql/partPowerSupply");
const inputPowerSupply = require("./gql/partPowerSupply");
const partRAM = require("./gql/partRAM");
const inputRAM = require("./inputType/inputRAM");
const partGPU = require("./gql/partGPU");
const inputGPU = require("./inputType/inputGPU");
const typeAll = require("./gql/typeAll");
const typeQuery = require("./gql/typeQuery");
const urlComponents = "http://localhost:3000/parts/";

const typeDefs = gql`

enum Socket {
  AM4
  LGA1151
  LGA1200
  LGA1150
}
enum storage_type {
  SATA_HDD, 
  SATA_SSD, 
  NVME_SSD,
}
enum Chipset {
  b450
  A320
  B350
  X370
  B450
  X470
  B550
  X570
  Z490
  B460
  H470
  H410
  Z390
  B365
  H370
  Z370
  A350
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
  ${typeAll}
}

type ComponentStatus {
  message: String
}

extend type Query {
  ${typeQuery}
}

extend type Mutation {
  editOneCPU (id: Int, dataCPU: inputCPU, access_token: String) : ComponentStatus
  editOneStorage (id: Int, dataStorage: inputStorage, access_token: String) : ComponentStatus
  editOneCasing (id: Int, dataCasing: inputCasing, access_token: String) : ComponentStatus
  editOneCPUCooler (id: Int, dataCPUCooler: inputCPUCooler, access_token: String) : ComponentStatus
  editOneMotherboard (id: Int, dataMotherboard: inputMotherboard, access_token: String) : ComponentStatus
  editOnePowerSupply (id: Int, dataPowerSupply: inputPowerSupply, access_token: String) : ComponentStatus
  editOneRAM (id: Int, dataRAM: inputRAM, access_token: String) : ComponentStatus
  editOneGPU (id: Int, dataGPU: inputGPU, access_token: String) : ComponentStatus
}

`;

const resolvers = {
  Mutation: {
    editOneCPU: async (parent, { id, dataCPU, access_token }) => {
      try {
        return axios({
          url: `${urlComponents}/cpu/${id}/update`,
          method: "put",
          data: dataCPU,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("cpu");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneStorage: async (parent, { id, dataStorage, access_token }) => {
      console.log("masuk");
      try {
        return axios({
          url: `${urlComponents}/storage/${id}/update`,
          method: "put",
          data: dataStorage,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("storage");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneCasing: async (parent, { id, dataCasing, access_token }) => {
      try {
        return axios({
          url: `${urlComponents}/casing/${id}/update`,
          method: "put",
          data: dataCasing,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("casing");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneCPUCooler: async (parent, { id, dataCPUCooler, access_token }) => {
      try {
        return axios({
          url: `${urlComponents}/cpucooler/${id}/update`,
          method: "put",
          data: dataCPUCooler,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("cpucooler");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneMotherboard: async (
      parent,
      { id, dataMotherboard, access_token }
    ) => {
      try {
        return axios({
          url: `${urlComponents}/motherboard/${id}/update`,
          method: "put",
          data: dataMotherboard,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("motherboard");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOnePowerSupply: async (
      parent,
      { id, dataPowerSupply, access_token }
    ) => {
      try {
        return axios({
          url: `${urlComponents}/powerSupply/${id}/update`,
          method: "put",
          data: dataPowerSupply,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("powerSupply");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneRAM: async (parent, { id, dataRAM, access_token }) => {
      try {
        return axios({
          url: `${urlComponents}/ram/${id}/update`,
          method: "put",
          data: dataRAM,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("ram");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    editOneGPU: async (parent, { id, dataGPU, access_token }) => {
      try {
        return axios({
          url: `${urlComponents}/gpu/${id}/update`,
          method: "put",
          data: dataGPU,
          headers: { access_token },
        })
          .then(async ({ data }) => {
            await redis.del("gpu");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
  Query: {
    fetchAll: async (parent, { access_token }) => {
      try {
        // const all = await redis.get("all");
        // if (all) {
        //   console.log("chace kepanggil");
        //   return JSON.parse("all");
        // }
        // else {
        return axios
          .get(urlComponents, {
            data: {
              test: "sds",
            },
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            const resultFetchAllComponents = {
              dataCPU: data.CPU,
              dataRAM: data.RAM,
              dataPowerSupply: data.PowerSupply,
              dataMotherboard: data.Motherboard,
              dataCPUCooler: data.CPUCooler,
              dataCasing: data.Casing,
              dataStorage: data.Storage,
              dataGPU: data.GPU,
            };
            // await redis.set("all", JSON.stringify(resultFetchAllComponents));
            return resultFetchAllComponents;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
        // }
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    fetchCPU: async (parent, { access_token }) => {
      try {
        const CPUsCache = await redis.get("cpu");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(urlComponents + "cpu", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchRAM: async (parent, { access_token }) => {
      try {
        const RAMsCache = await redis.get("ram");
        if (RAMsCache) {
          console.log("chace kepanggil");
          return JSON.parse(RAMsCache);
        } else {
          return axios
            .get(urlComponents + "ram", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchPowerSupply: async (parent, { access_token }) => {
      try {
        const powerSupply = await redis.get("powerSupply");
        if (powerSupply) {
          console.log("chace kepanggil");
          return JSON.parse(powerSupply);
        } else {
          return axios
            .get(urlComponents + "powerSupply", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchMotherboard: async (parent, { access_token }) => {
      try {
        const motherboard = await redis.get("motherboard");
        if (motherboard) {
          console.log("chace kepanggil");
          return JSON.parse(motherboard);
        } else {
          return axios
            .get(urlComponents + "motherboard", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchCPUCooler: async (parent, { access_token }) => {
      try {
        const CPUsCache = await redis.get("cpucooler");
        if (CPUsCache) {
          console.log("chace kepanggil");
          return JSON.parse(CPUsCache);
        } else {
          return axios
            .get(urlComponents + "cpucooler", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchCasing: async (parent, { access_token }) => {
      try {
        const CasingCache = await redis.get("casing");
        if (CasingCache) {
          console.log("chace kepanggil");
          return JSON.parse(CasingCache);
        } else {
          return axios
            .get(urlComponents + "casing", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchGPU: async (parent, { access_token }) => {
      try {
        const GPUCache = await redis.get("gpu");
        if (GPUCache) {
          console.log("chace kepanggil");
          return JSON.parse(GPUCache);
        } else {
          return axios
            .get(urlComponents + "gpu", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    fetchStorage: async (parent, { access_token }) => {
      try {
        const storageCache = await redis.get("storage");
        if (storageCache) {
          console.log("chace kepanggil");
          return JSON.parse(storageCache);
        } else {
          return axios
            .get(urlComponents + "storage", {
              headers: {
                access_token,
              },
            })
            .then(async ({ data }) => {
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

    findOneCPUById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/cpu/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneRAMById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/ram/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOnePowerSupplyById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/powerSupply/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneMotherboardById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/motherboard/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneCPUCoolerById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/cpucooler/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneCasingById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/casing/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneStorageById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/storage/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    findOneGPUById: async (parent, { id, access_token }) => {
      try {
        return axios
          .get(`${urlComponents}/gpu/${id}/detail`, {
            headers: {
              access_token,
            },
          })
          .then(async ({ data }) => {
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
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
