import { gql } from "@apollo/client";

export const EDIT_CASING = gql`
  mutation EDIT_CASING(
    $id: Int
    $dataCasing: inputCasing
    $access_token: String
  ) {
    editOneCasing(
      id: $id
      dataCasing: $dataCasing
      access_token: $access_token
    ) {
      message
    }
  }
`;

export const EDIT_POWER_SUPPLY = gql`
  mutation EDIT_POWER_SUPPLY(
    $id: Int
    $dataPowerSupply: inputPowerSupply
    $access_token: String
  ) {
    editOnePowerSupply(
      id: $id
      dataPowerSupply: $dataPowerSupply
      access_token: $access_token
    ) {
      message
    }
  }
`;

export const EDIT_STORAGE = gql`
  mutation EDIT_STORAGE(
    $id: Int
    $dataStorage: inputStorage
    $access_token: String
  ) {
    editOneStorage(
      id: $id
      dataStorage: $dataStorage
      access_token: $access_token
    ) {
      message
    }
  }
`;

export const EDIT_RAM = gql`
  mutation EDIT_RAM($id: Int, $dataRAM: inputRAM, $access_token: String) {
    editOneRAM(id: $id, dataRAM: $dataRAM, access_token: $access_token) {
      message
    }
  }
`;

export const EDIT_GPU = gql`
  mutation EDIT_GPU($id: Int, $dataGPU: inputGPU, $access_token: String) {
    editOneGPU(id: $id, dataGPU: $dataGPU, access_token: $access_token) {
      message
    }
  }
`;

export const EDIT_MOTHERBOARD = gql`
  mutation EDIT_MOTHERBOARD(
    $id: Int
    $dataMotherboard: inputMotherboard
    $access_token: String
  ) {
    editOneMotherboard(
      id: $id
      dataMotherboard: $dataMotherboard
      access_token: $access_token
    ) {
      message
    }
  }
`;

export const EDIT_CPUCOOLER = gql`
  mutation EDIT_CPUCOOLER(
    $id: Int
    $dataCPUCooler: inputCPUCooler
    $access_token: String
  ) {
    editOneCPUCooler(
      id: $id
      dataCPUCooler: $dataCPUCooler
      access_token: $access_token
    ) {
      message
    }
  }
`;

export const EDIT_CPU = gql`
  mutation EDIT_CPU($id: Int, $dataCPU: inputCPU, $access_token: String) {
    editOneCPU(id: $id, dataCPU: $dataCPU, access_token: $access_token) {
      message
    }
  }
`;
