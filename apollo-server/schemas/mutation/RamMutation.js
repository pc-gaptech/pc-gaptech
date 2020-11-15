const partRAM = `
id: ID
name: String
memory_type: [MemoryType]
chipset: [Chipset]
manufacturer: String
power_draw: Int
memory_speed: Int
price: Int
picture_url: String
`;
const inputRAM = `
name: String
memory_type: String
chipset: [Chipset]
manufacturer: String
power_draw: Int
memory_speed: Int
price: Int
picture_url: String
`;

module.exports = {
  partRAM,
  inputRAM,
};
