const partCasing = `
id: ID
name: String
capacity: Int
storage_type: [StorageType]
power_draw: Int
manufacturer: String
price: Int
picture_url: String
`
const inputCasing = `
name: String
capacity: Int
storage_type: [StorageType]
power_draw: Int
manufacturer: String
price: Int
picture_url: String
`

module.exports = {
    partCasing,
    inputCasing
}