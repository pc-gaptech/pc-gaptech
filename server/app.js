const express = require('express')
const app = express()
const routes = require('./routes/index')
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res) {
    res.status(200).send('Welcome To Pc Gaptech');
});

app.use(routes)

app.listen(port , () => {
    console.log(`app listen on ${port}`)
})
   
module.exports = app