const ADD_CPU = `
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

`

const ADD_CPU_COLLER = `

`

module.exports = {
    POST_CPU,
}