import { gql } from "@apollo/client"

export const ADD_CPU = gql`
mutation ADD_CPU($access_token:String,$addcpu:inputCPU) {
    addCpu(access_token:$access_token,addcpu:$addcpu){
        name         
    }
}
`