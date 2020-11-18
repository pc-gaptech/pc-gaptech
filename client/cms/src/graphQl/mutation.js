import { gql } from "@apollo/client";

export const ADD_CPU = gql`
  mutation ADD_CPU($access_token: String, $addcpu: inputCPU) {
    addCpu(access_token: $access_token, addcpu: $addcpu) {
      id
      name
      socket
      chipset
      TDP
      manufacturer
      power_draw
      core_count
      isIGPU
      max_rating
      price
      picture_url
    }
  }
`;
export const ADD_GPU = gql`
  mutation ADD_GPU($access_token: String, $dataGPU: inputGPU) {
    addGPU(access_token: $access_token, dataGPU: $dataGPU) {
      id
      name
      power_draw
      manufacturer
      gpu_chipset
      price
      rating
      picture_url
    }
  }
`;
export const ADD_CPUCOOLER = gql`
  mutation ADD_CPUCOOLER($access_token: String, $addCPU: inputCPUCooler) {
    addCpuCooler(access_token: $access_token, addCPU: $addCPU) {
      id
      name
      socket
      TDP
      manufacturer
      power_draw
      price
      picture_url
    }
  }
`;

export const ADD_MOTHERBOARD = gql`
  mutation ADD_MOTHERBOARD(
    $access_token: String
    $dataMotherboard: inputMotherboard
  ) {
    addMotherboard(
      access_token: $access_token
      dataMotherboard: $dataMotherboard
    ) {
      id
      name
      socket
      chipset
      form_factor
      manufacturer
      power_draw
      price
      picture_url
    }
  }
`;

export const ADD_CASING = gql`
  mutation ADD_Casing($access_token: String, $dataCasing: inputCasing) {
    addCasing(access_token: $access_token, dataCasing: $dataCasing) {
      id
      name
      form_factor
      manufacturer
      price
      picture_url
    }
  }
`;

export const ADD_POWERSUPPLY = gql`
  mutation ADD_POWERSUPPLY(
    $access_token: String
    $dataPowerSupply: inputPowerSupply
  ) {
    addPowerSupply(
      access_token: $access_token
      dataPowerSupply: $dataPowerSupply
    ) {
      id
      name
      efficiency
      max_power
      manufacturer
      price
      picture_url
    }
  }
`;

export const ADD_RAM = gql`
  mutation ADD_RAM($access_token: String, $dataRAM: inputRAM) {
    addRAM(access_token: $access_token, dataRAM: $dataRAM) {
      id
      name
    }
  }
`;

export const ADD_STORAGE = gql`
  mutation ADD_STORAGE($access_token: String, $dataStorage: inputStorage) {
    addStorage(access_token: $access_token, dataStorage: $dataStorage) {
      id
      name
      capacity
      storage_type
      power_draw
      manufacturer
      price
      picture_url
    }
  }
`;

export const DELETE = gql`
  mutation DELETE($access_token: String, $id: ID, $part: String) {
    deleteProduct(access_token: $access_token, id: $id, part: $part) {
      message
    }
  }
`;
