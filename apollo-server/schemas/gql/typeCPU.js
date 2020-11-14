const { gql } = require("apollo-server");

const typeCPU = gql`
  enum Socket {
    AM4
    LGA1151
  }

  enum Chipset {
    A350
    B450
    X370
    B450
    X470
    B550
    X570
    B360
    H370
    Z370
    Z390
  }

  type CPU {
    id: ID
    name: String
    socket: [Socket]
    chipset: [Chipset]
    TDP: Int
    manufacturer: String
    power_draw: Int
    core_count: Int
    isIGPU: Boolean
    max_rating: Int
    price: Int
    picture_url: String
  }
`;

module.exports = typeCPU;
