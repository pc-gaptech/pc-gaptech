const partCpuColler = `
id: ID
name: String
socket: [Socket]
TDP: Int
manufacturer: String
power_draw: Int
price: Int
picture_url: String

`
const inputCpuColler = `
name: String
socket: [Socket]
TDP: Int
manufacturer: String
power_draw: Int
price: Int
picture_url: String
`

module.exports = {
    partCpuColler,
    inputCpuColler
}