const partCPU = `
    id: ID
    name: String
    socket: String
    chipset: [Chipset]
    TDP: Int
    manufacturer: String
    power_draw: Int
    core_count: Int
    isIGPU: Boolean
    max_rating: Int
    price: Int
    picture_url: String
`;

module.exports = partCPU;