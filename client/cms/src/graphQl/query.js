import { gql } from "@apollo/client"

export const FECTH_ALL = gql`
query FECTH_ALL{
    fetchAll{ 
        dataCPU {
            name
        }
        dataRAM {
            name
        }
        dataPowerSupply {
            name
        }
        dataMotherboard{
            name
        }
        dataCPUCooler {
            name
        }
        dataCasing {
            name
        }
        dataStorage{
            name
        }
        dataGPU {
            name
        }
    }
}

`