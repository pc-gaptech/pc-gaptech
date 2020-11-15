import { gql } from "@apollo/client"

export const ADD_CPU = gql`
mutation ADD_CPU($addcpu:inputCPU) {
    addCpu(addcpu:$addcpu){
        name 
        
    }
}
`