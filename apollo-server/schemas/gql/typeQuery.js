const typeQuery = `
fetchAll (access_token : String): all
fetchCPU (access_token : String): [CPU]
fetchRAM (access_token : String): [RAM]
fetchPowerSupply (access_token : String): [PowerSupply]
fetchMotherboard (access_token : String): [Motherboard]
fetchCPUCooler (access_token : String): [CPUCooler]
fetchCasing (access_token : String): [Casing]
fetchStorage (access_token : String): [Storage]
fetchGPU (access_token : String): [GPU]
findOneCPUById (id: Int, access_token : String): CPU
findOneRAMById (id: Int, access_token : String): RAM
findOnePowerSupplyById (id: Int, access_token : String): PowerSupply
findOneMotherboardById (id: Int, access_token : String): Motherboard
findOneCPUCoolerById (id: Int, access_token : String): CPUCooler
findOneCasingById (id: Int, access_token : String): Casing
findOneStorageById (id: Int, access_token : String): Storage
findOneGPUById (id: Int, access_token : String): GPU
`;
module.exports = typeQuery;
