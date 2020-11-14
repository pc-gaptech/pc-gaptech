const { gql, ApolloError } = require("apollo-server");
const redis = require("../config/redisConfig")
const { partCPU, inputCpu } = require("./mutation/CpuMutationType")
// const { partCpuColler, inputCpuColler } = require("./mutation/CpuCollerMutation")
// const { partMotherboard, inputMotherboard } = require("./mutation/motherboardMutation")
// const { partCasing, inputCasing } = require("./mutation/casingMutation")
// const { partGPU, inputGPU } = require("./mutation/GpuMutation")
// const { partPowerSupplay, inputPowerSupplay } = require("./mutation/powerSupplayMutation")
// const { partRAM, inputRAM } = require("./mutation/RamMutation")
// const { partStorage, inputStorage } = require("./mutation/storageMutation")


const typeDef = gql`
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
input inputCPU{
    ${inputCpu}
}


extend type Mutation {
    addCpu(part:String, addCpu:inputCPU):CPU
    
}
`

const resolver = {
    Mutation: {
        addCpu: async (_, args) => {
            console.log(args, "<<<")
        }
    }
}

module.exports = {
    typeDef,
    resolver
}