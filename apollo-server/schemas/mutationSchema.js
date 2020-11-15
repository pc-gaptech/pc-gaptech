const { gql, } = require("apollo-server");
const redis = require("../config/redisConfig")
const { inputCpuColler } = require("./mutation/CpuCollerMutation")
const { inputCpu } = require("./mutation/CpuMutationType")
const { inputMotherboard } = require("./mutation/motherboardMutation")
const { inputCasing } = require("./mutation/casingMutation")
const { inputGPU } = require("./mutation/GpuMutation")
const { inputPowerSupplay } = require("./mutation/powerSupplayMutation")
const { inputRAM } = require("./mutation/RamMutation")
const { inputStorage } = require("./mutation/storageMutation")
const axios = require("axios")
const baseUrl = "http://localhost:3000"

const typeDefs = gql`

input inputCpuColler {
    ${inputCpuColler}
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

input inputPowerSupplay {
    ${inputPowerSupplay}
}

input inputRAM {
    ${inputRAM}
}

input inputStorage {
    ${inputStorage}
}

input inputCPU {
    ${inputCpu}
}
extend type Mutation {
    addCpu(access_token:String, addcpu:inputCPU):CPU 
    addCpuColler(access_token:String,addCPU:inputCpuColler):CPUCooler
    addMotherboard(access_token:String,addMotherboard:inputMotherboard):Motherboard
    addCasing(access_token:String,addCasing:inputCasing):Casing
    addGPU(access_token:String,addGPU:inputGPU):GPU
    addPowerSupplay(access_token:String,addPowerSupplay:inputPowerSupplay):PowerSupply
    addRAM(access_token:String,addRAM:inputRAM):RAM
    addStorage(access_token:String,addStorage:inputStorage):Storage
}
`
const resolvers = {
    Mutation: {
        addCpu: async (_, args) => {
            console.log(args, "<<<")
            const { name, socket, chipset,
                TDP, manufacturer, power_draw,
                core_count, isIGPU, max_rating,
                price, picture_url
            } = args.addcpu
            try {

                axios.post(`${baseUrl}/cpu/add`)
            } catch (error) {

            }
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}