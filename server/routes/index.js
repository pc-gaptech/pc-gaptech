const router = require('express').Router()
const components = require('./componentsRoute') 

router.use('/parts/:components',components)

module.exports = router