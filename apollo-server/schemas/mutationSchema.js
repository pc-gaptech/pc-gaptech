const { gql, ApolloError } = require("apollo-server");
const redis = require("../config/redisConfig");
const { inputCPUColler } = require("./mutation/CpuCollerMutation");
const { inputCPU } = require("./mutation/CpuMutationType");
const { inputMotherboard } = require("./mutation/motherboardMutation");
const { inputCasing } = require("./mutation/casingMutation");
const { inputGPU } = require("./mutation/GpuMutation");
const { inputPowerSupplay } = require("./mutation/powerSupplayMutation");
const { inputRAM } = require("./mutation/RamMutation");
const { inputStorage } = require("./mutation/storageMutation");
const axios = require("axios");
const baseUrl = "http://localhost:3000";

const typeDefs = gql`

input inputCPUCooler {
    ${inputCPUColler}
}

input inputMotherboard {
    ${inputMotherboard}
}

input inputCasing {
    ${inputCasing}
}

input inputGPU {
    ${inputGPU}
}

input inputPowerSupply {
    ${inputPowerSupplay}
}

input inputRAM {
    ${inputRAM}
}

input inputStorage {
    ${inputStorage}
}

input inputCPU {
    ${inputCPU}
}

type DeleteMessage {
    message:String
}
extend type Mutation {
    addCpu(access_token:String, addcpu:inputCPU):CPU 
    addCpuCooler(access_token:String,addCPU:inputCPUCooler):CPUCooler
    addMotherboard(access_token:String,dataMotherboard:inputMotherboard):Motherboard
    addCasing(access_token:String,dataCasing:inputCasing):Casing
    addGPU(access_token:String,dataGPU:inputGPU):GPU
    addPowerSupply(access_token:String,dataPowerSupply:inputPowerSupply):PowerSupply
    addRAM(access_token:String,dataRAM:inputRAM):RAM
    addStorage(access_token:String,dataStorage:inputStorage):Storage
    deleteProduct(access_token:String,id:ID,part:String):DeleteMessage
}
`;
const resolvers = {
  Mutation: {
    deleteProduct: async (_, args) => {
      try {
        let { data } = await axios.delete(
          `${baseUrl}/parts/${args.part}/${args.id}/delete`,
          {
            headers: {
              access_token: args.access_token,
            },
          }
        );
        console.log(data);
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addPowerSupply: async (_, { access_token, dataPowerSupply }) => {
      console.log(dataPowerSupply, "<<<<");
      try {
        return axios({
          method: "POST",
          url: "http://localhost:3000/parts/powerSupply/add",
          data: dataPowerSupply,
          headers: {
            access_token,
          },
        })
          .then(async ({ data }) => {
            await redis.del("powersupply");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (error) {
        throw new ApolloError(err);
      }
    },
    addRAM: async (_, { access_token, dataRAM }) => {
      console.log(dataRAM);
      try {
        const {
          name,
          memory_type,
          chipset,
          manufacturer,
          power_draw,
          memory_speed,
          price,
          picture_url,
        } = dataRAM;
        return axios({
          method: "POST",
          url: "http://localhost:3000/parts/ram/add",
          data: {
            name,
            memory_type,
            chipset_memory: chipset,
            manufacturer,
            power_draw,
            memory_speed,
            price,
            picture_url,
          },
          headers: {
            access_token,
          },
        })
          .then(async ({ data }) => {
            await redis.del("ram");
            return data;
          })
          .catch((err) => {
            throw new ApolloError(err);
          });
      } catch (error) {
        throw new ApolloError(err);
      }
    },

    addCpu: async (_, { access_token, addcpu }) => {
      const {
        name,
        socket,
        chipset,
        TDP,
        manufacturer,
        power_draw,
        core_count,
        isIGPU,
        max_rating,
        price,
        picture_url,
      } = addcpu;
      console.log(addcpu);
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/parts/cpu/add`,
          data: {
            name,
            socket,
            chipset_cpu: chipset,
            TDP,
            manufacturer,
            power_draw,
            core_count,
            isIGPU,
            max_rating,
            price,
            picture_url,
          },
          headers: {
            access_token,
          },
        });
        await redis.del("cpu");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addCpuCooler: async (_, { access_token, addCPU }) => {
      console.log(addCPU, access_token);
      const {
        name,
        socket,
        TDP,
        manufacturer,
        power_draw,
        price,
        picture_url,
      } = addCPU;
      try {
        let { data } = axios({
          method: "POST",
          url: `${baseUrl}/parts/cpucooler/add`,
          data: {
            name,
            socket_cpu_cooler: socket,
            TDP,
            manufacturer,
            power_draw,
            price,
            picture_url,
          },
          headers: {
            access_token,
          },
        });
        await redis.del("cpucooler");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addMotherboard: async (_, { access_token, dataMotherboard }) => {
      console.log(dataMotherboard);
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/parts/motherboard/add`,
          data: dataMotherboard,
          headers: {
            access_token,
          },
        });
        redis.del("motherboard");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },

    addCasing: async (_, { access_token, dataCasing }) => {
      console.log(dataCasing);
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/parts/casing/add`,
          headers: {
            access_token,
          },
          data: dataCasing,
        });
        redis.del("casing");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addGPU: async (_, { access_token, dataGPU }) => {
      console.log(dataGPU, "GPU");
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/parts/gpu/add`,
          headers: {
            access_token,
          },
          data: dataGPU,
        });
        redis.del("gpu");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },

    addStorage: async (_, { access_token, dataStorage }) => {
      console.log(dataStorage, "STORAGEE");
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/parts/storage/add`,
          headers: {
            access_token,
          },
          data: dataStorage,
        });
        redis.del("storage");
        return data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
