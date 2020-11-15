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

export const DELETE = gql`
  mutation DELETE($access_token: String, $id: ID, $part: String) {
    deleteProduct(access_token: $access_token, id: $id, part: $part) {
      message
    }
  }
`;
