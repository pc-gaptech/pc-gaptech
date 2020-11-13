const router = require('express').Router()
const { CPU } = require('../models/index')

router.get('/', (req,res) => {
    res.send('test')
    console.log('masok')
})

router.post('/', (req,res) => {
    res.send('test')
    console.log('masok')
})

module.exports = router