const partStorage = `
id: ID
name: String
capacity: Int
storage_type: [StorageType]
power_draw: Int
manufacturer: String
price: Int
picture_url: String
`
const inputStorage = `
name: String
capacity: Int
storage_type: [StorageType]
power_draw: Int
manufacturer: String
price: Int
picture_url: String
`

module.exports = {
    partStorage,
    inputStorage
}