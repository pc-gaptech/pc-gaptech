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
const typeAll = require("./gql/typeAll");
const typeQuery = require("./gql/typeQuery");
const urlComponents = "http://localhost:3000/parts/";

const typeDefs = gql`

enum Socket {
  AM4
  LGA1151
  LGA1200
}

enum Chipset {
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
  ${typeAll}
}

extend type Query {
  ${typeQuery}
}

`;
//ganti akses token disini
let access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjA1NDA0NzM1fQ.7fHAJulBFK-dcW1xeqTKx6jDLxryG0o0EnFTn_XZTtU";

const resolvers = {
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
