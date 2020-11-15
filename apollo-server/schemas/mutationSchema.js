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
    addCpu(addcpu:inputCPU):CPU 
    addCpuColler(addCPU:inputCpuColler):CPUCooler
    addMotherboard(addMotherboard:inputMotherboard):Motherboard
    addCasing(addCasing:inputCasing):Casing
    addGPU(addGPU:inputGPU):GPU
    addPowerSupplay(addPowerSupplay:inputPowerSupplay):PowerSupply
    addRAM(addRAM:inputRAM):RAM
    addStorage(addStorage:inputStorage):Storage
}
`

const resolvers = {
    Mutation: {
        addCpu: async (_, args) => {
            console.log(args.addcpu, "<<<")
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