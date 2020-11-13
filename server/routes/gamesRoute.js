const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('route games')
    console.log('route games')
})

router.post('/add', (req,res) => {
    
})

module.exports = router