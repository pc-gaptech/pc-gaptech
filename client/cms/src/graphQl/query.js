import { gql } from "@apollo/client";

export const FECTH_ALL = gql`
  query FECTH_ALL($access_token: String) {
    fetchAll(access_token: $access_token) {
      dataCPU {
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
      dataRAM {
        id
        name
        memory_type
        chipset
        manufacturer
        power_draw
        memory_speed
        price
        picture_url
      }

      dataPowerSupply {
        id
        name
        efficiency
        max_power
        manufacturer
        price
        picture_url
      }
      dataMotherboard {
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
      dataCPUCooler {
        id
        name
        socket
        TDP
        manufacturer
        power_draw
        price
        picture_url
      }
      dataCasing {
        id
        name
        form_factor
        manufacturer
        price
        picture_url
      }
      dataStorage {
        id
        name
        capacity
        storage_type
        power_draw
        manufacturer
        price
        picture_url
      }
      dataGPU {
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
  }
`;
