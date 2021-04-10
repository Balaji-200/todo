const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.statusCode = 200
    res.send('Hello, This is todo app api')
})

module.exports = router